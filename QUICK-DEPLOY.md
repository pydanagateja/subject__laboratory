# ⚡ Quick Netlify Deployment Commands

## Fast Track - Copy & Paste These Commands

### 1️⃣ Build Test (Run First!)
```powershell
npm run build
```

### 2️⃣ Git Setup
```powershell
git init
git add .
git commit -m "Initial commit - Subject Laboratory"
```

### 3️⃣ Push to GitHub
```powershell
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/subject-laboratory.git
git branch -M main
git push -u origin main
```

### 4️⃣ Go to Netlify
1. Visit: https://app.netlify.com
2. Click: **Add new site** → **Import from GitHub**
3. Select your repository
4. Click: **Deploy site**

### ✅ Done! Your site will be live at: `https://your-site-name.netlify.app`

---

## 🔄 Update Your Live Site (After First Deployment)
```powershell
git add .
git commit -m "Your update description"
git push
```
Netlify auto-deploys! ⚡

---

## 📖 Need Detailed Instructions?
See **NETLIFY-DEPLOYMENT-GUIDE.md** for complete step-by-step guide.
