# 🏫 How to Add the Actual MBU Logo

## Current Status
The header is showing a temporary SVG logo. To add the **actual Mohan Babu University logo**, follow these simple steps:

---

## 📥 **Step-by-Step Instructions**

### **Step 1: Save the Logo**
1. Right-click on the MBU logo image you have
2. Select "Save image as..."
3. Save it with the exact name: **`mbu-logo.png`**
   - Make sure it's PNG format
   - The name must be exactly: `mbu-logo.png` (all lowercase)

### **Step 2: Copy to Project Folder**
Navigate to this folder on your computer:
```
C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory\public\assets\
```

Or follow these steps:
1. Open File Explorer
2. Go to your Desktop
3. Open folder: `datascience_digital lab`
4. Open folder: `digital-laboratory`
5. Open folder: `public`
6. Open folder: `assets`
7. **Paste the `mbu-logo.png` file here**

### **Step 3: Refresh the Website**
1. Go to your browser (http://localhost:5173/)
2. Press **Ctrl + Shift + R** (hard refresh)
   - Or press **Ctrl + F5**
3. The actual MBU logo will now appear!

---

## 📁 **Correct File Location**

Your logo file should be placed here:
```
digital-laboratory/
  └── public/
      └── assets/
          └── mbu-logo.png  ← Place your logo here!
```

**Full Path:**
```
C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory\public\assets\mbu-logo.png
```

---

## ✅ **Verification**

After adding the logo:
1. ✅ Open http://localhost:5173/
2. ✅ Check the header - MBU logo should appear
3. ✅ Logo should be on every page
4. ✅ Logo should look clear and professional

---

## 📝 **Logo Requirements**

**Recommended:**
- Format: PNG (with transparent background)
- Size: 200x200 pixels or larger
- Quality: High resolution
- Background: Transparent or yellow

**Accepted formats:**
- PNG (best)
- JPG/JPEG
- SVG (best for scaling)

---

## 🔄 **Alternative Method**

If you're comfortable with PowerShell:

1. Open PowerShell in the project directory
2. Run this command (replace with your logo path):
```powershell
Copy-Item "C:\Path\To\Your\mbu-logo.png" -Destination "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory\public\assets\mbu-logo.png"
```

---

## ❓ **Troubleshooting**

**Logo not showing?**
1. Check the filename is exactly: `mbu-logo.png`
2. Check it's in the correct folder: `public/assets/`
3. Hard refresh browser: Ctrl + Shift + R
4. Clear browser cache if needed

**Logo looks blurry?**
- Use a higher resolution image
- Minimum recommended: 200x200 pixels
- PNG format for best quality

**Logo has wrong size?**
- The code automatically sizes it to 64px height
- Aspect ratio is maintained automatically
- No need to resize the image

---

## 💡 **Current Temporary Logo**

Right now, the website is using a temporary SVG logo that looks like the MBU logo but is not the actual official logo.

**To replace it:**
Just add the `mbu-logo.png` file as described above, and it will automatically replace the temporary SVG!

---

## 🎯 **Quick Summary**

1. **Save** your MBU logo as `mbu-logo.png`
2. **Copy** to: `digital-laboratory/public/assets/`
3. **Refresh** browser with Ctrl + Shift + R
4. **Done!** ✅

---

Need help? Check that:
- ✅ File name is correct: `mbu-logo.png`
- ✅ File is in correct location: `public/assets/`
- ✅ Browser is refreshed: Ctrl + Shift + R

The actual logo will appear immediately after these steps!
