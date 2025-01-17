/* eslint-disable no-unused-vars */
export enum MusteriDurumu {
  YENI = 1, // Yeni: İlk kez kaydedilen potansiyel müşteri
  ILETISIMDE = 2, // İletişimde: İlk temas sağlandı
  TAKIPTE = 3, // Takipte: Tekrar iletişim kurulması gereken müşteri
  ILGILI = 4, // İlgili: Eğitim hakkında detaylı bilgi almak isteyen müşteri
  PAZARLIKTA = 5, // Pazarlıkta: Fiyat veya şartlar üzerinde konuşulan müşteri
  SATIS_TAMAMLANDI = 6, // Satış Tamamlandı: Eğitim satışı başarıyla tamamlandı
  KAYBEDILDI = 7, // Kaybedildi: İlgisini kaybetmiş veya olumsuz dönüş yapan müşteri
  NITELIKSIZ = 8, // Niteliksiz: Hedef kitle dışında kalan müşteri
}

export enum Type {
  Tanımsız = 0,
  Dropshipping = 1,
  Arbitraj = 2,
  PrivateLabel = 3,
  Suspend = 4,
}
export enum Role {
  // eslint-disable-next-line no-unused-vars
  Dropshipping = 1,
  // eslint-disable-next-line no-unused-vars
  DropshippingLider = 2,
  // eslint-disable-next-line no-unused-vars
  Arbitraj = 3,
  // eslint-disable-next-line no-unused-vars
  ArbitrajLider = 4,
  // eslint-disable-next-line no-unused-vars
  Satis = 5,
  // eslint-disable-next-line no-unused-vars
  SatisLider = 6,
  // eslint-disable-next-line no-unused-vars
  SosyalMedya = 7,
  // eslint-disable-next-line no-unused-vars
  SosyalMedyaLider = 8,
  // eslint-disable-next-line no-unused-vars
  PrivateLabel = 9,
  // eslint-disable-next-line no-unused-vars
  PrivateLabelLider = 10,
  // eslint-disable-next-line no-unused-vars
  Suspend = 11,
  // eslint-disable-next-line no-unused-vars
  SuspendLider = 12,
  // eslint-disable-next-line no-unused-vars
  Admin = 13,
}
export enum DropshippingStage {
  "Yeni Başladık" = 1,
  "Ürün Araştırması" = 2,
  "Tedarikçi Seçimi" = 3,
  "Mağaza Kurulumu" = 4,
  "Pazarlama ve Reklam" = 5,
  "Büyütme" = 6,
  "Diğer" = 7,
}

export enum PrivateLabelStage {
  "Yeni Başladık" = 1,
  "Marka Oluşturma" = 2,
  "Ürün Tasarımı" = 3,
  "Numune Testi" = 4,
  "Üretim" = 5,
  "Liste Optimizasyonu" = 6,
  "Pazarlama ve Büyütme" = 7,
  "Diğer" = 8,
}
export enum ArbitrajStage {
  "Yeni Başladık" = 1,
  "Pazar Araştırması" = 2,
  "Ürün Temini" = 3,
  "Ürün Listeleme" = 4,
  "Satış Yönetimi" = 5,
  "Büyütme" = 6,
  "Diğer" = 7,
}
export enum SuspendStage {
  "Yeni Başladık" = 1,
  "Politika Anlama" = 2,
  "Sorun Tespiti" = 3,
  "İtiraz Hazırlığı" = 4,
  "Başvuru Yapıldı" = 5,
  "Sorun Çözüldü" = 6,
  "Diğer" = 7,
}

export const DropshippingStages = [
  { id: "1", name: "Yeni Başladık" },
  { id: "2", name: "Ürün Araştırması" },
  { id: "3", name: "Tedarikçi Seçimi" },
  { id: "4", name: "Mağaza Kurulumu" },
  { id: "5", name: "Pazarlama ve Reklam" },
  { id: "6", name: "Büyütme" },
  { id: "7", name: "Diğer" },
];

export const PrivateLabelStages = [
  { id: "1", name: "Yeni Başladık" },
  { id: "2", name: "Marka Oluşturma" },
  { id: "3", name: "Ürün Tasarımı" },
  { id: "4", name: "Numune Testi" },
  { id: "5", name: "Üretim" },
  { id: "6", name: "Liste Optimizasyonu" },
  { id: "7", name: "Pazarlama ve Büyütme" },
  { id: "8", name: "Diğer" },
];

export const ArbitrajStages = [
  { id: "1", name: "Yeni Başladık" },
  { id: "2", name: "Pazar Araştırması" },
  { id: "3", name: "Ürün Temini" },
  { id: "4", name: "Ürün Listeleme" },
  { id: "5", name: "Satış Yönetimi" },
  { id: "6", name: "Büyütme" },
  { id: "7", name: "Diğer" },
];

export const SuspendStages = [
  { id: "1", name: "Yeni Başladık" },
  { id: "2", name: "Politika Anlama" },
  { id: "3", name: "Sorun Tespiti" },
  { id: "4", name: "İtiraz Hazırlığı" },
  { id: "5", name: "Başvuru Yapıldı" },
  { id: "6", name: "Sorun Çözüldü" },
  { id: "7", name: "Diğer" },
];
