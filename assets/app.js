// Bilingual Data & State Management
const chaptersData = [
  {
    id: "ch01",
    num: "01",
    slidesCount: 59,
    fa: {
      title: "مقدمه‌ای بر داده‌کاوی",
      enTitle: "Introduction to Data Mining",
      desc: "مفاهیم بنیادین، تعریف داده‌کاوی در متدولوژی KDD، انواع وظایف پیش‌بینانه و توصیفی، محرک‌ها و چالش‌های دنیای داده.",
      topics: ["تعریف KDD", "وظایف پیش‌بینانه", "وظایف توصیفی", "کلان‌داده"]
    },
    en: {
      title: "Introduction to Data Mining",
      enTitle: "Introduction to Data Mining",
      desc: "Foundational concepts, KDD methodology, predictive and descriptive tasks, challenges, and motivations in big data.",
      topics: ["KDD Definition", "Predictive Tasks", "Descriptive Tasks", "Big Data"]
    },
    faPdf: "Translated_Slides/01_Introduction_FA.pdf",
    enPdf: "Slides/IE500_DM_01_Introduction.pdf",
    readingPdf: "Textbook_Readings/01_Introduction_Textbook_Reading.pdf",
    readingPages: 20,
    faReadingDesc: "فصل ۱ (ص ۲۲-۳۵) + بخش ۶.۳ (ص ۴۱۱-۴۱۵) • تعریف KDD، وظایف پیش‌بینانه/توصیفی و الگوریتم طبقه‌بندی KNN",
    enReadingDesc: "Chapter 1 (pp. 22-35) + Sec 6.3 (pp. 411-415) • KDD definition, predictive/descriptive tasks, and KNN classifier"
  },
  {
    id: "ch02",
    num: "02",
    slidesCount: 62,
    fa: {
      title: "پیش‌پردازش داده‌ها",
      enTitle: "Data Preprocessing",
      desc: "بررسی انواع ویژگی‌ها، سنجش کیفیت داده، داده‌های پرت و مفقود، تکنیک‌های نمونه‌برداری، کاهش بعد (PCA) و انتخاب ویژگی.",
      topics: ["انواع صفت‌ها", "کیفیت داده", "کاهش ابعاد", "نمونه‌برداری", "PCA"]
    },
    en: {
      title: "Data Preprocessing",
      enTitle: "Data Preprocessing",
      desc: "Attribute types, data quality assessment, missing values and outliers, sampling, dimensionality reduction (PCA), and feature selection.",
      topics: ["Attribute Types", "Data Quality", "Dimensionality Reduction", "Sampling", "PCA"]
    },
    faPdf: "Translated_Slides/02_Preprocessing_FA.pdf",
    enPdf: "Slides/IE500_DM_02_Preprocessing.pdf",
    readingPdf: "Textbook_Readings/02_Preprocessing_Textbook_Reading.pdf",
    readingPages: 96,
    faReadingDesc: "فصل ۲ (ص ۴۴-۱۲۰) + بخش ۶.۱۱ (ص ۵۱۶-۵۳۳) • انواع صفت‌ها، کیفیت داده، کاهش ابعاد PCA، شباهت و تکنیک SMOTE",
    enReadingDesc: "Chapter 2 (pp. 44-120) + Sec 6.11 (pp. 516-533) • Data types, data quality, PCA, similarity metrics, and class imbalance (SMOTE)"
  },
  {
    id: "ch03",
    num: "03",
    slidesCount: 63,
    fa: {
      title: "طبقه‌بندی (بخش اول: درخت‌های تصمیم)",
      enTitle: "Classification: Decision Trees",
      desc: "اصول یادگیری نظارت‌شده، الگوریتم هانت، معیارهای خلوص و ناخالصی گینی (Gini) و آنتروپی، هرس درخت، ماتریس درهم‌ریختگی و ارزیابی مدل.",
      topics: ["درخت تصمیم", "شاخص جینی", "آنتروپی", "هرس درخت", "ارزیابی مدل"]
    },
    en: {
      title: "Classification: Decision Trees",
      enTitle: "Classification: Decision Trees",
      desc: "Supervised learning foundations, Hunt's algorithm, splitting criteria (Gini & Entropy), tree pruning, overfitting, and confusion matrix.",
      topics: ["Decision Trees", "Gini Index", "Entropy", "Tree Pruning", "Model Evaluation"]
    },
    faPdf: "Translated_Slides/03_Classification_Part1_FA.pdf",
    enPdf: "Slides/IE500_DM_03_Classification_Part1.pdf",
    readingPdf: "Textbook_Readings/03_Classification_Part1_Textbook_Reading.pdf",
    readingPages: 74,
    faReadingDesc: "بخش‌های ۳.۱-۳.۴ + ۶.۱۰ + ۶.۱۱.۲-۶.۱۱.۴ • الگوریتم هانت، ناخالصی گینی/آنتروپی، بیش‌برازش، Random Forest و منحنی ROC",
    enReadingDesc: "Sections 3.1-3.4 + 6.10 + 6.11.2-6.11.4 • Hunt's algorithm, Gini/Entropy, overfitting, Random Forests, and ROC curves"
  },
  {
    id: "ch04",
    num: "04",
    slidesCount: 64,
    fa: {
      title: "طبقه‌بندی (بخش دوم: بیز، SVM و شبکه‌های عصبی)",
      enTitle: "Classification: Naive Bayes, SVM, Neural Networks",
      desc: "طبقه‌بندهای مبتنی بر قاعده، بیز ساده و استقلال شرطی، ماشین‌های بردار پشتیبان (SVM)، پرسپترون، یادگیری عمیق و مدل‌های زایشی ترنسفورمر.",
      topics: ["بیز ساده", "ماشین بردار پشتیبان (SVM)", "پرسپترون", "ترنسفورمرها", "LLM"]
    },
    en: {
      title: "Classification: Naive Bayes, SVM, Neural Networks",
      enTitle: "Classification: Naive Bayes, SVM, Neural Networks",
      desc: "Rule-based classifiers, Naive Bayes and conditional independence, Support Vector Machines (SVM), Perceptrons, Deep Learning, and Transformers.",
      topics: ["Naive Bayes", "SVM", "Perceptron", "Transformers", "LLMs"]
    },
    faPdf: "Translated_Slides/04_Classification_Part2_FA.pdf",
    enPdf: "Slides/IE500_DM_04_Classification_Part2.pdf",
    readingPdf: "Textbook_Readings/04_Classification_Part2_Textbook_Reading.pdf",
    readingPages: 76,
    faReadingDesc: "بخش‌های ۶.۴ + ۶.۷-۶.۹ + ۳.۵ + ۳.۷ • بیز ساده، شبکه‌های عصبی ANN، یادگیری عمیق، SVM غیرخطی و اعتبارسنجی Nested CV",
    enReadingDesc: "Sections 6.4 + 6.7-6.9 + 3.5 + 3.7 • Naive Bayes, ANNs, Deep Learning, non-linear SVMs, and Nested Cross-Validation"
  },
  {
    id: "ch05",
    num: "05",
    slidesCount: 56,
    fa: {
      title: "تحلیل رگرسیون",
      enTitle: "Regression Analysis",
      desc: "رگرسیون خطی ساده و چندگانه، بهینه‌سازی کمترین مربعات معمولی (OLS)، گرادیان کاهشی، رگرسیون غیرخطی، منظم‌سازی Ridge و Lasso و معیارهای ارزیابی.",
      topics: ["رگرسیون خطی", "گرادیان کاهشی", "منظم‌سازی Ridge/Lasso", "معیارهای ارزیابی"]
    },
    en: {
      title: "Regression Analysis",
      enTitle: "Regression Analysis",
      desc: "Simple and multiple linear regression, Ordinary Least Squares (OLS), Gradient Descent, polynomial regression, Ridge/Lasso regularization, and metrics.",
      topics: ["Linear Regression", "Gradient Descent", "Ridge/Lasso", "Evaluation Metrics"]
    },
    faPdf: "Translated_Slides/05_Regression_FA.pdf",
    enPdf: "Slides/IE500_DM_05_Regression.pdf",
    readingPdf: "Textbook_Readings/05_Regression_Textbook_Reading.pdf",
    readingPages: 29,
    faReadingDesc: "بخش‌های ۶.۶ + ۶.۱۰.۳ + ۳.۴ + ۶.۳ + ۹.۳.۴ • مبانی مدل‌های تعمیم‌یافته خطی (GLM)، تجزیه موازنه Bias/Variance و منظم‌سازی",
    enReadingDesc: "Sections 6.6 + 6.10.3 + 3.4 + 6.3 + 9.3.4 • Generalized Linear Models (GLM), Bias-Variance decomposition, and regularization"
  },
  {
    id: "ch06",
    num: "06",
    slidesCount: 66,
    fa: {
      title: "تحلیل خوشه‌بندی",
      enTitle: "Cluster Analysis",
      desc: "یادگیری بدون نظارت، الگوریتم K-means، خوشه‌بندی سلسله‌مراتبی تراکمی (HAC)، الگوریتم چگالی‌محور DBSCAN و معیارهای اعتبارسنجی خوشه‌ها.",
      topics: ["الگوریتم K-means", "خوشه‌بندی سلسله‌مراتبی", "DBSCAN", "ضریب سیلوئت"]
    },
    en: {
      title: "Cluster Analysis",
      enTitle: "Cluster Analysis",
      desc: "Unsupervised learning, K-means, Agglomerative Hierarchical Clustering, density-based DBSCAN, and cluster validity measures (Silhouette).",
      topics: ["K-means", "Hierarchical Clustering", "DBSCAN", "Silhouette Score"]
    },
    faPdf: "Translated_Slides/06_Clustering_FA.pdf",
    enPdf: "Slides/IE500_DM_06_Clustering.pdf",
    readingPdf: "Textbook_Readings/06_Clustering_Textbook_Reading.pdf",
    readingPages: 110,
    faReadingDesc: "فصل ۵ (ص ۳۰۸-۳۷۹) + بخش ۲.۴ + فصل ۹ (ص ۷۲۴-۷۴۸) • الگوریتم‌های K-Means، سلسله‌مراتبی، DBSCAN، ارزیابی Silhouette و تشخیص داده‌های پرت (LOF)",
    enReadingDesc: "Chapter 5 (pp. 308-379) + Sec 2.4 + Chapter 9 (pp. 724-748) • K-Means, hierarchical clustering, DBSCAN, Silhouette evaluation, and Anomaly Detection (LOF)"
  },
  {
    id: "ch07",
    num: "07",
    slidesCount: 49,
    fa: {
      title: "تحلیل وابستگی و استخراج قواعد انجمنی",
      enTitle: "Association Analysis",
      desc: "تحلیل سبد خرید، محاسبه پشتیبان و اطمینان، الگوریتم آپریوری (Apriori)، درخت FP-Growth، استخراج قواعد کارآمد و معیارهای جذابیت مانند Lift.",
      topics: ["قواعد انجمنی", "الگوریتم آپریوری", "درخت FP-Growth", "معیار Lift"]
    },
    en: {
      title: "Association Analysis",
      enTitle: "Association Analysis",
      desc: "Market basket analysis, support and confidence, Apriori algorithm and pruning, FP-growth tree, and interestingness measures such as Lift.",
      topics: ["Association Rules", "Apriori Algorithm", "FP-Tree", "Lift Metric"]
    },
    faPdf: "Translated_Slides/07_Association_Analysis_FA.pdf",
    enPdf: "Slides/IE500_DM_07_Association_Analysis.pdf",
    readingPdf: "Textbook_Readings/07_Association_Analysis_Textbook_Reading.pdf",
    readingPages: 63,
    faReadingDesc: "فصل ۴ (ص ۲۱۴-۲۴۵، ۲۵۸-۲۷۴) + فصل ۷ (ص ۵۶۰-۵۷۲) • الگوریتم آپریوری، هرس کاندیدها، تولید قواعد، معیار Lift و صفات پیوسته",
    enReadingDesc: "Chapter 4 (pp. 214-245, 258-274) + Chapter 7 (pp. 560-572) • Apriori principle, candidate pruning, rule generation, Lift metric, and continuous attributes"
  }
];

