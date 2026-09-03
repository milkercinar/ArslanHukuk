import { notFound } from "next/navigation";

/**
 * Eşleşmeyen Türkçe adresler.
 *
 * Türkçe ve İngilizce ağaçların ayrı kök yerleşimleri olduğu için Next'in
 * kök `not-found.tsx` dosyası kullanılamıyor; eşleşmeyen adres, aksi hâlde
 * sitenin tasarımını taşımayan yerleşik 404 sayfasına düşüyor. Bu yakalayıcı
 * rota, adresi kendi ağacının içinde tutar ve grubun `not-found.tsx`
 * dosyasını çalıştırır — böylece 404 sayfası da başlık, alt bilgi ve doğru
 * dille görünür.
 */
export default function CatchAll() {
  notFound();
}
