"""Rebuild the complete web edition from the retained LaTeX source."""
from pathlib import Path
import re, json, html, shutil, subprocess, sys
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist' if (ROOT/'dist/index.html').exists() else ROOT
SOURCE = DIST/'assets/lecture.tex'
LATEX = ROOT.parent/'latex' if (ROOT.parent/'latex/main.tex').exists() else ROOT/'notes'
def expand_tex(path):
    text = path.read_text()
    return re.sub(r'\\input\{([^}]+)\}', lambda m: expand_tex(LATEX/m[1]), text)
SOURCE.write_text(expand_tex(LATEX/'main.tex'))

def arg(s, start):
    assert s[start] == '{'
    depth = 1
    i = start + 1
    while depth:
        if s[i] == '{' and s[i-1] != '\\': depth += 1
        if s[i] == '}' and s[i-1] != '\\': depth -= 1
        i += 1
    return s[start+1:i-1], i

def replace_command(s, name, fn):
    pattern = re.compile(r'\\' + name + r'\s*\{')
    pos = 0
    while m := pattern.search(s, pos):
        value, end = arg(s, m.end()-1)
        replacement = fn(value)
        s = s[:m.start()] + replacement + s[end:]
        pos = m.start() + len(replacement)
    return s

s = SOURCE.read_text()
s = s[s.index(r'\end{titlepage}')+len(r'\end{titlepage}'):s.index(r'\end{document}')]
s = re.sub(r'(?m)^%.*$', '', s)
figure_count = 0
def figure(m):
    global figure_count
    token = '\\texttt{WEBFIGURE' + chr(65+figure_count) + '}'
    figure_count += 1
    return '\n'+token+'\n'
s = re.sub(r'\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}', figure, s, flags=re.S)
labels = {'definition':'تعریف', 'result':'نتیجهٔ کلیدی', 'important':'دقت کنید', 'example':'مثال حل‌شده'}
for env, label in labels.items():
    s = replace_command(s, 'begin\{'+env+'\}', lambda title, e=env, l=label: r'\begin{quote}\textbf{BOX'+e.upper()+' '+l+' | '+title+'}\par ')
    s = s.replace(r'\end{'+env+'}', r'\end{quote}')
# Preserve each question and answer as separate semantic units.
s = s.replace(r'\begin{selftests}', r'\begin{enumerate}').replace(r'\end{selftests}', r'\end{enumerate}')
s = replace_command(s, 'begin\{selftest\}', lambda title: r'\item\begin{quote}\textbf{QUIZQUESTION '+title+r'}\par ')
s = s.replace(r'\end{selftest}', r'\end{quote}')
s = replace_command(s, 'answer', lambda answer: r'\par\textbf{QUIZANSWER}\par '+answer+r'\par ')
s = replace_command(s, 'source', lambda x: r'\textit{منبع مطالعه: '+x+'}\par ')
s = replace_command(s, 'edit', lambda x: r'\begin{quote}\textbf{BOXEDIT تکمیل یا اصلاح علمی}\par '+x+r'\end{quote}')
s = replace_command(s, 'figcap', lambda x: r'\textit{'+x+'}\par ')
for cmd in ['lr','textcolor']:
    if cmd == 'lr': s = replace_command(s, cmd, lambda x: x)