const uiStrings = {
  fa: {
    siteTitle: "داده‌کاوی",
    siteBadge: "",
    searchPlaceholder: "جستجوی فصل یا موضوع...",
    navHeader: "فهرست فصول",
    drawerTitle: "فهرست و دسترسی",
    navBook: "کتاب مرجع",
    navReadings: "صفحات برگزیده کتاب",
    heroTag: "مرجع آموزشی دانشگاه مانهایم آلمان",
    heroTitle: "اسلایدهای جامع درس داده‌کاوی (IE500)",
    heroSubtitle: "اسلایدهای کامل درس داده‌کاوی همراه با ترجمه تخصصی، تایپ‌ست استاندارد لاتک و پکیج زی‌پرشین، دسترسی همزمان به نسخه اصلی و ترجمه فارسی.",
    slidesTitle: "فصل‌های آموزشی",
    slidesSubtitle: "۷ فصل کامل - کلیک روی هر کارت برای پیش‌نمایش آنلاین اسلایدها",
    slidesWord: "اسلاید",
    clickToPreview: "پیش‌نمایش",
    downloadFa: "دانلود ترجمه",
    downloadEn: "دانلود اصلی",
    readingsTitle: "صفحات برگزیده کتاب مرجع (مطابق سرفصل‌های اسلاید)",
    readingsSubtitle: "بخش‌های استخراج‌شده از کتاب مرجع پنگ-نینگ تن و همکاران، همراه با فهرست کلیک‌پذیر و بدون مباحث نامربوط جهت مطالعه هدفمند دانشجویان.",
    readOnline: "مشاهده آنلاین",
    downloadPdf: "دانلود PDF",
    pagesWord: "صفحه",
    bookTitle: "کتاب مرجع: مقدمه‌ای بر داده‌کاوی (ویرایش دوم)",
    bookAuthors: "نویسندگان: پنگ-نینگ تن، مایکل استاین‌بک، آنوج کارپاتنه، ویپین کومار",
    bookDesc: "کتاب اصلی دانشگاهی مورد تدریس در دانشگاه‌های برتر جهان برای مباحث داده‌کاوی، یادگیری ماشین و تحلیل داده.",
    readBook: "مشاهده آنلاین کتاب",
    downloadBook: "دانلود کتاب مرجع",
    footerText: "طراحی و توسعه برای جامعه علمی و دانشجویان مهندسی کامپیوتر و هوش مصنوعی",
    footerAuthor: "مترجم و گردآورنده: احسان شهبازی",
    closeModal: "بستن",
    fullscreen: "تمام‌صفحه",
    downloadModal: "دانلود فایل"
  },
  en: {
    siteTitle: "Data Mining",
    siteBadge: "",
    searchPlaceholder: "Search chapter or topic...",
    navHeader: "Course Chapters",
    drawerTitle: "Navigation Menu",
    navBook: "Reference Book",
    navReadings: "Curated Readings",
    heroTag: "University of Mannheim Lecture Materials",
    heroTitle: "Data Mining Course Slides & Persian Translations",
    heroSubtitle: "Complete lecture slides from the University of Mannheim Data Mining course, paired with professional Persian translations formatted with XeLaTeX.",
    slidesTitle: "Lecture Chapters",
    slidesSubtitle: "All 7 course decks - Click on any card to preview slides",
    slidesWord: "Slides",
    clickToPreview: "Preview",
    downloadFa: "Download Translation",
    downloadEn: "Download Original",
    readingsTitle: "Curated Textbook Readings (Matching Lecture Decks)",
    readingsSubtitle: "Core sections extracted directly from Tan et al. reference textbook, complete with bookmarks and structured for focused student study.",
    readOnline: "Read Online",
    downloadPdf: "Download PDF",
    pagesWord: "pages",
    bookTitle: "Textbook: Introduction to Data Mining (2nd Ed)",
    bookAuthors: "Authors: Pang-Ning Tan, Michael Steinbach, Anuj Karpatne, Vipin Kumar",
    bookDesc: "The premier reference textbook covering core algorithmic and conceptual foundations of data mining and machine learning.",
    readBook: "Read Book Online",
    downloadBook: "Download Textbook",
    footerText: "Open educational resource for data science and AI students worldwide",
    footerAuthor: "Translated & Curated by: Ehsan Shahbazi",
    closeModal: "Close",
    fullscreen: "Fullscreen",
    downloadModal: "Download PDF"
  }
};

