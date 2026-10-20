<p align="center">
  <img src="assets/banner.jpg" alt="Data Mining Course Banner" width="100%" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15);">
</p>

<h1 align="center">درس داده‌کاوی (IE500 Data Mining)</h1>
<h3 align="center">جزوهٔ فارسی، آزمایشگاه‌های تعاملی و اسلایدهای اصلی و ترجمه‌شده</h3>

<p align="center">
  <a href="https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/"><img src="https://img.shields.io/badge/Website-Live%20Portal-0284c7?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live Portal"></a>
  <a href="#"><img src="https://img.shields.io/badge/Course-IE500%20Data%20Mining-1e3a8a?style=for-the-badge&logo=google-classroom&logoColor=white" alt="Course IE500"></a>
  <a href="#"><img src="https://img.shields.io/badge/Typeset%20with-XeLaTeX%20%26%20XePersian-008080?style=for-the-badge&logo=latex&logoColor=white" alt="LaTeX XePersian"></a>
  <a href="#"><img src="https://img.shields.io/badge/Total%20Slides-419%20Slides-f59e0b?style=for-the-badge&logo=slides&logoColor=white" alt="Total Slides"></a>
  <a href="#-صفحات-برگزیده-کتاب-مرجع-curated-readings"><img src="https://img.shields.io/badge/Curated%20Readings-7%20Chapters-8b5cf6?style=for-the-badge&logo=adobeacrobatreader&logoColor=white" alt="Curated Readings"></a>
  <a href="#"><img src="https://img.shields.io/badge/Status-100%25%20Completed-059669?style=for-the-badge&logo=checkmarx&logoColor=white" alt="Status"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge" alt="License"></a>
</p>

---

## 🌐 پرتال تعاملی و مطالعه آنلاین (Interactive Course Portal)

برای دسترسی سریع دانشجویان، مطالعه درون‌برنامه‌ای اسلایدها و دانلود آسان، وب‌سایت داکیومنت دو زبانه این پروژه روی **GitHub Pages** در دسترس است:

👉 **[ورود به پرتال وب‌سایت داده‌کاوی (Live Website)](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/)**

### امکانات وب‌سایت
- 📖 کتاب فارسی با ۷ فصل درسی، ۶۵ صفحه PDF و منبع LaTeX فصل‌بندی‌شده.
- 🧪 ۲۱ آزمایشگاه تعاملی با محاسبات واقعی، مسیر پیشنهادی و بازنشانی.
- 📝 ۵۲ خودآزمایی با پاسخ‌هایی که مستقل از هم باز می‌شوند.
- 📥 دانلود مستقیم هر ۷ اسلاید اصلی، هر ۷ ترجمهٔ فارسی و ۷ خواندنی منتخب کتاب از بخش [اسلایدها و منابع](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources).
- 📐 نمایش فرمول‌ها با KaTeX، PDFخوان محلی، تنظیم اندازهٔ متن، حالت تیره، جست‌وجو و نشان‌گذاری.

**استاد درس:** دکتر شیرین شعاعی · **گردآورنده:** احسان شهبازی

[📘 جزوهٔ کامل PDF](assets/lecture.pdf) · [🛠 پروژهٔ فصل‌بندی‌شدهٔ LaTeX](assets/latex-project.zip) · [📄 منبع یک‌فایلی](assets/lecture.tex)

### ویرایش و بررسی نسخهٔ جدید

منبع جزوه در `notes/`، منبع اسلایدهای ترجمه‌شده در `translations/` و فایل‌های وب در ریشهٔ مخزن قرار دارند. فایل‌های اصلی و ترجمه‌های قبلی حفظ شده‌اند.

```sh
npm run check
npm test
python3 -m http.server 4175
```

برای بازسازی متن وب از LaTeX، `npm run build` و برای بازسازی PDF فصل‌ها، `python3 tools/build_book.py --with-pdf` را اجرا کنید. این مرحله به Python، PyMuPDF، Pandoc و XeLaTeX نیاز دارد. PDF کامل از `notes/main.tex` ساخته می‌شود. فهرست اسلایدها با `npm run build:resources` به‌روز می‌شود.

تست‌ها شامل ۳۰ حالت مرجع مستقل از NumPy، scikit-learn و SciPy، کنترل گرادیان پس‌انتشار با مشتق عددی، تمام آستانه‌های پشتیبانی و کاهش هدف k-means هستند؛ تست‌های Node به نصب کتابخانه‌های علمی Python نیاز ندارند.

---

## 📖 درباره این مجموعه

این مخزن شامل ترجمه تخصصی، بازطراحی گرافیکی و تایپ‌ست ریاضی اسلایدهای درس **داده‌کاوی (IE500 Data Mining)** برگرفته از گروه علوم داده و وب دانشگاه مانهایم آلمان و منطبق بر کتاب مرجع معتبر **Introduction to Data Mining (ویرایش دوم)** تألیف دکتر پنگ-نینگ تن، مایکل استاین‌بک، آنوج کارپاتنه و ویپین کومار می‌باشد.

