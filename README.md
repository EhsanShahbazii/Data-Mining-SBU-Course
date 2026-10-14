# درس داده‌کاوی (IE500 Data Mining) - اسلایدهای آموزشی به زبان فارسی

این مخزن شامل اسلایدهای کامل و ترجمه‌شده‌ی درس داده‌کاوی (IE500 Data Mining) برگرفته از دانشگاه مانهایم آلمان و کتاب مرجع معتبر **Introduction to Data Mining** تألیف دکتر پنگ-نینگ تن، مایکل استاین‌بک، آنوج کارپاتنه و ویپین کومار می‌باشد.

تمامی اسلایدها با استفاده از **XeLaTeX**، پکیج قدرتمند **XePersian** و قالب **Beamer** با وسواس بالا در تراز متون راست‌به‌چپ، نگارش دقیق فرمول‌های ریاضی و استفاده از نمودارها و تصاویر با کیفیت طراحی شده‌اند.

---

## 📚 سرفصل‌ها و اسلایدهای ترجمه‌شده (Translated Slides)

فایل‌های PDF نهایی و بازبینی‌شده در پوشه [`Translated_Slides/`](./Translated_Slides) در دسترس هستند:

| ردیف | نام فایل | عنوان فصل | تعداد اسلایدها | وضعیت |
| :---: | :--- | :--- | :---: | :---: |
| ۱ | [`01_Introduction_FA.pdf`](./Translated_Slides/01_Introduction_FA.pdf) | مقدمه‌ای بر داده‌کاوی (Introduction) | ۵۹ | ✅ تکمیل |
| ۲ | [`02_Preprocessing_FA.pdf`](./Translated_Slides/02_Preprocessing_FA.pdf) | پیش‌پردازش داده‌ها (Data Preprocessing) | ۶۲ | ✅ تکمیل |
| ۳ | [`03_Classification_Part1_FA.pdf`](./Translated_Slides/03_Classification_Part1_FA.pdf) | طبقه‌بندی - بخش ۱ (Classification: Decision Trees) | ۶۳ | ✅ تکمیل |
| ۴ | [`04_Classification_Part2_FA.pdf`](./Translated_Slides/04_Classification_Part2_FA.pdf) | طبقه‌بندی - بخش ۲ (Naive Bayes, SVM, Neural Networks) | ۶۴ | ✅ تکمیل |
| ۵ | [`05_Regression_FA.pdf`](./Translated_Slides/05_Regression_FA.pdf) | تحلیل رگرسیون (Regression Analysis) | ۵۶ | ✅ تکمیل |
| ۶ | [`06_Clustering_FA.pdf`](./Translated_Slides/06_Clustering_FA.pdf) | تحلیل خوشه‌بندی (Cluster Analysis) | ۶۶ | ✅ تکمیل |
| ۷ | [`07_Association_Analysis_FA.pdf`](./Translated_Slides/07_Association_Analysis_FA.pdf) | تحلیل وابستگی و قواعد انجمنی (Association Analysis) | ۴۹ | ✅ تکمیل |

---

## 🛠 ابزارها و نیازمندی‌های کامپایل

- کامپایلر: `XeLaTeX` (بخشی از توزیع استاندارد TeX Live / MacTeX)
- پکیج زبان فارسی: `XePersian` و `bidi`
- فونت‌های اصلی: وزیرمتن (`Vazirmatn`) و فونت‌های استاندارد سریف

برای کامپایل سریع تمام فصول:
```bash
chmod +x compile_all.sh
./compile_all.sh
```

یا برای کامپایل هر فصل به صورت مجزا:
```bash
cd translations/<chapter_directory>
xelatex -output-directory=output main.tex
xelatex -output-directory=output main.tex
```

---

## 👤 نویسنده و مترجم

- **احسان شهبازی** (Ehsan Shahbazi)
- ایمیل: `ehsan.shahbazipc@gmail.com`
- گیت‌هاب: [EhsanShahbazii](https://github.com/EhsanShahbazii)