let currentLang = localStorage.getItem('dm_lang') || 'fa';
let currentTheme = localStorage.getItem('dm_theme') || 'light';

function initApp() {
  // Set theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Set language & render
  setLanguage(currentLang);

  // Setup Event Listeners
  document.getElementById('lang-toggle-btn').addEventListener('click', toggleLanguage);
  
  const drawerLangBtn = document.getElementById('drawer-lang-toggle-btn');
  if (drawerLangBtn) {
    drawerLangBtn.addEventListener('click', toggleLanguage);
  }

  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeMobileMenu);
  }

  const sidebarBackdrop = document.getElementById('sidebar-backdrop');
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeMobileMenu);
  }

  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  document.getElementById('search-input').addEventListener('input', handleSearch);

  const drawerSearchInput = document.getElementById('drawer-search-input');
  if (drawerSearchInput) {
    drawerSearchInput.addEventListener('input', (e) => {
      document.getElementById('search-input').value = e.target.value;
      handleSearch(e);
    });
  }

  document.getElementById('menu-toggle-btn').addEventListener('click', toggleMobileMenu);

  // Modal handlers
  const modal = document.getElementById('pdf-modal');
  document.getElementById('close-modal-btn').addEventListener('click', () => modal.close());
  document.getElementById('fullscreen-modal-btn').addEventListener('click', toggleModalFullscreen);
  
  // Light dismiss for dialog modal
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modal.close();
    }
  });

  // Modal on close cleanup
  modal.addEventListener('close', () => {
    document.getElementById('pdf-iframe').src = '';
  });
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('dm_theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const iconSpan = document.getElementById('theme-icon');
  iconSpan.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

function toggleLanguage() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('dm_lang', lang);
  
  const isEn = lang === 'en';
  document.documentElement.lang = isEn ? 'en' : 'fa';
  document.documentElement.dir = isEn ? 'ltr' : 'rtl';
  document.body.classList.toggle('lang-en', isEn);
  
  document.getElementById('lang-label').textContent = isEn ? 'فارسی' : 'English';
  const drawerLang = document.getElementById('drawer-lang-label');
  if (drawerLang) {
    drawerLang.textContent = isEn ? 'فارسی' : 'English';
  }
  
  applyStaticTranslations(lang);
  renderNavigation(lang);
  renderChapterCards(lang);
  renderReadings(lang);
  updateThemeIcon();
}

