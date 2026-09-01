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

- `site.ts` — büro adı, adres, telefon, e-posta, menüler
- `firm.ts` — kahraman bölümü, giriş, hakkımızda, ilkeler, iletişim çağrısı
- `practice-areas.ts` — uzmanlık alanları ve detay sayfası içerikleri
- `team.ts` — ekip üyeleri, özgeçmişler, sicil ve dil bilgileri

Bir uzmanlık alanı veya ekip üyesi eklemek için ilgili dizideki nesneyi
çoğaltmak yeterlidir; sayfa, sitemap ve statik üretim otomatik olarak
güncellenir.

### Çok dillilik

`site.ts` içinde `Locale`, `LOCALES` ve `DEFAULT_LOCALE` tanımları hazırdır;
şu an yalnızca `tr` etkindir. İngilizce içerik geldiğinde içerik modülleri
dile göre anahtarlanıp `app/[locale]` segmenti eklenerek genişletilebilir.

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
gözden geçirilmelidir.
