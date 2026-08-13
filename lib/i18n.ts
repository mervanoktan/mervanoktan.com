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
    /*
      Bu alan sayfa başlığını (Google sonuçlarında görünen), hero etiketini,
      OG kartını ve JSON-LD jobTitle'ını besler. Öğrenci olduğu bilgisi
      hero özetinde ve Eğitim bölümünde ayrıca belirtiliyor.
    */
    title: "Yazılım Mühendisi",
    headline: "Veri odaklı tahmin modelleri ve otomasyon sistemleri geliştiriyorum.",
    summary:
      "Fırat Üniversitesi Yazılım Mühendisliği son sınıf öğrencisiyim. Akademik tarafta açık kaynak paketlerin sürdürülebilirliğini öngören bir tahmin modeli üzerine çalışıyorum. Uygulama tarafında ise gerçek kullanıcıları olan web, mobil ve masaüstü sistemler geliştirdim. Araştırdığım konuyu çalışan bir ürüne dönüştürmeyi seviyorum.",
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
    live: "Canlı",
    noDescription: "Açıklama eklenmemiş.",
    allRepos: "Tüm repolar →",
  },
  experience: {
    eyebrow: "Yetkinlikler",
    title: "Uzmanlık & Deneyim",
    expertiseHeading: "Uzmanlık Alanları",
    workHeading: "Eğitim",
    /*
      Her madde gerçekten yapılmış bir işe dayanır; parantez içindeki
      proje o iddianın kanıtıdır. Kanıtı olmayan madde eklenmemeli.
    */
    expertise: [
      {
        area: "Öneri ve Tahmin Sistemleri",
        detail:
          "Çok sinyalli puanlama motorları ve veri odaklı tahmin modelleri; sonucun neden öyle çıktığını açıklayabilen şeffaf yaklaşımlar.",
      },
      {
        area: "Nesne Tabanlı Tasarım & Katmanlı Mimari",
        detail:
          "C#/.NET ile N-Tier yapılar; iş kurallarını arayüzden ayırarak tekrar kullanılabilir ve bakımı kolay hale getirme.",
      },
      {
        area: "Veri Modelleme & İlişkisel Veritabanları",
        detail:
          "PostgreSQL ve MS SQL Server; normalizasyon, tablolar arası ilişki tasarımı ve sık sorgulanan alanlarda indeksleme.",
      },
      {
        area: "Uygulama Güvenliği",
        detail:
          "JWT tabanlı oturum yönetimi, bcrypt ile şifre saklama, sıralı ID yerine UUID kullanımı ve parametreli SQL sorguları.",
      },
      {
        area: "Web & Mobil Geliştirme",
        detail:
          "React, React Native (Expo) ve Node.js ile uçtan uca uygulama geliştirme.",
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
    emptyTitle: "Yakında burada",
    emptyBody:
      "İlk yazım hazırlık aşamasında. Geliştirdiğim projelerde karşılaştığım teknik problemleri ve aldığım mimari kararları burada paylaşacağım.",
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
      "Veri odaklı tahmin modelleri, otomasyon sistemleri ve web/mobil uygulamalar geliştiriyorum. Fırat Üniversitesi Yazılım Mühendisliği son sınıf öğrencisi.",
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
    headline: "I build data-driven prediction models and automation systems.",
    summary:
      "I am a final-year Software Engineering student at Fırat University. On the academic side I am working on a model that predicts the sustainability of open-source packages. On the practical side I have built web, mobile and desktop systems with real users. I enjoy turning what I research into a working product.",
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
    live: "Live",
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
        area: "Recommendation & Prediction Systems",
        detail:
          "Multi-signal scoring engines and data-driven prediction models; transparent approaches that can explain why a result came out the way it did.",
      },
      {
        area: "Object-Oriented Design & Layered Architecture",
        detail:
          "N-Tier structures with C#/.NET; separating business rules from the UI to make them reusable and maintainable.",
      },
      {
        area: "Data Modeling & Relational Databases",
        detail:
          "PostgreSQL and MS SQL Server; normalization, relationship design and indexing on frequently queried fields.",
      },
      {
        area: "Application Security",
        detail:
          "JWT-based session management, password hashing with bcrypt, UUIDs instead of sequential IDs, and parameterized SQL queries.",
      },
      {
        area: "Web & Mobile Development",
        detail:
          "End-to-end application development with React, React Native (Expo) and Node.js.",
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
    emptyTitle: "Coming soon",
    emptyBody:
      "My first post is in preparation. I will share the technical problems I run into and the architectural decisions I make while building my projects.",
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
      "I build data-driven prediction models, automation systems and web/mobile applications. Final-year Software Engineering student at Fırat University.",
  },
};

export const dictionaries = { tr, en };
export type Dictionary = typeof tr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
