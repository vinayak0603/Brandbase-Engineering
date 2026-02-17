
# Optimize Images Script
# This script resizes images larger than 1920px to 1920px max dimension.

Add-Type -AssemblyName System.Drawing

$targetDirs = @("src/assets/services", "src/assets/industries")

foreach ($dir in $targetDirs) {
    if (Test-Path $dir) {
        Write-Host "Processing directory: $dir"
        $files = Get-ChildItem -Path $dir -Include *.jpg,*.jpeg,*.png -Recurse

        foreach ($file in $files) {
            try {
                $img = [System.Drawing.Image]::FromFile($file.FullName)
                
                if ($img.Width -gt 1920 -or $img.Height -gt 1920) {
                    Write-Host "Resizing $($file.Name) ($($img.Width)x$($img.Height))..."
                    
                    # Calculate new dimensions
                    $ratio = $img.Width / $img.Height
                    $newWidth = 1920
                    $newHeight = 1920
                    
                    if ($img.Width -gt $img.Height) {
                        $newHeight = [Math]::Round($newWidth / $ratio)
                    } else {
                        $newWidth = [Math]::Round($newHeight * $ratio)
                    }
                    
                    $newImg = new-object System.Drawing.Bitmap($newWidth, $newHeight)
                    $graph = [System.Drawing.Graphics]::FromImage($newImg)
                    $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                    $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                    
                    $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
                    
                    $img.Dispose() # Release file lock
                    
                    # Save with simple compression (default jpeg encoder via extension)
                    # For simplicity in PS script without complex encoder params, we just save.
                    # Note: System.Drawing saves JPEG with default 75% quality usually.
                    
                    $newImg.Save($file.FullName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
                    
                    $newImg.Dispose()
                    $graph.Dispose()
                    
                    Write-Host "Resized $($file.Name) to $newWidth x $newHeight"
                } else {
                    $img.Dispose()
                }
            } catch {
                Write-Host "Error processing $($file.Name): $_"
            }
        }
    } else {
        Write-Host "Directory not found: $dir"
    }
}

Write-Host "Optimization complete."
