/*
  Akademik yayınlar. Liste boşken bölüm sitede hiç görünmez —
  makale yayınlandığında (veya değerlendirmeye gönderildiğinde)
  aşağıdaki şablonu kopyalayıp publications dizisinin içine yapıştır.

  status seçenekleri:
    "published"  → Yayınlandı (yeşil rozet)
    "in-review"  → Değerlendirmede (sarı rozet) — gönderilmiş, sonuç bekleyen
    "accepted"   → Kabul edildi (mavi rozet) — kabul edilmiş, henüz basılmamış

  ÖRNEK — makaleni eklerken bu bloğu publications = [...] içine kopyala:

    {
      title: {
        tr: "Makalenin Türkçe başlığı",
        en: "English title of the paper",
      },
      authors: "M. Oktan, D. Yazar",     // yazar sırası yayındaki gibi
      venue: {
        tr: "X Sempozyumu",
        en: "X Symposium",
      },
      year: 2026,
      status: "in-review",
      link: "",                          // yayınlanınca DOI veya PDF linki
    },
*/

export type PublicationStatus = "published" | "in-review" | "accepted";

export type Publication = {
  title: { tr: string; en: string };
  authors: string;
  venue: { tr: string; en: string };
  year: number;
  status: PublicationStatus;
  link?: string;
};

export const publications: Publication[] = [];
