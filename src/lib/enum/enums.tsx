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
  "Başlamadı" = 0,
  "Hesap Açılışı ve Payoneer Tanıtımı" = 1,
  "Hesap Ayarları- Panel Tanıtımı- Buybox Taktiği" = 2,
  "Hesap Sağlığı 1. ders" = 3,
  "Hesap Sağlığı 2. ders (appeal yazma)" = 4,
  "Yazılımı Bağlama ve Yazılım Kullanmayı Öğrenme" = 5,
  "Ürün Bulma Dersi 1 (Klasik Taktikler)" = 6,
  "Ürün Bulma Dersi 2 (ileri taktikler)" = 7,
  "Diğer Yazılımlarla Ürün Bulma ve Kategori Açtırma" = 8,
  "Genel Kontrol ve Soru Cevap Dersi" = 9,
  "Sipariş Gönderme Dersi" = 10,
  "İade Dersi (iade gelmese de yapılır)" = 11,
  "Beklemede" = 99,
}
export enum NextDropshippingStage {
  "Başlamadı" = 0,
  "GENEL DURUM DEĞERLENDİRMESİ, AYARLAR VE YOL PLANI" = 1,
  "DETAYLI HESAP SAĞLIĞI, APPEAL, SUSPEND İNCELEMESİ" = 2,
  "MANUEL KATEGORİ VE ÜRÜN ARAMA TAKTİKLERİ" = 3,
  "İLERİ SATIŞ & ÇAPRAZ TARAMA & RAKİP ANALİZİ" = 4,
  "HELIUM 10 İLE SATAN ÜRÜN, KEYWORD, KATEGORİ ARAŞTIRMASI" = 5,
  "KEEPA ÜZERİNDEN REKABETÇİ ÜRÜN BULMA TAKTİKLERİ" = 6,
  "ÜST DÜZEY BİR YAZILIM İLE ÜRÜN VE ALT KATEGORİ BULMA" = 7,
  "BUSINESS REPORTS & ENVANTER YÖNETİMİ, NE SATAR?" = 8,
  "GENEL KONTROL & SORU CEVAP" = 9,
  "Beklemede" = 99,
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
  "Beklemede" = 99,
}
export enum ArbitrajStage {
  "Yeni Başladık" = 1,
  "Pazar Araştırması" = 2,
  "Ürün Temini" = 3,
  "Ürün Listeleme" = 4,
  "Satış Yönetimi" = 5,
  "Büyütme" = 6,
  "Diğer" = 7,
  "Beklemede" = 99,
}
export enum SuspendStage {
  "Yeni Başladık" = 1,
  "Politika Anlama" = 2,
  "Sorun Tespiti" = 3,
  "İtiraz Hazırlığı" = 4,
  "Başvuru Yapıldı" = 5,
  "Sorun Çözüldü" = 6,
  "Diğer" = 7,
  "Beklemede" = 99,
}

export const DropshippingStages = [
  { id: "0", name: "Başlamadı" },
  { id: "1", name: "Hesap Açılışı ve Payoneer Tanıtımı" },
  { id: "2", name: "Hesap Ayarları- Panel Tanıtımı- Buybox Taktiği" },
  { id: "3", name: "Hesap Sağlığı 1. ders" },
  { id: "4", name: "Hesap Sağlığı 2. ders (appeal yazma)" },
  { id: "5", name: "Yazılımı Bağlama ve Yazılım Kullanmayı Öğrenme" },
  { id: "6", name: "Ürün Bulma Dersi 1 (Klasik Taktikler)" },
  { id: "7", name: "Ürün Bulma Dersi 2 (ileri taktikler)" },
  { id: "8", name: "Diğer Yazılımlarla Ürün Bulma ve Kategori Açtırma" },
  { id: "9", name: "Genel Kontrol ve Soru Cevap Dersi" },
  { id: "10", name: "Sipariş Gönderme Dersi" },
  { id: "11", name: "İade Dersi (iade gelmese de yapılır)" },
  { id: "99", name: "Beklemede" },
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
  { id: "99", name: "Beklemede" },
];

export const ArbitrajStages = [
  { id: "1", name: "Yeni Başladık" },
  { id: "2", name: "Pazar Araştırması" },
  { id: "3", name: "Ürün Temini" },
  { id: "4", name: "Ürün Listeleme" },
  { id: "5", name: "Satış Yönetimi" },
  { id: "6", name: "Büyütme" },
  { id: "7", name: "Diğer" },
  { id: "99", name: "Beklemede" },
];

export const SuspendStages = [
  { id: "1", name: "Yeni Başladık" },
  { id: "2", name: "Politika Anlama" },
  { id: "3", name: "Sorun Tespiti" },
  { id: "4", name: "İtiraz Hazırlığı" },
  { id: "5", name: "Başvuru Yapıldı" },
  { id: "6", name: "Sorun Çözüldü" },
  { id: "7", name: "Diğer" },
  { id: "99", name: "Beklemede" },
];
