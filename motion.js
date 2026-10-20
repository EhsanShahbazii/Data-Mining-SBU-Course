// Small, interruptible transitions. Calculations and final chart geometry remain exact.
export const reducedMotion=()=>typeof window!=='undefined'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ease=t=>1-Math.pow(1-t,3);
const chartJobs=new WeakMap(),dialogJobs=new WeakMap();

export function reveal(element,duration=300){
 if(!element||reducedMotion())return;
 element.getAnimations().forEach(a=>a.cancel());
 element.animate([{opacity:.35,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration,easing:'cubic-bezier(.2,.75,.25,1)'});
}

export function updateText(element,html){
 if(element.innerHTML===html)return;
 const hadContent=element.childNodes.length>0;
 element.innerHTML=html;
 if(hadContent&&!reducedMotion()){
  element.getAnimations().forEach(a=>a.cancel());
  element.animate([{opacity:.65},{opacity:1}],{duration:180,easing:'ease-out'});
 }
}

const numberPattern=/[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/g;
// Only interpolate SVG values with matching commands and point counts.
export function interpolateValue(from,to){
 const a=String(from).match(numberPattern)?.map(Number),b=String(to).match(numberPattern)?.map(Number);
 if(!a||!b||a.length!==b.length||String(from).replace(numberPattern,'#')!==String(to).replace(numberPattern,'#'))return null;
 if(!a.every(Number.isFinite)||!b.every(Number.isFinite))return null;
 return t=>{if(t>=1)return String(to);let index=0;return String(to).replace(numberPattern,()=>{const i=index++;return String(Math.round((a[i]+(b[i]-a[i])*t)*10000)/10000);});};
}

export function updateChart(host,html){
 const previous=chartJobs.get(host);
 if(previous?.target===html)return;
 previous?.cancel();
 const template=document.createElement('template');template.innerHTML=html.trim();
 const next=template.content.firstElementChild,current=host.firstElementChild;
 const state={target:html,cancel:()=>{}};chartJobs.set(host,state);
 if(!current||!next||reducedMotion()){host.replaceChildren(template.content);host.dataset.motionState='idle';return;}
 const oldNodes=[...current.querySelectorAll('path,rect,circle,text')],newNodes=[...next.querySelectorAll('path,rect,circle,text')];
 const attrs=['d','x','y','width','height','cx','cy','r','opacity','stroke-width'];
 const tweens=[];
 let compatible=current.tagName===next.tagName&&current.getAttribute('viewBox')===next.getAttribute('viewBox')&&oldNodes.length===newNodes.length;
 if(compatible){
  for(let i=0;i<oldNodes.length;i++){
   const old=oldNodes[i],fresh=newNodes[i];
   if(old.tagName!==fresh.tagName){compatible=false;break;}
   for(const attr of attrs){
    const from=old.getAttribute(attr),to=fresh.getAttribute(attr);
    if(from===to)continue;
    const blend=from!==null&&to!==null?interpolateValue(from,to):null;
    if(!blend){compatible=false;break;}
    tweens.push({element:old,attr,blend});
   }
   if(!compatible)break;
  }
 }
 host.dataset.motionState='animating';
 if(compatible){
  host.dataset.motionType='morph';
  oldNodes.forEach((node,i)=>{
   const fresh=newNodes[i];
   if(node.tagName.toLowerCase()==='text')node.textContent=fresh.textContent;
   for(const attr of ['fill','stroke','style']){const value=fresh.getAttribute(attr);if(value!==null)node.setAttribute(attr,value);}
  });
  let frame;const start=performance.now();
  const finish=()=>{host.replaceChildren(next);host.dataset.motionState='idle';};
  state.cancel=()=>cancelAnimationFrame(frame);
  const tick=now=>{
   if(!host.isConnected){state.cancel();return;}
   const t=reducedMotion()?1:Math.min(1,(now-start)/310),e=ease(t);
   for(const item of tweens)item.element.setAttribute(item.attr,item.blend(e));
   if(t<1)frame=requestAnimationFrame(tick);else finish();
  };
  frame=requestAnimationFrame(tick);
 }else{
  host.dataset.motionType='crossfade';
  current.setAttribute('aria-hidden','true');current.dataset.ghost='true';
  current.style.cssText='position:absolute;inset:0;width:100%;pointer-events:none';
  host.replaceChildren(next,current);
  const outgoing=current.animate([{opacity:1},{opacity:0}],{duration:200,easing:'ease-out',fill:'forwards'});
  const incoming=next.animate([{opacity:0},{opacity:1}],{duration:240,easing:'ease-out'});
  const cleanup=()=>{current.remove();host.dataset.motionState='idle';};
  state.cancel=()=>{outgoing.cancel();incoming.cancel();cleanup();};
  incoming.finished.then(cleanup,()=>{});
 }
}

export function openDialog(dialog){
 const previous=dialogJobs.get(dialog);if(dialog.open&&!previous?.closing)return;previous?.animation?.cancel();
 dialog.classList.remove('is-closing');
 if(!dialog.open)dialog.showModal();
 if(reducedMotion()){dialogJobs.delete(dialog);return;}
 const animation=dialog.animate([{opacity:0,transform:'translateY(16px) scale(.97)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:260,easing:'cubic-bezier(.18,.8,.25,1)'});
 dialogJobs.set(dialog,{animation,closing:false});
}

export function closeDialog(dialog){
 if(!dialog.open)return;
 const previous=dialogJobs.get(dialog);if(previous?.closing)return;
 const current=getComputedStyle(dialog),opacity=current.opacity,transform=current.transform;
 previous?.animation?.cancel();
 if(reducedMotion()){dialog.close();dialog.classList.remove('is-closing');dialogJobs.delete(dialog);return;}
 dialog.classList.add('is-closing');
 const animation=dialog.animate([{opacity,transform},{opacity:0,transform:'translateY(10px) scale(.98)'}],{duration:170,easing:'ease-in',fill:'forwards'});
 const state={animation,closing:true};dialogJobs.set(dialog,state);
 animation.finished.then(()=>{
  if(dialogJobs.get(dialog)!==state)return;
  dialog.close();animation.cancel();dialog.classList.remove('is-closing');dialogJobs.delete(dialog);
 },()=>{});
}

export function smoothDetails(details){
 const summary=details.querySelector('summary'),content=details.querySelector(':scope > div');
 if(!summary||!content)return;
 let animation,desiredOpen=details.open;
 summary.addEventListener('click',event=>{
  event.preventDefault();desiredOpen=!desiredOpen;
  const start=details.open?content.getBoundingClientRect().height:0;
  animation?.cancel();
  if(reducedMotion()){details.open=desiredOpen;content.style.height='';content.style.overflow='';return;}
  details.open=true;
  const end=desiredOpen?content.scrollHeight:0;
  content.style.overflow='hidden';
  animation=content.animate([{height:start+'px',opacity:start===0?0:1},{height:end+'px',opacity:desiredOpen?1:0}],{duration:240,easing:'cubic-bezier(.2,.75,.25,1)',fill:'forwards'});
  const active=animation;
  active.finished.then(()=>{if(animation!==active)return;details.open=desiredOpen;active.cancel();content.style.overflow='';},()=>{});
 });
}
