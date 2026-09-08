Add-Type -AssemblyName System.Drawing
$root = 'E:/Projects/AashishLabs/AashishLabs Studio'
$source = 'C:/Users/Lenovo/OneDrive/Desktop/Aashishlabs Instagram/Instagram Post - AashishLabs Website Theme V2.png'
$original = [System.Drawing.Bitmap]::FromFile($source)
$result = [System.Drawing.Bitmap]::new($original)
$pixels = @()
for ($y = 23; $y -le 53; $y++) {
  for ($x = 546; $x -le 577; $x++) {
    $c = $original.GetPixel($x,$y)
    if ($c.B -gt ($c.R + 12) -and $c.B -gt ($c.G + 6) -and $c.R -gt 40) {
      $pixels += [PSCustomObject]@{ X=$x; Y=$y; Color=$c }
      $result.SetPixel($x,$y,$original.GetPixel($x+70,$y))
    }
  }
}
foreach ($p in $pixels) { $result.SetPixel($p.X+13,$p.Y,$p.Color) }
$result.Save("$root/output/instagram/website-offer-post-corrected-logo.png",[System.Drawing.Imaging.ImageFormat]::Png)
$result.Dispose()
$original.Dispose()
