"""Index the retained original PDFs, Persian translations and chapter readings."""
from pathlib import Path
import fitz,json
ROOT=Path(__file__).resolve().parent.parent
DIST=ROOT/'dist' if (ROOT/'dist/index.html').exists() else ROOT
names=['Introduction','Preprocessing','Classification_Part1','Classification_Part2','Regression','Clustering','Association_Analysis']
folders=['01_introduction','02_preprocessing','03_classification_part1','04_classification_part2','05_regression','06_clustering','07_association_analysis']
titles=['مقدمه‌ای بر داده‌کاوی','پیش‌پردازش داده‌ها','طبقه‌بندی؛ درخت تصمیم و ارزیابی','طبقه‌بندی؛ بیز، SVM و شبکه‌های عصبی','رگرسیون','خوشه‌بندی و کشف ناهنجاری','تحلیل وابستگی و قواعد انجمنی']
def pdf(path):
    p=DIST/path
    with fitz.open(p) as d:
        assert len(d)>0
        return {'path':path,'pages':len(d),'bytes':p.stat().st_size}
resources=[]
for i,(name,folder,title) in enumerate(zip(names,folders,titles),1):
    resources.append({'id':f'deck-{i}','chapter':i,'title':title,
      'original':pdf(f'Slides/IE500_DM_{i:02}_{name}.pdf'),
      'translation':pdf(f'Translated_Slides/{i:02}_{name}_FA.pdf'),
      'reading':pdf(f'Textbook_Readings/{i:02}_{name}_Textbook_Reading.pdf'),
      'source':f'https://github.com/EhsanShahbazii/Data-Mining-SBU-Course/tree/main/translations/{folder}'})
(DIST/'resources.js').write_text('export const RESOURCES='+json.dumps(resources,ensure_ascii=False,indent=2)+';\n')
print('Indexed 7 original decks, 7 Persian translations and 7 selected readings.')
