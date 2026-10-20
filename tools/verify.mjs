import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
const dist=new URL(fs.existsSync(new URL('../dist/index.html',import.meta.url))?'../dist/':'../',import.meta.url);
const A=await import(new URL('algorithms.js',dist));
const {LABS,LAB_GUIDES}=await import(new URL('labs.js',dist));
const katex=(await import(new URL('vendor/katex/katex.mjs',dist))).default;
const readWeb=p=>fs.readFileSync(new URL(p,dist),'utf8');
const near=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);
near(A.gini([0,0,1,1]),.5);
const income=[60,70,75,85,90,95,100,120,125,220].map((x,i)=>({x,y:0,label:+(i>=3&&i<=5)}));
near(A.splitGini(income,97.5).weighted,.3);
near(A.splitGini(income,80).weighted,12/35);
near(A.naiveBayes(['sunny','cool','high','true'],0).posterior[0],3402/4277,1e-10);
near(A.naiveBayes(['missing','missing','missing','missing']).posterior[1],9/14);
near(A.naiveBayes(['overcast','cool','high','true'],0).posterior[0],0);
assert.ok(A.naiveBayes(['overcast','cool','high','true'],1).posterior[0]>0);
const c=A.confusion([.9,.8,.7,.4],[1,0,1,0],.7);assert.deepEqual([c.tp,c.fp,c.fn,c.tn],[2,1,0,1]);
near(A.roc([.9,.8,.7,.4],[1,0,1,0]).auc,.75);near(A.roc([.5,.5],[1,0]).auc,.5);
const metric=A.regressionMetrics([2,4,6],[3,4,4]);near(metric.mae,1);near(metric.mse,5/3);near(metric.r2,.375);
assert.ok(A.regressionMetrics([1,2,3],[10,10,10]).r2<0);
const fit=A.polynomial([{x:1,y:2},{x:2,y:3},{x:3,y:5}],1);near(fit.coefficients[0],1/3);near(fit.coefficients[1],1.5);
assert.deepEqual(A.pava([1,4,3,2,5]).fit,[1,3,3,3,5]);near(A.pava([1,4,3,2,5]).sse,2);
const km=A.kmeans([{x:1,y:0},{x:2,y:0},{x:8,y:0},{x:9,y:0}],2,8,1);near(km.sse,1);
for(let i=1;i<km.history.length;i++)assert.ok(km.history[i]<=km.history[i-1]+1e-9);
assert.ok(A.silhouette([{x:1,y:0},{x:2,y:0},{x:8,y:0},{x:9,y:0}],[0,0,1,1])>.8);
const db=A.dbscan([0,.1,.2,.35,2].map(x=>({x,y:0})),.16,3);assert.deepEqual(db.roles,['border','core','core','border','noise']);assert.equal(db.groups,1);
const h=A.hierarchical([{x:0,y:0},{x:2,y:0},{x:5,y:0},{x:9,y:0}],'single',3);assert.equal(h.groups.length,1);assert.deepEqual(h.history.map(m=>m.height),[2,3,4]);
const ap=A.apriori(A.transactions,.6);assert.deepEqual(ap.levels.map(l=>l.frequent.length),[4,4,0]);assert.equal(A.apriori(A.transactions,.5).minCount,3);
assert.equal(A.supportCount(A.transactions,['B','M','D']),2);
const ar=A.association(A.transactions,['D'],['R']);near(ar.confidence,.75);near(ar.lift,1.25);
near(A.association(A.transactions,['R'],['D']).lift,ar.lift);
const lift=A.contingency(3,1,15,1);near(lift.lift,5/6);
near(A.contingency(70,10,10,10).jaccard,A.contingency(70,10,10,110).jaccard);
assert.equal(A.contingency(0,0,0,0).base,null);
near(A.tfidf(['داده مدل','داده خوشه','داده مدل'],'داده',false).idf,0);
near(A.tfidf(['داده مدل','داده خوشه','داده مدل'],'داده',true).idf,1);
const pc=A.pca2([{x:-2,y:-2},{x:-1,y:-1},{x:1,y:1},{x:2,y:2}]);near(pc.theta,Math.PI/4);near(pc.ratio,1);
const lo=A.lof([0,.1,.2,3].map(x=>({x,y:0})),2);assert.ok(lo[3]>10);assert.ok(lo.every(Number.isFinite));
const tree=A.cart([{x:0,y:0,label:0},{x:1,y:0,label:0},{x:2,y:0,label:1},{x:3,y:0,label:1}],2,1);assert.equal(A.predictTree(tree,{x:2.5,y:0}),1);
const book=JSON.parse(readWeb('book.json'));assert.equal(book.length,9);assert.equal(LABS.length,21);
for(const lab of LABS)assert.ok(book[lab.chapter].sections.some(s=>s.title.includes(lab.section)),`Unmapped lab ${lab.id}: ${lab.section}`);
const macros={'\\E':'\\mathbb{E}','\\Var':'\\operatorname{Var}','\\Cov':'\\operatorname{Cov}','\\MSE':'\\operatorname{MSE}','\\Bias':'\\operatorname{Bias}','\\SE':'\\operatorname{SE}','\\iid':'\\overset{\\mathrm{iid}}{\\sim}','\\N':'\\mathcal{N}','\\R':'\\mathbb{R}','\\Prob':'\\mathbb{P}'};
const expressions=JSON.parse(fs.readFileSync('tools/math-expressions.json','utf8'));
for(const expression of expressions)katex.renderToString(expression,{displayMode:true,throwOnError:true,strict:'ignore',macros});
if(fs.existsSync(new URL('assets/chapters/index.json',dist))){
 const exports=JSON.parse(readWeb('assets/chapters/index.json'));assert.equal(exports.length,9);
 for(const e of exports){assert.ok(fs.readFileSync(new URL(e.pdf,dist)).subarray(0,4).toString()==='%PDF');assert.ok(readWeb(e.tex).includes('دکتر شیرین شعاعی'));}
 const actual=crypto.createHash('sha256').update(fs.readFileSync(new URL('assets/lecture.tex',dist))).digest('hex');assert.equal(actual,readWeb('assets/chapters/source.sha256').trim());
}
console.log(`PASS: numerical reference cases, ROC ties, PAVA, PCA, CART, monotone k-means, DBSCAN roles, LOF, Apriori and rule metrics.`);
console.log(`PASS: ${expressions.length} equations; ${book.reduce((n,c)=>n+c.sections.length,0)} sections; all ${LABS.length} contextual laboratories; retained chapter sources.`);