function applyStaticTranslations(lang) {
  const t = uiStrings[lang];
  const brandTitle = document.getElementById('brand-title');
  if (brandTitle) brandTitle.textContent = t.siteTitle;

  const brandBadge = document.getElementById('brand-badge');
  if (brandBadge) brandBadge.textContent = t.siteBadge;

  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;

  const drawerSearch = document.getElementById('drawer-search-input');
  if (drawerSearch) drawerSearch.placeholder = t.searchPlaceholder;

  const drawerTitle = document.getElementById('drawer-title');
  if (drawerTitle) drawerTitle.textContent = t.drawerTitle;

  document.getElementById('sidebar-heading').textContent = t.navHeader;
  document.getElementById('nav-book-text').textContent = t.navBook;
  const navReadings = document.getElementById('nav-readings-text');
  if (navReadings) navReadings.textContent = t.navReadings;
  
  document.getElementById('hero-tag').textContent = t.heroTag;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-subtitle').textContent = t.heroSubtitle;

  document.getElementById('section-title-text').textContent = t.slidesTitle;
  document.getElementById('section-desc-text').textContent = t.slidesSubtitle;

  const readingsTitle = document.getElementById('readings-title');
  if (readingsTitle) readingsTitle.textContent = t.readingsTitle;
  const readingsSub = document.getElementById('readings-subtitle');
  if (readingsSub) readingsSub.textContent = t.readingsSubtitle;

  document.getElementById('book-title').textContent = t.bookTitle;
  document.getElementById('book-authors').textContent = t.bookAuthors;
  document.getElementById('book-desc').textContent = t.bookDesc;
  document.getElementById('btn-read-book').innerHTML = `<span>📖</span> ${t.readBook}`;
  document.getElementById('btn-download-book').innerHTML = `<span>⬇️</span> ${t.downloadBook}`;

  document.getElementById('footer-text').textContent = t.footerText;
  document.getElementById('footer-author').textContent = t.footerAuthor;
  document.getElementById('close-modal-btn').title = t.closeModal;
  document.getElementById('fullscreen-modal-btn').title = t.fullscreen;
}