s = replace_command(s, 'labref', lambda x: r'\textit{آزمایشگاه پیشنهادی. '+x+'}\par ')
s = replace_command(s, 'checkanswer', lambda x: r'\textbf{پاسخ کوتاه.} '+x+r'\par ')
s = s.replace(r'\sol', r'\par\textbf{حل.} ')
s = re.sub(r'\\(?:begin|end)\{(?:LTR|center)\}', '', s)
s = re.sub(r'\\(?:clearpage|appendix|begingroup|endgroup|small|selectfont|tableofcontents)\b', '', s)
s = re.sub(r'\\(?:pagenumbering|linespread)\{[^}]*\}', '', s)
s = re.sub(r'\\setlength\{[^}]*\}\{[^}]*\}', '', s)
s = re.sub(r'\\(?:addcontentsline)\{[^}]*\}\{[^}]*\}\{[^}]*\}', '', s)
s = re.sub(r'\\renewcommand\{\\arraystretch\}\{[^}]*\}', '', s)
# Simplify table column descriptors without altering any cells.
s = re.sub(r'>\{[^}]*\}p\{[^}]*\}', 'l', s)
s = re.sub(r'(?<!\\)p\{\d+mm\}', 'l', s)
s = re.sub(r'\\begin\{longtable\}(\{[^}]*\})\s*.*?\\endfirsthead\s*.*?\\endhead', r'\\begin{longtable}\1\n\\toprule صفحات مبنا & محل و موضوع بازنویسی\\\\\\midrule\n', s, flags=re.S)
tmp = ROOT/'tools/book-normalized.tex'
tmp.write_text(s)
pandoc = ROOT.parent.parent/'statistical-methods-web/.venv/lib'
bins = list(pandoc.glob('python*/site-packages/pypandoc/files/pandoc')) + list((ROOT.parent/'statistical-methods-web/.venv/lib').glob('python*/site-packages/pypandoc/files/pandoc'))
exe = shutil.which('pandoc') or (str(bins[0]) if bins else __import__('pypandoc').get_pandoc_path())
r = subprocess.run([exe, '-f', 'latex', '-t', 'html5', '--mathjax', '--wrap=none', str(tmp)], capture_output=True, text=True, check=True)
body = r.stdout
body = re.sub(r'<code>WEBFIGURE([A-Z])</code>', lambda m: '<span class="book-figure" data-figure="'+str(ord(m[1])-65)+'"></span>', body)
body = re.sub(r'<blockquote>\s*<p><strong>BOX([A-Z]+)\s*(.*?)</strong></p>', lambda m: '<blockquote class="book-box '+m[1].lower()+'"><p class="box-title">'+m[2]+'</p>', body, flags=re.S)
quiz_pattern = re.compile(r'<blockquote>\s*<p><strong>QUIZQUESTION (.*?)</strong></p>(.*?)<p><strong>QUIZANSWER</strong></p>(.*?)</blockquote>', re.S)
def quiz_card(m):
    title, question, answer = m.groups()
    return ('<div class="selftest"><h3>'+title+'</h3><div class="selftest-question">'+question+
            '</div><details class="selftest-answer"><summary>نمایش پاسخ و توضیح</summary><div>'+answer+'</div></details></div>')
quiz_count = len(quiz_pattern.findall(body))
body = quiz_pattern.sub(quiz_card, body)
assert 'QUIZQUESTION' not in body and 'QUIZANSWER' not in body, 'Unparsed exercise marker'
# An exercise remains a list item; answers are closed native disclosures.
body = re.sub(r'<ol>(\s*<li>\s*<div class="selftest")', r'<ol class="selftest-list">\1', body)
chapters = []
for n, chunk in enumerate(re.split(r'<h1[^>]*>', body)[1:]):
    title, content = chunk.split('</h1>', 1)
    title = re.sub('<[^>]+>', '', title)
    chapter = {'id': 'chapter-'+str(n), 'title': html.unescape(title), 'intro': '', 'sections': []}
    parts = re.split(r'<h2[^>]*>', content)
    chapter['intro'] = parts[0]
    for i, part in enumerate(parts[1:]):
        sectiontitle, sectionbody = part.split('</h2>',1)
        chapter['sections'].append({'id': f's-{n}-{i}', 'title': re.sub('<[^>]+>','',sectiontitle), 'html':sectionbody})
    chapters.append(chapter)
assert len(chapters) == 9, [c['title'] for c in chapters]
(DIST/'book.json').write_text(json.dumps(chapters, ensure_ascii=False))
(DIST/'assets').mkdir(exist_ok=True)
vendor = DIST/'vendor'
vendor.mkdir(exist_ok=True)
class MathParser(HTMLParser):
    def __init__(self): super().__init__();self.active=False;self.data=[];self.math=[]
    def handle_starttag(self,tag,attrs):
        if tag=='span' and 'math' in dict(attrs).get('class','').split():self.active=True;self.data=[]
    def handle_data(self,data):
        if self.active:self.data.append(data)
    def handle_endtag(self,tag):
        if self.active and tag=='span':self.math.append(''.join(self.data)[2:-2]);self.active=False
parser=MathParser();parser.feed(body)
(ROOT/'tools/math-expressions.json').write_text(json.dumps(parser.math,ensure_ascii=False))
print(json.dumps({'chapters':len(chapters),'sections':sum(len(c['sections']) for c in chapters),'boxes':body.count('book-box'),'math':len(parser.math),'figures':figure_count,'selftests':quiz_count,'pandoc_warnings':r.stderr},ensure_ascii=False))

# Keep downloadable chapters synchronized with the same retained source.
if '--with-pdf' in sys.argv:
    subprocess.run([sys.executable, str(ROOT/"tools/build_chapter_exports.py")], check=True)
