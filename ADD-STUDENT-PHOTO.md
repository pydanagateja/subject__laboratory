# 📸 How to Add Your Photo to Student ID Card

## Quick Steps

### Step 1: Prepare Your Photo

1. **Choose a good quality photo** (passport size or ID photo works best)
2. **Recommended specs**:
   - Format: JPG, JPEG, or PNG
   - Size: Under 500KB
   - Dimensions: Square ratio (1:1) or portrait (3:4)
   - Background: Plain/professional background preferred

### Step 2: Add Photo to Project

1. **Save your photo** with the name: `student-photo.jpg`
2. **Place it in**: `public/assets/` folder

**Full path**: `digital-laboratory/public/assets/student-photo.jpg`

### Step 3: Test

1. Run your website:
   ```powershell
   npm run dev
   ```

2. Visit the home page: `http://localhost:5173`

3. Your photo should appear in the Student Profile card!

---

## Alternative: Use Different Photo Name

If you want to use a different filename:

1. Place your photo in `public/assets/` (e.g., `naga-teja.jpg`)

2. Open `src/components/StudentProfileCard.jsx`

3. Find this line (around line 11):
   ```javascript
   photoPath: "/assets/student-photo.jpg"
   ```

4. Change it to your filename:
   ```javascript
   photoPath: "/assets/naga-teja.jpg"
   ```

5. Save and reload

---

## Troubleshooting

### Photo Not Showing?

**Check these:**

1. ✅ Photo is in `public/assets/` folder
2. ✅ Filename matches exactly (including extension)
3. ✅ Path starts with `/assets/` (with forward slash)
4. ✅ Photo file size is reasonable (under 2MB)
5. ✅ File extension is .jpg, .jpeg, or .png

### Photo Looks Stretched or Cropped?

The photo will be displayed in a rounded square box. For best results:
- Use square photos (1:1 ratio)
- Or use portrait photos (3:4 ratio)
- Face should be centered

### Fallback Icon

If the photo fails to load, a user icon (👤) will display automatically.

---

## Photo Specifications

| Aspect | Recommendation |
|--------|---------------|
| Format | JPG, JPEG, PNG |
| Size | 200KB - 500KB |
| Dimensions | 400x400px to 800x800px |
| Ratio | 1:1 (square) preferred |
| Background | Plain or professional |
| Quality | High resolution, well-lit |

---

## Example Setup

### Your Current Setup:

```
digital-laboratory/
├── public/
│   └── assets/
│       ├── mbu-logo.png ✅
│       └── student-photo.jpg ← Add your photo here!
└── src/
    └── components/
        └── StudentProfileCard.jsx (Already configured!)
```

---

## Where Your Photo Appears

Your photo will appear in:
- **Home page** - Student Profile Card section
- **About page** - Student information (if applicable)

---

## Current Configuration

✅ **Component updated**: `StudentProfileCard.jsx`  
✅ **Photo path configured**: `/assets/student-photo.jpg`  
✅ **Fallback icon**: User icon (if photo missing)  
✅ **Responsive design**: Looks good on all devices

---

## Quick Checklist

- [ ] Photo prepared (square/portrait, good quality)
- [ ] Photo renamed to `student-photo.jpg`
- [ ] Photo placed in `public/assets/` folder
- [ ] Website running (`npm run dev`)
- [ ] Photo appears correctly on home page
- [ ] Looks good on mobile and desktop

---

**That's it! Your photo is now part of your Student ID card!** 📸✨

**Student**: P. Naga Teja  
**Roll**: 24102A030102  
**Course**: Data Science (22DS102006)