function renderNavigation(lang) {
  const navList = document.getElementById('chapters-nav-list');
  navList.innerHTML = '';
  const t = uiStrings[lang];

  chaptersData.forEach(ch => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${ch.id}`;
    a.className = 'nav-link';
    a.innerHTML = `
      <span>${ch.num}. ${ch[lang].title}</span>
      <span class="nav-badge">${ch.slidesCount} ${t.slidesWord}</span>
    `;
    a.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      a.classList.add('active');
      closeMobileMenu();
    });
    li.appendChild(a);
    navList.appendChild(li);
  });

  const refBookLink = document.querySelector('a[href="#reference-book"]');
  if (refBookLink) {
    refBookLink.addEventListener('click', closeMobileMenu);
  }

  const readingsLink = document.querySelector('a[href="#readings-section"]');
  if (readingsLink) {
    readingsLink.addEventListener('click', closeMobileMenu);
  }
}

function renderReadings(lang) {
  const container = document.getElementById('readings-grid');
  if (!container) return;
  container.innerHTML = '';
  const t = uiStrings[lang];

  chaptersData.forEach(ch => {
    const item = document.createElement('div');
    item.className = 'reading-item';
    const title = lang === 'fa' ? `فصل ${ch.num}: ${ch.fa.title}` : `Chapter ${ch.num}: ${ch.en.title}`;
    const desc = lang === 'fa' ? ch.faReadingDesc : ch.enReadingDesc;
    const modalTitle = `${title} (${lang === 'fa' ? 'کتاب مرجع' : 'Textbook Reading'})`;

    item.innerHTML = `
      <div class="reading-item-header">
        <span class="reading-item-title">${title}</span>
        <span class="reading-item-pages">📖 ${ch.readingPages} ${t.pagesWord}</span>
      </div>
      <p class="reading-item-desc">${desc}</p>
      <div class="reading-item-actions">
        <button class="btn btn-primary btn-sm" onclick="openPdfModal('${ch.readingPdf}', '${modalTitle}')">
          <span>👁️</span> ${t.readOnline}
        </button>
        <a class="btn btn-secondary btn-sm" href="${ch.readingPdf}" download>
          <span>⬇️</span> ${t.downloadPdf}
        </a>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderChapterCards(lang, filterQuery = "") {
  const container = document.getElementById('chapters-grid');
  container.innerHTML = '';
  const t = uiStrings[lang];
  const query = filterQuery.toLowerCase().trim();

  chaptersData.forEach(ch => {
    const data = ch[lang];
    const match = query === "" || 
      data.title.toLowerCase().includes(query) || 
      data.desc.toLowerCase().includes(query) ||
      data.topics.some(tp => tp.toLowerCase().includes(query));

    if (!match) return;

    const card = document.createElement('article');
    card.className = 'chapter-card';
    card.id = ch.id;
    card.title = lang === 'fa' ? 'برای پیش‌نمایش کلیک کنید' : 'Click to preview';

    // Click on card previews the Persian translation
    card.addEventListener('click', () => {
      openPdfModal(ch.faPdf, `${data.title} (${lang === 'fa' ? 'ترجمه فارسی' : 'Persian Translation'})`);
    });

    const topicsHtml = data.topics.map(tp => `<span class="topic-pill">${tp}</span>`).join('');

    card.innerHTML = `
      <div class="card-top">
        <div class="card-top-badges">
          <span class="ch-number">${lang === 'fa' ? `فصل ${ch.num}` : `Chapter ${ch.num}`}</span>
          <span class="preview-badge">👁️ ${t.clickToPreview}</span>
        </div>
        <span class="slide-count">📑 ${ch.slidesCount} ${t.slidesWord}</span>
      </div>
      <h3 class="card-title">${data.title}</h3>
      <div class="card-en-title">${data.enTitle}</div>
      <p class="card-desc">${data.desc}</p>
      <div class="topics-wrap">${topicsHtml}</div>
      
      <div class="card-actions">
        <a class="btn btn-primary" href="${ch.faPdf}" download onclick="event.stopPropagation()" title="${t.downloadFa}">
          <span>⬇️</span> ${t.downloadFa}
        </a>
        <a class="btn btn-secondary" href="${ch.enPdf}" download onclick="event.stopPropagation()" title="${t.downloadEn}">
          <span>⬇️</span> ${t.downloadEn}
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function handleSearch(e) {
  renderChapterCards(currentLang, e.target.value);
}

function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar) return;
  const isOpen = sidebar.classList.toggle('mobile-open');
  if (backdrop) backdrop.classList.toggle('active', isOpen);
}

function closeMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('active');
}

function openPdfModal(pdfUrl, title) {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-iframe');
  const modalTitle = document.getElementById('modal-pdf-title');
  const downloadLink = document.getElementById('modal-download-link');

  modalTitle.textContent = title;
  downloadLink.href = pdfUrl;
  downloadLink.textContent = uiStrings[currentLang].downloadModal;

  // Add zoom and page-fit parameters for clean embedded PDF view
  iframe.src = `${pdfUrl}#toolbar=1&navpanes=0&view=FitH`;
  modal.showModal();
}

function toggleModalFullscreen() {
  const modal = document.getElementById('pdf-modal');
  if (!document.fullscreenElement) {
    modal.requestFullscreen().catch(err => console.error(err));
  } else {
    document.exitFullscreen().catch(err => console.error(err));
  }
}

// Global expose for inline onclicks
window.openPdfModal = openPdfModal;

document.addEventListener('DOMContentLoaded', initApp);
