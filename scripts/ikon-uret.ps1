# Tarayıcı sekmesi ve iOS ana ekran ikonlarını logodan üretir.
#
# Kaynak logo yatay bir kilit (aslan + "ARSLAN hukuk bürosu" yazısı). Yazı
# 32 pikselde okunmaz; bu yüzden yalnızca aslan işareti kırpılır ve koyu
# zemine oturtulur. Altın rengi aslan açık zeminde sönük kalıyor, koyu
# zeminde ise hem açık hem koyu sekmelerde net görünüyor.
#
# NOT: kaynak logo 205x45 pikseldir, yani aslan yalnızca 66x45. Sekme ikonu
# için bu bolca yeterli (küçültme yapılıyor) ama 180 pikselik iOS ikonunda
# büyütme gerektiği için hafif yumuşak kalır. Elde vektör (SVG/AI/EPS) ya da
# yüksek çözünürlüklü logo varsa LOGO değişkenini ona çevirip yeniden
# çalıştırmak yeterlidir; ölçüler ve yerleşim aynı kalır.
#
# Kullanım — proje kökünden:
#   powershell -ExecutionPolicy Bypass -File scripts\ikon-uret.ps1

Add-Type -AssemblyName System.Drawing

$root = (Get-Location).Path
if (-not (Test-Path (Join-Path $root "package.json"))) {
  throw "Bu betik proje kökünden çalıştırılmalı."
}

$LOGO = Join-Path $root "public\images\arslan-hukuk-logo.png"
$APP  = Join-Path $root "src\app"

# Sitenin en koyu tonu (globals.css -> --color-ink-black)
$BG = [System.Drawing.Color]::FromArgb(255, 11, 14, 12)

$logo = [System.Drawing.Bitmap]::FromFile($LOGO)

# Aslanı yazıdan ayıran boşluk: 83-87. sütunlar.
$x0 = 17; $x1 = 82
$y0 = $logo.Height; $y1 = 0
for ($x = $x0; $x -le $x1; $x++) {
  for ($y = 0; $y -lt $logo.Height; $y++) {
    if ($logo.GetPixel($x, $y).A -gt 20) {
      if ($y -lt $y0) { $y0 = $y }
      if ($y -gt $y1) { $y1 = $y }
    }
  }
}
$cw = $x1 - $x0 + 1
$ch = $y1 - $y0 + 1

$lion = New-Object System.Drawing.Bitmap($cw, $ch)
$gc = [System.Drawing.Graphics]::FromImage($lion)
$gc.DrawImage($logo, (New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)),
              $x0, $y0, $cw, $ch, [System.Drawing.GraphicsUnit]::Pixel)
$gc.Dispose()
$logo.Dispose()

function New-Icon {
  param([int]$Size, [double]$Fill, [string]$Path)

  $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear($BG)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode  = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.SmoothingMode    = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

  # Aslan yatay bir işaret; kareye genişliğinden oturtulur.
  $w = [int]([Math]::Round($Size * $Fill))
  $h = [int]([Math]::Round($w * $ch / $cw))
  $g.DrawImage($lion, [int](($Size - $w) / 2), [int](($Size - $h) / 2), $w, $h)
  $g.Dispose()

  $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  "  {0,-24} {1}x{1}" -f (Split-Path $Path -Leaf), $Size
}

# Sekme ikonu. 64 piksel üretilir; tarayıcı 16/32'ye küçültünce keskin kalır.
New-Icon -Size 64  -Fill 0.78 -Path (Join-Path $APP "icon.png")

# iOS ana ekran ikonu. Köşeleri sistem yuvarlar, bu yüzden kenar payı geniş.
New-Icon -Size 180 -Fill 0.68 -Path (Join-Path $APP "apple-icon.png")

$lion.Dispose()
"tamam -> $APP"
