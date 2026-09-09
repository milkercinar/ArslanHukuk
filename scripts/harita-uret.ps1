# İletişim sayfasındaki harita görselini üretir.
#
# Neden dosya olarak üretiyoruz: gömülü bir harita (Google Maps iframe'i ya da
# çalışma anında karo çeken bir harita kütüphanesi) sayfa açıldığında üçüncü
# tarafa istek atar ve çerez bırakır. Bu, sitenin Çerez Politikası'ndaki
# "reklam, profilleme veya üçüncü taraf takip çerezi kullanılmaz" taahhüdünü
# ve KVKK metnindeki aktarım beyanını geçersiz kılardı. Karolar bir kez burada
# indirilip birleştiriliyor, sayfa yalnızca kendi sunucusundaki dosyayı
# gösteriyor.
#
# Kaynak: OpenStreetMap. Karolar ODbL kapsamındadır; atıf satırı
# (© OpenStreetMap katkıda bulunanları) iletişim sayfasında haritanın altında
# gösterilir ve kaldırılmamalıdır.
#
# Kullanım — proje kökünden:
#   powershell -ExecutionPolicy Bypass -File scripts\harita-uret.ps1
#
# Koordinat değişirse src/lib/content/site.ts içindeki officeCoordinates da
# güncellenmelidir; ikisi aynı noktayı göstermek zorundadır.

Add-Type -AssemblyName System.Drawing

# src/lib/content/site.ts -> officeCoordinates ile aynı olmalı
$lat = 41.0648362
$lon = 28.9937742

$z    = 18     # ekranda görünen yakınlığın bir üstü; 2:1 küçültülünce keskin durur
$outW = 812    # 406 CSS px * 2
$outH = 608    # 304 CSS px * 2  (4:3)

# Proje yolu Türkçe karakter içerdiği için betiğe gömülmez; PowerShell 5.1
# .ps1 dosyalarını ANSI okuyup yolu bozar. Çalışma dizininden alınır.
$root    = (Get-Location).Path
$outFile = Join-Path $root (Join-Path "public" (Join-Path "images" "harita-buro.png"))
$cache   = Join-Path $env:TEMP "osm-tile-cache"
$ua      = "ArslanHukuk-website-build/1.0 (one-off static map asset)"

if (-not (Test-Path (Join-Path $root "package.json"))) {
  throw "Bu betik proje kökünden çalıştırılmalı."
}

New-Item -ItemType Directory -Force -Path $cache | Out-Null

# Merkez noktanın dünya piksel koordinatı (Web Mercator)
$n = [Math]::Pow(2, $z)
$latRad = $lat * [Math]::PI / 180.0
$cx = ($lon + 180.0) / 360.0 * $n * 256.0
$cy = (1.0 - [Math]::Log([Math]::Tan($latRad) + 1.0 / [Math]::Cos($latRad)) / [Math]::PI) / 2.0 * $n * 256.0

$left = $cx - $outW / 2.0
$top  = $cy - $outH / 2.0

$tx0 = [int][Math]::Floor($left / 256.0)
$ty0 = [int][Math]::Floor($top / 256.0)
$tx1 = [int][Math]::Floor(($left + $outW - 1) / 256.0)
$ty1 = [int][Math]::Floor(($top + $outH - 1) / 256.0)

$bmp = New-Object System.Drawing.Bitmap($outW, $outH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$downloaded = 0; $fromCache = 0; $fail = 0
foreach ($tx in $tx0..$tx1) {
  foreach ($ty in $ty0..$ty1) {
    $cf = Join-Path $cache "$z-$tx-$ty.png"
    if (-not (Test-Path $cf)) {
      try {
        $resp = Invoke-WebRequest -UseBasicParsing -Uri "https://tile.openstreetmap.org/$z/$tx/$ty.png" `
                                  -Headers @{ "User-Agent" = $ua } -TimeoutSec 30
        [System.IO.File]::WriteAllBytes($cf, $resp.Content)
        $downloaded++
        Start-Sleep -Milliseconds 120   # karo sunucusuna nazik davran
      } catch {
        "  karo alinamadi: $z/$tx/$ty -> $($_.Exception.Message)"
        $fail++
        continue
      }
    } else { $fromCache++ }

    $tile = [System.Drawing.Image]::FromFile($cf)
    $g.DrawImage($tile, [int]([Math]::Round($tx * 256.0 - $left)), [int]([Math]::Round($ty * 256.0 - $top)), 256, 256)
    $tile.Dispose()
  }
}
$g.Dispose()

if ($fail -gt 0) {
  $bmp.Dispose()
  throw "$fail karo alinamadi; eksik gorsel yazilmadi."
}

$bmp.Save($outFile, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

$fi = Get-Item -LiteralPath $outFile
"karo    : indirilen=$downloaded onbellek=$fromCache"
"cikti   : $($fi.FullName)"
"boyut   : $([Math]::Round($fi.Length/1KB,1)) KB  (${outW}x${outH})"
