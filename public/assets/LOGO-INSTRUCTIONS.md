# College Logo Instructions

## How to Add the MBU Logo

1. **Download the Logo:**
   - Save the Mohan Babu University logo image
   - Recommended format: PNG with transparent background
   - Recommended size: At least 200x200 pixels for clarity

2. **Add to Project:**
   - Place the logo file in this directory: `public/assets/`
   - Rename it to: `mbu-logo.png`
   - Full path should be: `public/assets/mbu-logo.png`

3. **The logo will automatically appear in:**
   - Header (top navigation bar)
   - The logo is configured to display at 56px height (h-14)
   - It maintains aspect ratio automatically

## Alternative Logo Names

If you prefer a different filename, update the image source in:
- `src/components/Header.jsx` (line ~18)

Change from:
```jsx
src="/assets/mbu-logo.png"
```

To:
```jsx
src="/assets/your-logo-name.png"
```

## Supported Formats
- PNG (recommended for transparency)
- JPG/JPEG
- SVG (best for scaling)
- WebP

## Current Status
- ✅ Logo integration code added
- ✅ Fallback "DL" placeholder configured
- ⏳ Awaiting actual MBU logo file

## Notes
- If the logo file is not found, a blue gradient "DL" placeholder will display
- The logo is responsive and adjusts on mobile devices
- Logo has proper alt text for accessibility
