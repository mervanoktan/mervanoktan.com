/*
  Çift dil desteği: tüm arayüz metinleri bu dosyada.
  Bir metni değiştirmek istediğinde hem tr hem en altındaki
  karşılığını güncellemen yeterli.
*/
export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const tr = {
  nav: {
    projects: "Projeler",
    experience: "Deneyim",
    blog: "Blog",
    contact: "İletişim",
  },
  hero: {
    status: "Staj ve iş fırsatlarına açığım.",
    location: "Elazığ, Türkiye · Uzaktan çalışmaya açık",
    title: "Yazılım Mühendisi",
    headline: "Ölçeklenebilir web sistemleri kuran yazılım mühendisi.",
    summary:
      "Full-stack geliştirme, dağıtık sistemler ve frontend performansı üzerine çalışıyorum. Karmaşık problemleri basit, bakımı kolay çözümlere dönüştürmeyi önemsiyorum.",
    contactButton: "İletişime geç",
  },
  projects: {
    eyebrow: "Portfolyo",
    title: "Seçilmiş Projeler",
    subtitle:
      "Her proje bir case study: problem, mimari kararlar ve ölçülebilir sonuçlar.",
    caseStudy: "Case study",
    code: "Kod",
    demo: "Demo",
    back: "Projeler",
    sourceCode: "Kaynak kod",
    liveDemo: "Canlı demo",
  },
  clientWork: {
    eyebrow: "Müşteri İşleri",
    title: "Gerçek İşletmeler İçin Yapılanlar",
    subtitle:
      "Yayında olan, gerçek kullanıcıları olan işler. Kod depoları müşteriye ait olduğu için özeldir.",
    visit: "Siteyi ziyaret et",
  },
  github: {
    eyebrow: "Açık Kaynak",
    title: "GitHub Projeleri",
    subtitle: "GitHub hesabımdan otomatik çekilir; saatte bir güncellenir.",
    featured: "Öne çıkan",
    noDescription: "Açıklama eklenmemiş.",
    allRepos: "Tüm repolar →",
  },
  experience: {
    eyebrow: "Yetkinlikler",
    title: "Uzmanlık & Deneyim",
    expertiseHeading: "Uzmanlık Alanları",
    workHeading: "Eğitim",
    expertise: [
      {
        area: "Frontend Mimarisi",
        detail:
          "React/Next.js ile büyük ölçekli uygulamalar; render stratejileri (SSR/ISR/RSC), bundle optimizasyonu ve tasarım sistemleri.",
      },
      {
        area: "Backend & API Tasarımı",
        detail:
          "Node.js/TypeScript ile REST ve tRPC servisleri; veri modelleme, kimlik doğrulama ve önbellekleme stratejileri.",
      },
      {
        area: "Sistem Tasarımı",
        detail:
          "Kuyruk tabanlı asenkron işleme, yatay ölçekleme ve gözlemlenebilirlik (logging, tracing, metrics).",
      },
      {
        area: "Frontend Performansı",
        detail:
          "Core Web Vitals odaklı optimizasyon: kritik render yolu, kod bölme, görsel optimizasyonu ve ölçüm altyapısı.",
      },
    ],
    /*
      Eğitim ve staj kayıtları. Staj bilgileri netleşince buraya
      ikinci bir kayıt olarak eklenecek (şirket, pozisyon, tarih, iş).
    */
    work: [
      {
        company: "Fırat Üniversitesi",
        role: "Yazılım Mühendisliği",
        period: "4. Sınıf",
        description:
          "Yazılım mühendisliği lisans öğrencisiyim. Öğrenimim boyunca web ve mobil geliştirme, veritabanı tasarımı ve yazılım mimarisi üzerine yoğunlaştım.",
      },
    ],
  },
  publications: {
    eyebrow: "Akademik",
    title: "Akademik Çalışmalar",
    subtitle: "Yayınlar ve devam eden akademik çalışmalar.",
    nav: "Akademik",
    status: {
      published: "Yayınlandı",
      "in-review": "Değerlendirmede",
      accepted: "Kabul edildi",
    },
    viewPaper: "Makaleyi görüntüle →",
    emptyTitle: "Yakında burada",
    emptyBody:
      "İlk akademik makalem şu anda hazırlık sürecinde; yayınlandığında bu bölümde yer alacak.",
  },
  blog: {
    eyebrow: "Blog",
    recentTitle: "Son Yazılar",
    all: "Tümü →",
    pageTitle: "Mühendislik Blogu",
    pageSubtitle:
      "Çözülen zor problemler ve mimari yaklaşımlar üzerine derinlemesine yazılar.",
    back: "Blog",
  },
  contact: {
    eyebrow: "İletişim",
    title: "Birlikte çalışalım",
    intro: "Yeni fırsatlara ve teknik sohbetlere açığım. Formu doldur, mesajın doğrudan",
    introSuffix: "adresime düşsün.",
    form: {
      name: "İsim",
      namePlaceholder: "Adın Soyadın",
      email: "E-posta",
      emailPlaceholder: "ornek@mail.com",
      message: "Mesaj",
      messagePlaceholder: "Merhaba Mervan, ...",
      submit: "Mesajı gönder",
      sending: "Gönderiliyor...",
      successTitle: "Mesajın gönderildi. Teşekkürler!",
      successBody: "En kısa sürede dönüş yapacağım.",
      errorPrefix: "Gönderim başarısız oldu. Tekrar dene ya da doğrudan",
      errorSuffix: "adresine yaz.",
      subject: "Portfolyo üzerinden yeni mesaj",
    },
  },
  notFound: {
    code: "404",
    title: "Sayfa bulunamadı",
    description:
      "Aradığın sayfa taşınmış, adı değişmiş ya da hiç var olmamış olabilir.",
    backHome: "Ana sayfaya dön",
  },
  footer: {
    email: "E-posta",
    sitemap: "Site",
    social: "Bağlantılar",
  },
  meta: {
    description:
      "Full-stack geliştirme, dağıtık sistemler ve frontend performansı üzerine çalışan yazılım mühendisi.",
  },
};

