/*
  Müşteri işleri: gerçek işletmeler için yapılmış, canlıda çalışan siteler.
  Kod depoları özel (private) olduğu için burada GitHub linki tutulmaz —
  müşteri işlerinde bu normaldir; asıl kanıt canlı sitenin kendisidir.

  Yeni iş eklemek için diziye aynı formatta bir nesne ekle.
  Liste boşken bölüm sitede hiç görünmez.
*/
export type ClientWork = {
  /** Firma / marka adı */
  name: string;
  /** Ne tür bir iş olduğu — kısa etiket */
  type: { tr: string; en: string };
  description: { tr: string; en: string };
  tech: string[];
  url: string;
  /** Bağlantı metninde gösterilecek sade adres */
  displayUrl: string;
};

export const clientWork: ClientWork[] = [
  {
    name: "AliBaba Turkish Delight",
    type: {
      tr: "Çok dilli B2B katalog sitesi",
      en: "Multilingual B2B catalog site",
    },
    description: {
      tr: "Ukrayna merkezli bir Türk lokumu ihracatçısı için kurumsal alıcılara yönelik katalog sitesi. Ürün spesifikasyonları (EAN, ambalaj ve palet ölçüleri), lojistik bilgileri ve kalite sertifikaları; Ukraynaca/İngilizce dil desteğiyle.",
      en: "A catalog site aimed at corporate buyers for a Ukraine-based Turkish delight exporter. Product specifications (EAN, packaging and pallet dimensions), logistics details and quality certifications, with Ukrainian/English language support.",
    },
    tech: ["HTML", "CSS", "JavaScript", "i18n", "SEO", "Vercel"],
    url: "https://alibabaturkishdelight.com.ua",
    displayUrl: "alibabaturkishdelight.com.ua",
  },
  {
    name: "VOG Yapı İnşaat Emlak",
    type: {
      tr: "Kurumsal tanıtım sitesi",
      en: "Corporate website",
    },
    description: {
      tr: "Elazığ merkezli bir inşaat ve emlak firması için kurumsal tanıtım sitesi. Hizmet katalogu, proje galerisi, süreç akışı ve iletişim formu; arama motoru görünürlüğü için yapısal veri (JSON-LD) ve Open Graph etiketleriyle.",
      en: "A corporate website for a construction and real estate company based in Elazığ. Service catalog, project gallery, process flow and contact form, with structured data (JSON-LD) and Open Graph tags for search visibility.",
    },
    tech: ["HTML", "CSS", "JavaScript", "JSON-LD", "SEO", "Vercel"],
    url: "https://vog-yapi.vercel.app",
    displayUrl: "vog-yapi.vercel.app",
  },
];
