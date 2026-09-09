/**
 * Basit, bellek içi hız sınırı.
 *
 * Amaç, iletişim formunun bot tarafından arka arkaya doldurulmasını
 * zorlaştırmaktır; bir güvenlik sınırı değil, gürültü filtresidir.
 *
 * Sınırlama sunucu örneğinin belleğinde tutulur. Bunun iki sonucu vardır:
 * yeniden başlatmada sıfırlanır ve birden fazla örnek (sunucusuz dağıtımda
 * olduğu gibi) çalışıyorsa her biri kendi sayacını tutar. Yani üst sınır
 * pratikte "örnek sayısı × MAX" olabilir. Daha katı bir sınır gerekiyorsa
 * paylaşılan bir depo (Redis vb.) gerekir; bu sitenin trafiği için gereksiz.
 */

type Hits = number[];

const buckets = new Map<string, Hits>();

/** Belleğin sınırsız büyümesini engeller. */
const MAX_KEYS = 5000;

function recent(key: string, windowMs: number): number[] {
  // Sayaç tutulan anahtar sayısı sınırı aşarsa tamamen boşalt — eskimiş
  // anahtarları tek tek gezmek yerine sıfırlamak bu ölçekte yeterli.
  if (buckets.size > MAX_KEYS) buckets.clear();

  const since = Date.now() - windowMs;
  const kept = (buckets.get(key) ?? []).filter((t) => t > since);
  buckets.set(key, kept);
  return kept;
}

/**
 * `key` sınırın altında mı? Sayacı **artırmaz**.
 *
 * Sayma ile sorgulamanın ayrı olması, hakkın yalnızca gerçekten
 * gerçekleşen işlem için harcanmasını sağlar: teslimat başarısız olursa
 * kullanıcı tekrar deneyebilmelidir.
 */
export function isAllowed(key: string, max: number, windowMs: number): boolean {
  return recent(key, windowMs).length < max;
}

/** `key` için bir kullanım işler. */
export function record(key: string, windowMs: number): void {
  const kept = recent(key, windowMs);
  kept.push(Date.now());
  buckets.set(key, kept);
}

/** Sorgula ve serbestse hemen say. Taşkın koruması gibi her isteği sayan
 *  durumlar için. */
export function rateLimit(key: string, max: number, windowMs: number): boolean {
  if (!isAllowed(key, max, windowMs)) return false;
  record(key, windowMs);
  return true;
}

/**
 * İsteği gönderen adres.
 *
 * Vercel, Netlify ve çoğu ters vekil sunucu gerçek adresi
 * `x-forwarded-for` başlığının ilk değerinde taşır. Başlık istemci
 * tarafından uydurulabilir; bu yüzden buradaki sınır kesin bir engel değil,
 * caydırıcıdır.
 */
export function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "bilinmeyen";
}