for(const lab of LABS)assert.equal(LAB_GUIDES[lab.id]?.length,2,`Missing teaching guide ${lab.id}`);
const quizzes=book.map(c=>(c.sections.map(s=>s.html).join('').match(/class="selftest"/g)||[]).length);
assert.deepEqual(quizzes.slice(1,8),[6,6,10,6,6,6,12]);
for(const c of book)for(const s of c.sections){assert.ok(!s.html.includes('QUIZQUESTION'));assert.equal((s.html.match(/class="selftest"/g)||[]).length,(s.html.match(/<details class="selftest-answer">/g)||[]).length);assert.ok(!s.html.includes('class="selftest-answer" open'));}
const step=A.networkStep();near(step.h,.6224593312018546);near(step.a,.5609254179424822);near(step.gradients.w,-.2063683134337606);near(step.gradients.v,-.27330607069525636);
for(const key of ['w','bh','v','bo']){const base={w:.5,bh:0,v:2,bo:-1},eps=1e-6;const numeric=(A.networkStep({...base,[key]:base[key]+eps}).loss-A.networkStep({...base,[key]:base[key]-eps}).loss)/(2*eps);near(numeric,step.gradients[key],1e-7);}
assert.ok(A.networkStep(step.next).loss<step.loss);
const xor=[{x:0,y:0,label:0},{x:0,y:1,label:1},{x:1,y:0,label:1},{x:1,y:1,label:0}],xt=A.cart(xor,2,1);assert.deepEqual(xor.map(p=>A.predictTree(xt,p)),[0,1,1,0]);
const scaleFit=A.fitScaler([{x:20,y:1},{x:40,y:1},{x:60,y:1}]);near(A.transformScale([{x:80,y:1}],scaleFit,'minmax')[0].x,1.5);near(A.transformScale([{x:80,y:1}],scaleFit,'standard')[0].y,0);
console.log('PASS: 52 closed question/answer pairs, all seven chapters, zero-gain XOR splits, frozen training scales, analytic gradients against finite differences.');

