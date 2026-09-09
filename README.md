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
| `SMTP_HOST` `SMTP_USER` `SMTP_PASSWORD` | Teslimat için birini seçin | Büronun kendi mail sunucusuyla gönderim (tercih edilen yol). |
| `SMTP_PORT` `SMTP_SECURE` | — | Varsayılan 465 ve porta göre otomatik TLS. |
| `CONTACT_WEBHOOK_URL` | Teslimat için birini seçin | Gönderimlerin POST edileceği adres. |
| `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` | Teslimat için birini seçin | E-posta API'si ile teslimat. |
| `CONTACT_TO_EMAIL` | — | Alıcı adres; tanımlanmazsa büro e-postası kullanılır. |

## İletişim formu mesajları nereye gider?

**Veritabanı yoktur ve gerekmez.** Form gönderildiğinde mesaj doğrudan
büronun gelen kutusuna e-posta olarak iletilir; sitede saklanmaz. Gelen
e-postanın `Reply-To` başlığı formu dolduran kişiye ayarlıdır, yani gelen
kutusunda "Yanıtla" demek doğrudan o kişiye yazmak demektir.

Saklamamak bilinçli bir tercihtir: mesajlar zaten e-posta arşivinde durur,
ayrıca bir veri tabanı tutmak KVKK açısından saklama süresi, silme, erişim
yetkisi ve güvenlik yükümlülükleri doğururdu.

Teslimat yolları, yapılandırılmışsa şu sırayla denenir:

1. **SMTP** — büronun kendi mail sunucusu. Araya yeni bir hizmet sağlayıcı
   girmediği ve veri yurt dışına çıkmadığı için tercih edilen yoldur.
2. **Webhook** — mesajı bir otomasyona veya tabloya iletir.
3. **Resend** — SMTP erişimi yoksa. Gönderen adres Resend'de doğrulanmış bir
   alan adında olmalıdır; sağlayıcı ABD merkezlidir.

**Önemli:** Hiçbiri tanımlanmadığı sürece `/api/iletisim` uç noktası `501`
döner ve form kullanıcıya mesajın iletilemediğini açıkça bildirir — mesaj
sessizce kaybolmaz. Site yayına alınmadan önce biri yapılandırılmalıdır.

### Spam koruması

- **Tuzak alan (honeypot):** formda ekran dışına alınmış, klavye sırasından
  ve ekran okuyucudan çıkarılmış bir alan vardır. Doluysa gönderim bir
  bottandır; sunucu `200` döner ama mesajı iletmez. Bilerek başarı dönülür —
  hata dönmek bota neyin yakalandığını söylerdi.
- **Hız sınırı:** iki katmanlıdır. Aynı adresten saatte en fazla **5 iletilen
  mesaj**, ve geçersiz olanlar dahil saatte **30 istek**. Aşılırsa `429` döner
  ve form bunu ayrı bir mesajla bildirir. Mesaj hakkı yalnızca teslimat
  gerçekten başarılı olduğunda harcanır; formu yanlış doldurup düzelten ya da
  teslimat hatası alıp tekrar deneyen kullanıcı hakkını yakmaz. Sınır sunucu
  örneğinin belleğinde tutulur; sunucusuz dağıtımda her örnek kendi sayacını
  tutar, yani kesin bir engel değil caydırıcıdır (bkz.
  `src/lib/rate-limit.ts`).
- CAPTCHA yoktur; kullanıcıya ek yük bindirmez.

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
- `public/video/hero-poster.jpg` — videonun ilk karesi (aşağıya bakınız).
- `public/images/team/*.jpg` — mevcut siteden alınan özgün ekip fotoğrafları.
- `public/images/harita-buro.png` — iletişim sayfasındaki harita (aşağıya bakınız).
- `public/images/og-tr.png`, `og-en.png` — sosyal paylaşım kartları.
- `src/app/icon.png`, `apple-icon.png` — sekme ve iOS ana ekran ikonları.

### Üretilen görseller

Üçü de logodan/videodan türetilmiştir ve betiklerle yeniden üretilebilir.
Proje kökünden:

```bash
powershell -ExecutionPolicy Bypass -File scripts\ikon-uret.ps1
powershell -ExecutionPolicy Bypass -File scripts\paylasim-gorseli-uret.ps1
powershell -ExecutionPolicy Bypass -File scripts\harita-uret.ps1
```

Betikler UTF-8 **BOM ile** kaydedilmiştir; BOM olmadan Windows PowerShell 5.1
dosyayı ANSI okur ve Türkçe karakterler görsellere bozuk basılır.

**Kaynak logonun çözünürlüğü düşük** (205×45). Sekme ikonu için sorun değil
(küçültme yapılıyor) ama 180 pikselik iOS ikonu ve paylaşım kartındaki aslan
büyütüldüğü için hafif yumuşak kalıyor. Elde vektör (SVG/AI/EPS) veya yüksek
çözünürlüklü logo varsa betiklerdeki `$LOGO` yolunu ona çevirip yeniden
çalıştırmak yeterlidir; ölçüler ve yerleşim aynı kalır.

Video posteri (`hero-poster.jpg`) videonun **t=0** karesidir, bu yüzden video
başladığında geçiş görünmez. Yeniden üretmek gerekirse, ffmpeg kuruluysa:

```bash
ffmpeg -i public/video/hero-geneva.mp4 -vframes 1 -q:v 3 public/video/hero-poster.jpg
```

### İletişim sayfasındaki harita

Harita **gömülü değildir**. Gömülü bir harita (Google Maps iframe'i ya da
çalışma anında karo çeken bir kütüphane) sayfa açılır açılmaz üçüncü tarafa
istek atar ve çerez bırakır; bu, sitenin Çerez Politikası'ndaki "üçüncü taraf
takip çerezi kullanılmaz" taahhüdünü ve KVKK metnindeki aktarım beyanını
geçersiz kılardı. Bunun yerine OpenStreetMap karoları bir kez indirilip tek
bir görsele birleştirilmiş, projeye konmuştur. Sayfa yalnızca kendi
sunucusundaki dosyayı gösterir; tıklandığında Google Haritalar yeni sekmede
açılır.

Görseli yeniden üretmek için, proje kökünden:

```bash
powershell -ExecutionPolicy Bypass -File scripts\harita-uret.ps1
```

Koordinat `src/lib/content/site.ts` içindeki `officeCoordinates` ile betikteki
`$lat`/`$lon` değerlerinde **iki yerde** durur; biri değişirse diğeri de
güncellenmelidir, aksi hâlde işaret haritanın merkezinden kayar.

Atıf satırı (© OpenStreetMap katkıda bulunanları) haritanın altında
gösterilir. Karolar ODbL kapsamında olduğu için bu satır **kaldırılmamalıdır**.

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
