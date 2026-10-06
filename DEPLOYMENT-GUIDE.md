# 🚀 Deployment Guide - Digital Laboratory

## Quick Deploy Options

Your Digital Laboratory website can be deployed for **FREE** on:
1. ✅ **Vercel** (Recommended - Fastest & Easiest)
2. ✅ **Netlify** (Also Great)
3. ✅ **GitHub Pages**

---

## 🌟 Option 1: Deploy to Vercel (RECOMMENDED)

### **Why Vercel?**
- ✅ **FREE** forever
- ✅ **Instant deployment** (30 seconds)
- ✅ **Automatic HTTPS**
- ✅ **Global CDN** (Fast everywhere)
- ✅ **Custom domain** support
- ✅ **Auto-updates** when you push changes

### **Steps to Deploy:**

#### **Method A: Using Vercel Website (Easiest)**

1. **Go to Vercel:**
   ```
   https://vercel.com
   ```

2. **Sign Up / Login:**
   - Click "Sign Up"
   - Use GitHub, GitLab, or Email

3. **Import Project:**
   - Click "Add New" → "Project"
   - Click "Import Git Repository"
   - If not connected, connect your GitHub account

4. **Push to GitHub First:**
   ```powershell
   # In your project folder
   cd "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Digital Laboratory"
   
   # Create repo on GitHub (go to github.com/new)
   # Then link and push:
   git remote add origin https://github.com/YOUR_USERNAME/digital-laboratory.git
   git branch -M main
   git push -u origin main
   ```

5. **Import to Vercel:**
   - Select your repository
   - Click "Import"
   - Vercel auto-detects Vite settings
   - Click "Deploy"

6. **Done! 🎉**
   - Your site is live in 30 seconds
   - You'll get a URL like: `your-project.vercel.app`

---

#### **Method B: Using Vercel CLI (Advanced)**

1. **Install Vercel CLI:**
   ```powershell
   npm install -g vercel
   ```

2. **Login:**
   ```powershell
   vercel login
   ```

3. **Deploy:**
   ```powershell
   cd "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"
   vercel
   ```

4. **Follow prompts:**
   - Link to existing project? **N**
   - Project name? **digital-laboratory**
   - Directory? **./** (press Enter)
   - Want to override settings? **N**

5. **Done!** Get your live URL

---

## 🎨 Option 2: Deploy to Netlify

### **Steps:**

1. **Go to Netlify:**
   ```
   https://netlify.com
   ```

2. **Sign Up / Login**

3. **Deploy Methods:**

   **A. Drag & Drop (Super Easy):**
   - Build your project first:
     ```powershell
     npm run build
     ```
   - Find the `dist` folder
   - Drag `dist` folder to Netlify's drop zone
   - Done! Instant live site

   **B. Connect GitHub:**
   - Click "Add new site" → "Import existing project"
   - Connect GitHub
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

---

## 📦 Option 3: GitHub Pages

### **Steps:**

1. **Install gh-pages:**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/digital-laboratory",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```powershell
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to repo settings
   - Pages → Source → `gh-pages` branch
   - Save

---

## 🔧 Before Deploying - Checklist

Run these commands to make sure everything works:

```powershell
# Navigate to project
cd "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"

# Install dependencies (if needed)
npm install

# Build the project
npm run build

# Preview the build locally
npm run preview
```

If build is successful, you'll see a `dist` folder created.

---

## ⚙️ Build Settings (For Vercel/Netlify)

If asked for configuration:

| Setting | Value |
|---------|-------|
| **Framework** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node Version** | 18.x or 20.x |

---

## 🌐 After Deployment

### **Your Site Will Be Live At:**

**Vercel:**
```
https://your-project-name.vercel.app
```

**Netlify:**
```
https://your-project-name.netlify.app
```

**GitHub Pages:**
```
https://YOUR_USERNAME.github.io/digital-laboratory
```

---

## 🎯 Custom Domain (Optional)

### **Want your own domain like `digitallab.com`?**

1. **Buy a domain:**
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

2. **Connect to Vercel/Netlify:**
   - Go to project settings
   - Add custom domain
   - Update DNS records (they'll guide you)

---

## 🔄 Auto-Deploy (Updates)

Once connected to GitHub:

1. **Make changes** to your code
2. **Commit and push:**
   ```powershell
   git add .
   git commit -m "Update experiments"
   git push
   ```
3. **Auto-deploys!** Vercel/Netlify rebuild automatically

---

## 🐛 Troubleshooting

### **Build Fails?**

1. **Check node version:**
   ```powershell
   node --version
   ```
   Should be 16.x or higher

2. **Clear and reinstall:**
   ```powershell
   rm -rf node_modules
   npm install
   npm run build
   ```

3. **Check for errors in console**

### **Routes Not Working?**

Add this file: `public/_redirects`
```
/*    /index.html   200
```

Or for Vercel, add: `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## ✅ Copyright Protection

Your disclaimer page protects you! After deploying:

1. ✅ Your disclaimer is visible at `/disclaimer`
2. ✅ Footer shows "Educational Project"
3. ✅ Videos are embedded (not hosted)
4. ✅ You're following Fair Use guidelines

---

## 🎉 Recommended: Deploy to Vercel

**It's the fastest and easiest option!**

### **Quick Steps:**
1. Push code to GitHub
2. Import to Vercel
3. Click Deploy
4. **Done!** 🚀

Your Digital Laboratory will be live and accessible from any device!

---

## 📞 Need Help?

If you face any issues:
1. Check the build works locally: `npm run build`
2. Read error messages carefully
3. Check Vercel/Netlify deployment logs
4. Verify all files are committed to Git

---

## 🔗 Useful Links

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

*Your Digital Laboratory is ready to go live!* 🎓🚀