const reference=JSON.parse(fs.readFileSync('tools/numerical-reference.json','utf8'));
function nearArray(actual,expected,tol=1e-7){assert.equal(actual.length,expected.length);actual.forEach((x,i)=>Array.isArray(x)?nearArray(x,expected[i],tol):near(x,expected[i],tol));}
for(const c of reference.cases){
 if(c.type==='scale'){const t=A.transformScale(c.q,A.fitScaler(c.X),c.mode);nearArray(t.map(p=>[p.x,p.y]),c.expected);}
 if(c.type==='pca'){const p=A.pca2(c.X);near(p.ratio,c.expected.ratio);nearArray(p.projected.map(p=>[p.x,p.y]),c.expected.projected);}
 if(c.type==='knn')assert.deepEqual(c.q.map(q=>A.knn(c.X,q,c.k).label),c.expected);
 if(c.type==='lof')nearArray(A.lof(c.X,c.k),c.expected,1e-6);
 if(c.type==='dbscan'){const d=A.dbscan(c.X,c.eps,4);assert.deepEqual(d.roles,c.expected.roles);assert.equal(d.groups,c.expected.groups);}
 if(c.type==='hierarchy')nearArray(A.hierarchical(c.X,c.mode).history.map(h=>h.height),c.expected);
 if(c.type==='pava')nearArray(A.pava(c.y,c.weights).fit,c.expected);
 if(c.type==='polynomial')nearArray(A.polynomial(c.X,c.degree,c.lambda).coefficients,c.expected,1e-6);
 if(c.type==='auc')near(A.roc(c.scores,c.labels).auc,c.expected);
}
for(const support of [.2,.3,.4,.5,.6,.7,.8,.9,1]){const result=A.apriori(A.transactions,support),items=[...new Set(A.transactions.flat())].sort(),expected=[];for(let mask=1;mask<1<<items.length;mask++){const subset=items.filter((_,i)=>mask&(1<<i));if(A.supportCount(A.transactions,subset)>=Math.ceil(A.transactions.length*support-1e-10))expected.push(subset.join(','));}assert.deepEqual(result.levels.flatMap(l=>l.frequent.map(f=>f.items.join(','))).sort(),expected.sort());}
for(const seed of [1,2,3,7,11])for(const k of [1,2,3,6]){const result=A.kmeans(A.clusters(),k,20,seed);for(let i=1;i<result.history.length;i++)assert.ok(result.history[i]<=result.history[i-1]+1e-9);}
console.log(`PASS: ${reference.cases.length} independent NumPy/scikit-learn/SciPy fixtures; exhaustive Apriori at all support thresholds; Lloyd monotonicity across 20 configurations.`);

const {RESOURCES}=await import(new URL('resources.js',dist));assert.equal(RESOURCES.length,7);
for(const item of RESOURCES)for(const kind of ['original','translation','reading']){const f=item[kind];assert.ok(fs.readFileSync(new URL(f.path,dist)).subarray(0,4).toString()==='%PDF');assert.ok(f.pages>0);assert.equal(fs.statSync(new URL(f.path,dist)).size,f.bytes);}
assert.equal(RESOURCES.reduce((sum,r)=>sum+r.original.pages,0),419);
assert.ok(!readWeb('assets/lecture.tex').includes('علیرضا جهانبخش'));
assert.ok(!readWeb('index.html').includes('علیرضا جهانبخش'));
console.log('PASS: 21 retained downloadable course PDFs, 419 original slide pages, sole compiler Ehsan Shahbazi.');
