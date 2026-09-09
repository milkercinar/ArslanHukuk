# Sosyal paylaşım (Open Graph) görsellerini üretir.
#
# Site WhatsApp, LinkedIn veya X'te paylaşıldığında görünen 1200x630 kart.
# Görsel olmazsa boş bir kart çıkar; bir hukuk bürosunda tavsiyelerin önemli
# bir kısmı bu kanallardan geldiği için kartın dolu olması önemli.
#
# İki dil için iki ayrı görsel üretilir (og-tr.png / og-en.png); İngilizce
# sayfalarda İngilizce kart görünür.
#
# Yazı tipi: sistemdeki "Garamond". Sitenin başlık yazı tipi Cormorant
# Garamond'dur ve o da bir Garamond yorumudur; bu yüzden kart siteyle aynı
# havayı taşır. Görsel burada bir kez üretilip projeye konduğu için sunucuda
# yazı tipinin kurulu olması gerekmez.
#
# Kullanım — proje kökünden:
#   powershell -ExecutionPolicy Bypass -File scripts\paylasim-gorseli-uret.ps1

Add-Type -AssemblyName System.Drawing

$root = (Get-Location).Path
if (-not (Test-Path (Join-Path $root "package.json"))) {
  throw "Bu betik proje kökünden çalıştırılmalı."
}

$LOGO = Join-Path $root "public\images\arslan-hukuk-logo.png"
$OUT  = Join-Path $root "public\images"

# globals.css'teki tonlar
$INK    = [System.Drawing.Color]::FromArgb(255, 11, 14, 12)    # --color-ink-black
$IVORY  = [System.Drawing.Color]::FromArgb(255, 241, 240, 235) # --color-ivory
$GOLD   = [System.Drawing.Color]::FromArgb(255, 228, 194, 140) # logodaki altın

$W = 1200; $H = 630
$MARGIN = 96

# Aslanı logodan kırp (yazı 1200 pikselde bile büyütülünce bozulur, işaret yeter)
$logo = [System.Drawing.Bitmap]::FromFile($LOGO)
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
$cw = $x1 - $x0 + 1; $ch = $y1 - $y0 + 1
$lion = New-Object System.Drawing.Bitmap($cw, $ch)
$gl = [System.Drawing.Graphics]::FromImage($lion)
$gl.DrawImage($logo, (New-Object System.Drawing.Rectangle(0,0,$cw,$ch)), $x0, $y0, $cw, $ch, [System.Drawing.GraphicsUnit]::Pixel)
$gl.Dispose(); $logo.Dispose()

function New-OgImage {
  param([string]$Title, [string]$Sub, [string]$Path)

  $bmp = New-Object System.Drawing.Bitmap($W, $H)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear($INK)
  $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  # Aslan — 1.7x büyütme sınırında tutuluyor ki yumuşamasın
  $lw = 112
  $lh = [int]([Math]::Round($lw * $ch / $cw))
  $g.DrawImage($lion, $MARGIN, $MARGIN, $lw, $lh)

  $titleFont = New-Object System.Drawing.Font("Garamond", 62, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $subFont   = New-Object System.Drawing.Font("Segoe UI", 27, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
  $urlFont   = New-Object System.Drawing.Font("Segoe UI", 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

  $ivoryBrush = New-Object System.Drawing.SolidBrush($IVORY)
  $subBrush   = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(200, 241, 240, 235))
  $urlBrush   = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(130, 241, 240, 235))
  $goldPen    = New-Object System.Drawing.Pen($GOLD, 2)

  $y = $MARGIN + $lh + 74
  $g.DrawString($Title, $titleFont, $ivoryBrush, $MARGIN, $y)

  $y += 96
  $g.DrawLine($goldPen, $MARGIN, $y, ($MARGIN + 96), $y)

  $y += 40
  # Alt satır iki satıra sığsın diye ölçü sınırlandırılır
  $rect = New-Object System.Drawing.RectangleF($MARGIN, $y, ($W - 2*$MARGIN), 120)
  $g.DrawString($Sub, $subFont, $subBrush, $rect)

  $urlText = "arslanhukuk.com.tr"
  $sz = $g.MeasureString($urlText, $urlFont)
  $g.DrawString($urlText, $urlFont, $urlBrush, ($W - $MARGIN - $sz.Width), ($H - $MARGIN - $sz.Height + 10))

  $g.Dispose()
  $bmp.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()

  $fi = Get-Item -LiteralPath $Path
  "  {0,-12} {1}x{2}  {3} KB" -f (Split-Path $Path -Leaf), $W, $H, [Math]::Round($fi.Length/1KB,1)
}

New-OgImage -Title "Arslan Hukuk Bürosu" `
            -Sub "1982'den bu yana İstanbul'da avukatlık ve hukuki danışmanlık." `
            -Path (Join-Path $OUT "og-tr.png")

New-OgImage -Title "Arslan Law Office" `
            -Sub "Legal advice and representation in Istanbul since 1982." `
            -Path (Join-Path $OUT "og-en.png")

$lion.Dispose()
"tamam -> $OUT"
