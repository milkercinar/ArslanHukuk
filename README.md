# Arslan Hukuk Bürosu — kurumsal web sitesi

Next.js (App Router) + TypeScript + Tailwind CSS v4 + GSAP/ScrollTrigger + Lenis.

## Çalıştırma

Node.js 20 veya üzeri gerekir.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run typecheck` tür denetimini ayrıca çalıştırır.

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın.

| Değişken | Zorunlu | Açıklama |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yayında evet | Kanonik adres, sitemap ve Open Graph için mutlak kök adres. |
| `CONTACT_WEBHOOK_URL` | — | İletişim formu gönderimlerinin POST edileceği adres. |
| `RESEND_API_KEY` | — | Webhook yerine e-posta ile teslimat için. |
| `CONTACT_FROM_EMAIL` | `RESEND_API_KEY` ile birlikte | Gönderen adresi (doğrulanmış alan adı). |
| `CONTACT_TO_EMAIL` | — | Alıcı adres; tanımlanmazsa büro e-postası kullanılır. |

**Önemli:** Teslimat yolu (`CONTACT_WEBHOOK_URL` ya da `RESEND_API_KEY` +
`CONTACT_FROM_EMAIL`) tanımlanmadığı sürece `/api/iletisim` uç noktası `501`
döner ve form kullanıcıya mesajın iletilemediğini açıkça bildirir. Site
yayına alınmadan önce bunlardan biri yapılandırılmalıdır.

## İçerik nerede?

Tüm metinler `src/lib/content/` altında toplanmıştır; bileşenlerde sabit
metin yoktur.

Dile bağlı **olmayan** veriler tek yerde durur:

- `site.ts` — adres, telefon, faks, e-posta, ticaret unvanı, kanonik adres
- `practice-areas.ts` — uzmanlık alanı tipleri ve erişim yardımcıları
- `team.ts` — kişilerin adı, fotoğrafı, sicil numarası, yılları, e-postası

Çevrilen metinler dil dizinlerindedir — `tr/` ve `en/` altında aynı dosyalar:

- `ui.ts` — menü, sayfa başlıkları, form, hukuki metinler, üst veri
- `practice-areas.ts` — uzmanlık alanı başlıkları, açıklamaları, adres parçaları
- `team.ts` — unvanlar, özgeçmişler, eğitim ve çalışma konuları

Bir uzmanlık alanı veya ekip üyesi eklemek için ilgili dizideki nesneyi **her
iki dilde** çoğaltmak yeterlidir; sayfa, sitemap ve statik üretim otomatik
olarak güncellenir. Bir dile eklenip diğerine eklenmeyen metin, `Dictionary`
tipi sayesinde derleme sırasında hata verir.

## Çok dillilik

Türkçe varsayılan dildir ve adreslerde ön ek taşımaz; İngilizce `/en` altında
yayınlanır.

| Türkçe | İngilizce |
| --- | --- |
| `/` | `/en` |
| `/hakkimizda` | `/en/about` |
| `/uzmanlik-alanlari` | `/en/practice-areas` |
| `/uzmanlik-alanlari/<slug>` | `/en/practice-areas/<slug>` |
| `/ekibimiz` | `/en/team` |
| `/ekibimiz/<slug>` | `/en/team/<slug>` |
| `/iletisim` | `/en/contact` |
| `/kvkk` | `/en/data-protection` |
| `/gizlilik` | `/en/privacy` |
| `/cerez-politikasi` | `/en/cookies` |

Uzmanlık alanı adres parçaları iki dilde farklıdır; eşleşme, her alanın
dilden bağımsız `id` değeri üzerinden kurulur. Kişi adresleri iki dilde
aynıdır.

Nasıl çalıştığı:

- `src/lib/i18n/routes.ts` — rota haritası; site içindeki her bağlantı
  buradan üretilir, hiçbir bileşende elle yazılmış yol yoktur.
- `src/lib/i18n/alternate.ts` — başlıktaki **TR | EN** geçişi; bulunulan
  sayfanın diğer dildeki karşılığına gider, ana sayfaya düşürmez.
- `src/lib/seo.ts` — her sayfanın kanonik adresi ve `hreflang` bağlantıları.
  Site haritası da aynı eşleşmeyi `xhtml:link` ile bildirir.
- `src/app/(tr)/` ve `src/app/(en)/` — iki ayrı **kök yerleşim**. Ayrı olmaları
  gerekir; `<html lang>` ancak böyle sunucuda doğru üretilir. Sayfa gövdeleri
  ortaktır (`src/components/pages/`), rota dosyaları yalnızca dili ve üst
  veriyi verir.
- Diller arası geçiş tam sayfa yüklemesiyle olur — ayrı kök yerleşimlerin
  doğal sonucu ve dil değiştirme zaten seyrek bir eylem.

Yeni bir dil eklemek için: `config.ts` içindeki `LOCALES` ve `Locale`,
`routes.ts` içindeki `SEGMENTS`, `content/<dil>/` altındaki üç dosya ve
`src/app/(<dil>)/` ağacı.

## Görseller ve video

- `public/video/hero-geneva.mp4` — sağlanan açılış videosu, olduğu gibi kullanılır.
- `public/images/team/*.jpg` — mevcut siteden alınan özgün ekip fotoğrafları.

Videonun poster görseli üretilmemiştir; hazırlanacaksa ilk kareden
oluşturulup `Hero.tsx` içindeki `<video>` etiketine `poster` olarak
eklenebilir:

```bash
ffmpeg -i public/video/hero-geneva.mp4 -vframes 1 -q:v 3 public/video/hero-poster.jpg
```

## Hareket ve erişilebilirlik

- Yumuşak kaydırma Lenis ile, giriş/ortaya çıkma animasyonları GSAP
  ScrollTrigger ile yürütülür.
- `prefers-reduced-motion: reduce` tercihinde Lenis hiç başlatılmaz ve tüm
  animasyonlar devre dışı kalır; içerik doğrudan son durumunda görünür.
- Animasyonların başlangıç durumu `<head>` içindeki kısa betiğin eklediği
  `js-ready` sınıfına bağlıdır. JavaScript kapalıysa sınıf eklenmez ve tüm
  içerik görünür kalır.

## Yayın öncesi kontrol listesi

- [ ] `NEXT_PUBLIC_SITE_URL` gerçek alan adına ayarlandı.
- [ ] İletişim formu teslimat yolu yapılandırıldı ve test edildi.
- [ ] KVKK, Gizlilik ve Çerez Politikası metinleri büro tarafından
      onaylandı (bkz. aşağıdaki not).
- [ ] İngilizce metinler büro tarafından okundu (bkz. aşağıdaki not).
- [ ] Aşağıdaki içerik çelişkileri büro tarafından netleştirildi.

### Netleştirilmesi gereken içerik çelişkileri

Mevcut sitede birbiriyle uyuşmayan üç bilgi bulunmaktadır. Hiçbiri
tarafımızca değiştirilmemiş, yalnızca aktarılmıştır:

1. **Kuruluş yılı.** Ana sayfa ve "Hakkımızda" bölümü kuruluşu **1982**
   olarak verir; Av. Seyit Arslan'ın özgeçmişi ise 1984'te avukatlığa
   başlayıp "aynı yıl" bürosunu kurduğunu belirtir. Sitede 1982 esas alınmış,
   özgeçmiş metni ise birebir korunmuştur.
2. **Adres.** İletişim sayfası Şişli adresini verir; "Hakkımızda" metninde
   ise 2009'dan bu yana Cevizlibağ'daki büroda hizmet verildiği yazar.
   Güncel adres olarak Şişli alınmış, eski adrese ilişkin cümle
   çıkarılmıştır.
3. **E-posta.** Ana sayfa `alperarslan@istanbulbarosu.org.tr`, iletişim
   sayfası `alperarslan@istanbulbaro.org.tr` yazar. İlki kullanılmıştır.

### Yayınlar bölümü

Mevcut sitede makale, kitap veya hukuk notu bulunmadığından "Yayınlar"
bölümü ve menü öğesi oluşturulmamıştır. İçerik hazırlandığında
`src/lib/content/` altına bir `publications.ts` eklenip
`app/yayinlar/` sayfası aynı editoryal satır düzeniyle kurulabilir.

### Hukuki metinler

`/kvkk`, `/gizlilik` ve `/cerez-politikasi` sayfalarındaki metinler mevcut
sitede bulunmadığı için, büronun gerçek iletişim bilgileri kullanılarak
standart yapıda hazırlanmıştır. Yayına alınmadan önce büro tarafından
gözden geçirilmelidir. Aynısı `/en/data-protection`, `/en/privacy` ve
`/en/cookies` için de geçerlidir.

### İngilizce metinler

İngilizce içerik, Türkçe metinlerin çevirisidir; kaynakta olmayan hiçbir
bilgi eklenmemiştir. İki noktanın büro tarafından onaylanması gerekir:

1. **Görünen ad.** Ticaret unvanı "Arslan Hukuk Bürosu"dur ve yapılandırılmış
   veride (`schema.org`) esas ad olarak bu kullanılır. İngilizce sayfalarda
   ve sayfa başlıklarında okunabilir karşılık olarak **"Arslan Law Office"**
   kullanılmış, yapılandırılmış veriye `alternateName` olarak eklenmiştir.
   Büro başka bir karşılık tercih ederse `src/lib/content/en/ui.ts` içindeki
   `FIRM_EN` sabitini değiştirmek yeterlidir.
2. **Hukuk terimleri.** Türk hukukuna özgü kavramların (konkordato, tenkis,
   bilirkişilik, tam yargı davası) İngilizce karşılıkları yerleşik
   kullanımlara göre seçilmiş, karşılığı tam oturmayan yerlerde Türkçe terim
   parantez içinde korunmuştur.