### ویژگی‌های فنی نگارش:
1. **تایپ‌ست استاندارد با XePersian:** متون فارسی با رعایت دقیق اصول فاصله‌گذاری، نیم‌فاصله‌ها و تراز راست‌به‌چپ در قالب Beamer پیاده‌سازی شده‌اند.
2. **فرمول‌های ریاضی استاندارد:** تمامی معادلات و روابط آماری با برچسب‌گذاری صحیح LTR و بدون خطای تداخل جهت‌گیری متن کامپایل گردیده‌اند.
3. **نمودارها و تصاویر باکیفیت:** بازتولید و پاکسازی تصاویر نمودارها، ماتریس‌ها و ساختارهای درختی برای تضمین بالاترین ووضوح دیداری.

---

## 📚 سرفصل‌ها و دریافت اسلایدها (Course Chapters)

| فصل | عنوان مبحث | عنوان انگلیسی | اسلایدها | مطالعه آنلاین | دانلود فارسی | نسخه اصلی |
| :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **۰۱** | **مقدمه‌ای بر داده‌کاوی** | Introduction to Data Mining | ۵۹ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch01) | [PDF فارسی](./Translated_Slides/01_Introduction_FA.pdf) | [English](./Slides/IE500_DM_01_Introduction.pdf) |
| **۰۲** | **پیش‌پردازش داده‌ها** | Data Preprocessing | ۶۲ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch02) | [PDF فارسی](./Translated_Slides/02_Preprocessing_FA.pdf) | [English](./Slides/IE500_DM_02_Preprocessing.pdf) |
| **۰۳** | **طبقه‌بندی: درخت تصمیم** | Classification: Decision Trees | ۶۳ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch03) | [PDF فارسی](./Translated_Slides/03_Classification_Part1_FA.pdf) | [English](./Slides/IE500_DM_03_Classification_Part1.pdf) |
| **۰۴** | **طبقه‌بندی: بیز، SVM و شبکه‌های عصبی** | Naive Bayes, SVM, Neural Networks | ۶۴ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch04) | [PDF فارسی](./Translated_Slides/04_Classification_Part2_FA.pdf) | [English](./Slides/IE500_DM_04_Classification_Part2.pdf) |
| **۰۵** | **تحلیل رگرسیون** | Regression Analysis | ۵۶ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch05) | [PDF فارسی](./Translated_Slides/05_Regression_FA.pdf) | [English](./Slides/IE500_DM_05_Regression.pdf) |
| **۰۶** | **تحلیل خوشه‌بندی** | Cluster Analysis | ۶۶ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch06) | [PDF فارسی](./Translated_Slides/06_Clustering_FA.pdf) | [English](./Slides/IE500_DM_06_Clustering.pdf) |
| **۰۷** | **تحلیل وابستگی و قواعد انجمنی** | Association Analysis | ۴۹ | [مطالعه](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#ch07) | [PDF فارسی](./Translated_Slides/07_Association_Analysis_FA.pdf) | [English](./Slides/IE500_DM_07_Association_Analysis.pdf) |

> **جمع کل:** **۷ فصل** | **۴۱۹ اسلاید آموزشی بازبینی‌شده**

---

## 📑 صفحات برگزیده کتاب مرجع (Curated Readings)

به منظور بهینه‌سازی زمان مطالعه دانشجویان و بی‌نیازی از جستجوی دستی در کتاب مرجع ۸۶۶ صفحه‌ای، برای هر فصل اسلایدها یک فایل اختصاصی از کتاب مرجع پنگ-نینگ تن استخراج شده است. هر فایل شامل صفحه عنوان و راهنمای مطالعه، سرفصل‌های منطبق، و بوک‌مارک‌های کلیک‌پذیر (Table of Contents) درون فایل PDF می‌باشد:

| فصل | مبحث مرتبط در اسلایدها | بخش‌های منتخب کتاب پنگ-نینگ تن | صفحات | دریافت فایل گلچین | مطالعه در پرتال |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **۰۱** | **مقدمه‌ای بر داده‌کاوی** | فصل ۱ (۱.۱ تا ۱.۵) + بخش ۶.۳ (KNN) | ۲۰ | [PDF گلچین](./Textbook_Readings/01_Introduction_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |
| **۰۲** | **پیش‌پردازش داده‌ها** | فصل ۲ (انواع داده، تشابه، کاهش ابعاد) + بخش ۶.۱۱ (عدم تعادل و SMOTE) | ۹۶ | [PDF گلچین](./Textbook_Readings/02_Preprocessing_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |
| **۰۳** | **طبقه‌بندی: درخت تصمیم و ارزیابی** | فصل ۳ (۳.۱ تا ۳.۴ درخت و بیش‌برازش) + ۶.۱۰ (Random Forest) + ۶.۱۱ (ROC/معیارها) | ۷۴ | [PDF گلچین](./Textbook_Readings/03_Classification_Part1_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |
| **۰۴** | **طبقه‌بندی: بیز، SVM و شبکه‌های عصبی** | بخش‌های ۶.۴ (Naive Bayes) + ۶.۷ تا ۶.۹ (ANN/DL/SVM) + ۳.۵ و ۳.۷ (اعتبارسنجی) | ۷۶ | [PDF گلچین](./Textbook_Readings/04_Classification_Part2_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |
| **۰۵** | **تحلیل رگرسیون** | مبانی کتاب: بخش ۶.۶ (رگرسیون لوجستیک) + ۶.۱۰.۳ (Bias-Variance) + ۳.۴ + ۹.۳.۴ | ۲۹ | [PDF گلچین](./Textbook_Readings/05_Regression_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |
| **۰۶** | **تحلیل خوشه‌بندی** | فصل ۵ (K-Means، سلسله‌مراتبی، DBSCAN، ارزیابی) + بخش‌های ۲.۴ و ۹.۱ تا ۹.۵ (LOF) | ۱۱۰ | [PDF گلچین](./Textbook_Readings/06_Clustering_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |
| **۰۷** | **تحلیل وابستگی و قواعد انجمنی** | فصل ۴ (قواعد، الگوریتم Apriori، هرس، معیار Lift) + فصل ۷ (صفات پیوسته) | ۶۳ | [PDF گلچین](./Textbook_Readings/07_Association_Analysis_Textbook_Reading.pdf) | [مطالعه آنلاین](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources) |

---

## 📘 کتاب مرجع کامل درس (Full Reference Textbook)

- **عنوان کتاب:** *Introduction to Data Mining (2nd Edition)*
- **نویسندگان:** Pang-Ning Tan, Michael Steinbach, Anuj Karpatne, Vipin Kumar
- **ناشر:** Pearson Education Limited
- **دسترسی به فایل:** [دانلود کتاب مرجع از مخزن](./Books/Pang-Ning%20Tan%20-%20Introduction%20to%20Data%20Mining%20(2019%2C%20Pearson%20Education%20Limited)%20-%20libgen.li.pdf) یا [مشاهده آنلاین در پرتال](https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/#resources)

---

## 🛠 نیازمندی‌ها و راهنمای کامپایل سورس LaTeX

برای کامپایل کدهای منبع، توزیع استاندارد TeX (مانند TeX Live یا MacTeX با نسخه ۲۰۲۴ یا بالاتر) لازم است:

### نیازمندی‌ها:
- کامپایلر: `XeLaTeX`
- بسته‌های اصلی: `xepersian`، `bidi`، `beamer`، `amsmath`، `graphicx`، `tikz`
- فونت‌های مورد استفاده: قلم متن **وزیرمتن (Vazirmatn)** و قلم لاتین **TeX Gyre Termes**

### کامپایل سریع تمام فصول با اسکریپت خودکار:
```bash
chmod +x compile_all.sh
./compile_all.sh
```

### کامپایل دستی یک فصل مشخص:
```bash
cd translations/01_introduction
xelatex -interaction=nonstopmode -output-directory=output main.tex
xelatex -interaction=nonstopmode -output-directory=output main.tex
```

---

## 📌 نحوه استناد و ارجاع‌دهی (Citation)

در صورتی که از این اسلایدها و منابع در تحقیقات، تدریس یا پروژه‌های دانشگاهی خود استفاده می‌کنید، می‌توانید با فرمت BibTeX زیر به این مخزن و پرتال ارجاع دهید:

```bibtex
@misc{shahbazi2026datamining,
  author       = {Shahbazi, Ehsan},
  title        = {Data Mining (IE500): Persian Lecture Slides, Reference Materials and Interactive Documentation Portal},
  year         = {2026},
  publisher    = {GitHub},
  howpublished = {\url{https://github.com/EhsanShahbazii/Data-Mining-SBU-Course}},
  note         = {Interactive Course Portal: \url{https://ehsanshahbazii.github.io/Data-Mining-SBU-Course/}}
}
```

---

## 👤 نویسنده و مترجم (Author & Maintainer)

- **احسان شهبازی** (Ehsan Shahbazi)
- 📧 ایمیل: [ehsan.shahbazipc@gmail.com](mailto:ehsan.shahbazipc@gmail.com)
- 🐙 گیت‌هاب: [@EhsanShahbazii](https://github.com/EhsanShahbazii)
- 🏛 دانشکده مهندسی و علوم کامپیوتر، دانشگاه شهید بهشتی (SBU)

---

<p align="center">
  با آرزوی موفقیت برای تمامی دانشجویان و پژوهشگران حوزه هوش مصنوعی و داده‌کاوی 🎓
</p>
