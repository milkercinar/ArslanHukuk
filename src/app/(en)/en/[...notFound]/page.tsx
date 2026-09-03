import { notFound } from "next/navigation";

/**
 * Unmatched addresses under `/en`.
 *
 * More specific than the Turkish tree's root catch-all, so an unknown English
 * address stays in the English tree and renders `(en)/not-found.tsx`. See the
 * comment in `(tr)/[...bulunamadi]/page.tsx`.
 */
export default function CatchAll() {
  notFound();
}