const en: typeof tr = {
  nav: {
    projects: "Projects",
    experience: "Experience",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    status: "Open to internship and job opportunities.",
    location: "Elazığ, Türkiye · Open to remote work",
    title: "Software Engineer",
    headline: "Software engineer building scalable web systems.",
    summary:
      "I work on full-stack development, distributed systems and frontend performance. I care about turning complex problems into simple, maintainable solutions.",
    contactButton: "Get in touch",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Selected Projects",
    subtitle:
      "Every project is a case study: the problem, architectural decisions and measurable results.",
    caseStudy: "Case study",
    code: "Code",
    demo: "Demo",
    back: "Projects",
    sourceCode: "Source code",
    liveDemo: "Live demo",
  },
  clientWork: {
    eyebrow: "Client Work",
    title: "Built for Real Businesses",
    subtitle:
      "Live work with real users. The repositories are private as the code belongs to the clients.",
    visit: "Visit site",
  },
  github: {
    eyebrow: "Open Source",
    title: "GitHub Projects",
    subtitle: "Fetched automatically from my GitHub account; refreshed hourly.",
    featured: "Featured",
    noDescription: "No description yet.",
    allRepos: "All repositories →",
  },
  experience: {
    eyebrow: "Skills",
    title: "Expertise & Experience",
    expertiseHeading: "Areas of Expertise",
    workHeading: "Education",
    expertise: [
      {
        area: "Frontend Architecture",
        detail:
          "Large-scale applications with React/Next.js; rendering strategies (SSR/ISR/RSC), bundle optimization and design systems.",
      },
      {
        area: "Backend & API Design",
        detail:
          "REST and tRPC services with Node.js/TypeScript; data modeling, authentication and caching strategies.",
      },
      {
        area: "System Design",
        detail:
          "Queue-based async processing, horizontal scaling and observability (logging, tracing, metrics).",
      },
      {
        area: "Frontend Performance",
        detail:
          "Core Web Vitals focused optimization: critical rendering path, code splitting, image optimization and measurement infrastructure.",
      },
    ],
    work: [
      {
        company: "Fırat University",
        role: "Software Engineering",
        period: "Final Year",
        description:
          "Undergraduate student in Software Engineering. Throughout my studies I have focused on web and mobile development, database design and software architecture.",
      },
    ],
  },
  publications: {
    eyebrow: "Academic",
    title: "Academic Work",
    subtitle: "Publications and ongoing academic work.",
    nav: "Academic",
    status: {
      published: "Published",
      "in-review": "Under review",
      accepted: "Accepted",
    },
    viewPaper: "View paper →",
    emptyTitle: "Coming soon",
    emptyBody:
      "My first academic paper is currently in preparation; it will appear here once published.",
  },
  blog: {
    eyebrow: "Blog",
    recentTitle: "Recent Posts",
    all: "All →",
    pageTitle: "Engineering Blog",
    pageSubtitle:
      "In-depth writing on hard problems solved and architectural approaches learned.",
    back: "Blog",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    intro: "I'm open to new opportunities and technical conversations. Fill in the form and your message lands directly at",
    introSuffix: ".",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Hi Mervan, ...",
      submit: "Send message",
      sending: "Sending...",
      successTitle: "Your message has been sent. Thank you!",
      successBody: "I'll get back to you as soon as possible.",
      errorPrefix: "Sending failed. Try again or write directly to",
      errorSuffix: ".",
      subject: "New message from portfolio",
    },
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description:
      "The page you are looking for may have moved, been renamed, or never existed.",
    backHome: "Back to home",
  },
  footer: {
    email: "Email",
    sitemap: "Site",
    social: "Links",
  },
  meta: {
    description:
      "Software engineer working on full-stack development, distributed systems and frontend performance.",
  },
};

export const dictionaries = { tr, en };
export type Dictionary = typeof tr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
