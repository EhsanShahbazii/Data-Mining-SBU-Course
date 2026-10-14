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
    enPdf: "Slides/IE500_DM_01_Introduction.pdf"
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
    enPdf: "Slides/IE500_DM_02_Preprocessing.pdf"
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
    enPdf: "Slides/IE500_DM_03_Classification_Part1.pdf"
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
    enPdf: "Slides/IE500_DM_04_Classification_Part2.pdf"
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
    enPdf: "Slides/IE500_DM_05_Regression.pdf"
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
    enPdf: "Slides/IE500_DM_06_Clustering.pdf"
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
    enPdf: "Slides/IE500_DM_07_Association_Analysis.pdf"
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
    heroTag: "مرجع آموزشی دانشگاه مانهایم آلمان",
    heroTitle: "اسلایدهای جامع درس داده‌کاوی (IE500)",
    heroSubtitle: "اسلایدهای کامل درس داده‌کاوی همراه با ترجمه تخصصی، تایپ‌ست استاندارد لاتک و پکیج زی‌پرشین، دسترسی همزمان به نسخه اصلی و ترجمه فارسی.",
    slidesTitle: "فصل‌های آموزشی",
    slidesSubtitle: "۷ فصل کامل همراه با امکان مطالعه آنلاین و دانلود مستقیم فایل‌های PDF",
    slidesWord: "اسلاید",
    readOnlineFa: "مشاهده ترجمه فارسی",
    downloadFa: "دانلود نسخه فارسی",
    readOnlineEn: "مشاهده اسلاید اصلی",
    downloadEn: "دانلود اسلاید اصلی",
    bookTitle: "کتاب مرجع: مقدمه‌ای بر داده‌کاوی (ویرایش دوم)",
    bookAuthors: "نویسندگان: پنگ-نینگ تن، مایکل استاین‌بک، آنوج کارپاتنه، ویپین کومار",
    bookDesc: "کتاب اصلی دانشگاهی مورد تدریس در دانشگاه‌های برتر جهان برای مباحث داده‌کاوی، یادگیری ماشین و تحلیل داده.",
    readBook: "مشاهده آنلاین کتاب",
    downloadBook: "دانلود نسخه PDF کتاب",
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
    heroTag: "University of Mannheim Lecture Materials",
    heroTitle: "Data Mining Course Slides & Persian Translations",
    heroSubtitle: "Complete lecture slides from the University of Mannheim Data Mining course, paired with professional Persian translations formatted with XeLaTeX.",
    slidesTitle: "Lecture Chapters",
    slidesSubtitle: "All 7 course decks available for online reading and direct PDF download in both languages.",
    slidesWord: "Slides",
    readOnlineFa: "Read Persian Slides",
    downloadFa: "Download Persian PDF",
    readOnlineEn: "Read Original English",
    downloadEn: "Download English PDF",
    bookTitle: "Textbook: Introduction to Data Mining (2nd Ed)",
    bookAuthors: "Authors: Pang-Ning Tan, Michael Steinbach, Anuj Karpatne, Vipin Kumar",
    bookDesc: "The premier reference textbook covering core algorithmic and conceptual foundations of data mining and machine learning.",
    readBook: "Read Book Online",
    downloadBook: "Download Book PDF",
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
  
  document.getElementById('hero-tag').textContent = t.heroTag;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-subtitle').textContent = t.heroSubtitle;

  document.getElementById('section-title-text').textContent = t.slidesTitle;
  document.getElementById('section-desc-text').textContent = t.slidesSubtitle;

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

    const topicsHtml = data.topics.map(tp => `<span class="topic-pill">${tp}</span>`).join('');

    card.innerHTML = `
      <div class="card-top">
        <span class="ch-number">${lang === 'fa' ? `فصل ${ch.num}` : `Chapter ${ch.num}`}</span>
        <span class="slide-count">📑 ${ch.slidesCount} ${t.slidesWord}</span>
      </div>
      <h3 class="card-title">${data.title}</h3>
      <div class="card-en-title">${data.enTitle}</div>
      <p class="card-desc">${data.desc}</p>
      <div class="topics-wrap">${topicsHtml}</div>
      
      <div class="card-actions">
        <div class="action-row">
          <span class="action-group-title">${lang === 'fa' ? 'نسخه فارسی' : 'Persian (FA)'}</span>
          <div class="action-row-buttons">
            <button class="btn btn-primary" onclick="openPdfModal('${ch.faPdf}', '${data.title} (${lang === 'fa' ? 'فارسی' : 'Persian'})')">
              <span>👁️</span> ${t.readOnlineFa}
            </button>
            <a class="btn btn-secondary btn-sm" href="${ch.faPdf}" download>
              <span>⬇️</span> ${t.downloadFa}
            </a>
          </div>
        </div>
        <div class="action-row">
          <span class="action-group-title">${lang === 'fa' ? 'نسخه اصلی (English)' : 'Original (EN)'}</span>
          <div class="action-row-buttons">
            <button class="btn btn-secondary" onclick="openPdfModal('${ch.enPdf}', '${data.enTitle} (English)')">
              <span>👁️</span> ${t.readOnlineEn}
            </button>
            <a class="btn btn-secondary btn-sm" href="${ch.enPdf}" download>
              <span>⬇️</span> ${t.downloadEn}
            </a>
          </div>
        </div>
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
