# Check if student photo exists
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Student Photo Checker" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$photoPath = "public\assets\student-photo.jpg"
$assetsFolder = "public\assets"

# Check if assets folder exists
if (Test-Path $assetsFolder) {
    Write-Host "✅ Assets folder exists: $assetsFolder" -ForegroundColor Green
    Write-Host ""
    
    # List all files in assets folder
    Write-Host "Files in assets folder:" -ForegroundColor Yellow
    Get-ChildItem $assetsFolder | ForEach-Object {
        Write-Host "  - $($_.Name)" -ForegroundColor White
    }
    Write-Host ""
    
    # Check for student photo
    if (Test-Path $photoPath) {
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "  ✅ SUCCESS! Student photo found!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Photo location: $photoPath" -ForegroundColor Cyan
        
        $fileInfo = Get-Item $photoPath
        Write-Host "File size: $([math]::Round($fileInfo.Length / 1KB, 2)) KB" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "🎉 Your photo is ready!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next steps:" -ForegroundColor Yellow
        Write-Host "1. Run: npm run dev" -ForegroundColor White
        Write-Host "2. Open: http://localhost:5173" -ForegroundColor White
        Write-Host "3. See your photo in Student Profile Card! 📸" -ForegroundColor White
        
    } else {
        Write-Host "========================================" -ForegroundColor Red
        Write-Host "  ❌ Student photo NOT found!" -ForegroundColor Red
        Write-Host "========================================" -ForegroundColor Red
        Write-Host ""
        Write-Host "Expected location: $photoPath" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "📝 What to do:" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "1. Save your photo from chat as: student-photo.jpg" -ForegroundColor White
        Write-Host ""
        Write-Host "2. Place it in this folder:" -ForegroundColor White
        Write-Host "   $((Get-Location).Path)\$assetsFolder" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "3. Quick way to open folder:" -ForegroundColor White
        Write-Host "   - Press Windows + R" -ForegroundColor White
        Write-Host "   - Paste this path and press Enter:" -ForegroundColor White
        Write-Host "   $((Get-Location).Path)\$assetsFolder" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "4. Or open: download-photo.html for detailed instructions" -ForegroundColor White
    }
    
} else {
    Write-Host "❌ Assets folder not found!" -ForegroundColor Red
    Write-Host "Current directory: $(Get-Location)" -ForegroundColor Yellow
    Write-Host "Make sure you're in the project root!" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
