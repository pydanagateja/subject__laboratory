# 🚀 Netlify Deployment Guide - Subject Laboratory

Complete guide to deploy your Subject Laboratory website to Netlify.

## 📋 Prerequisites

1. ✅ Git installed on your computer
2. ✅ GitHub account (create one at https://github.com if you don't have)
3. ✅ Netlify account (sign up at https://netlify.com - it's FREE!)

---

## 🎯 Deployment Steps

### **Step 1: Build Your Project Locally (Test)**

First, let's make sure your project builds successfully:

```powershell
# Navigate to your project directory
cd "c:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"

# Install dependencies (if not already done)
npm install

# Build the project
npm run build
```

✅ **Success Check**: You should see a `dist` folder created with your built website files.

---

### **Step 2: Initialize Git Repository**

```powershell
# Initialize git (if not already initialized)
git init

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit - Subject Laboratory for Data Science"
```

---

### **Step 3: Create GitHub Repository**

1. Go to https://github.com
2. Click the **"+"** button (top right) → **New repository**
3. Name it: `subject-laboratory` or `data-science-lab`
4. Keep it **Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

---

### **Step 4: Push to GitHub**

GitHub will show you commands. Use these:

```powershell
# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/subject-laboratory.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

🔐 **Authentication**: GitHub may ask for credentials. Use a [Personal Access Token](https://github.com/settings/tokens) instead of password.

---

### **Step 5: Deploy to Netlify**

#### **Option A: Deploy from GitHub (Recommended - Auto-updates)**

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository: `subject-laboratory`
6. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

⏱️ **Wait 2-3 minutes** for the first deployment to complete.

#### **Option B: Manual Deploy (Drag & Drop)**

1. Build your project: `npm run build`
2. Go to https://app.netlify.com
3. Drag the `dist` folder to the deployment area
4. Wait for upload to complete

---

### **Step 6: Configure Your Site**

Once deployed, Netlify gives you a random URL like: `random-name-123456.netlify.app`

#### **Change Site Name** (Optional)

1. In Netlify dashboard → **Site settings**
2. Click **"Change site name"**
3. Enter: `subject-laboratory-ds` or `your-college-ds-lab`
4. Click **Save**

Your new URL: `https://subject-laboratory-ds.netlify.app`

#### **Add Custom Domain** (Optional - Advanced)

1. Site settings → **Domain management**
2. Click **"Add custom domain"**
3. Follow Netlify's instructions for your domain provider

---

## 📁 Important Files for Deployment

Your repository already has these configured:

✅ **netlify.toml** - Deployment configuration
✅ **package.json** - Build scripts
✅ **vite.config.js** - Build tool configuration
✅ **public/_redirects** - SPA routing support

---

## 🔧 Post-Deployment Tasks

### 1. **Add PDF Files to Your Repository**

Your modules expect PDF files at `public/pdfs/module-1.pdf` through `module-5.pdf`:

```powershell
# Create the pdfs folder if it doesn't exist
mkdir public\pdfs

# Add your PDF files to public\pdfs\
# Then commit and push
git add public/pdfs/*.pdf
git commit -m "Add module PDF files"
git push
```

Netlify will automatically redeploy with the new PDFs! 🎉

### 2. **Add Module Images** (Optional)

If you have custom images for modules:

```powershell
# Add images to public/images/
git add public/images/*.jpg
git commit -m "Add module images"
git push
```

---

## 🎬 Test Your Deployed Website

After deployment, test these features:

- ✅ Home page loads correctly
- ✅ Navigation works (Modules, Experiments, Tools)
- ✅ Module pages display correctly
- ✅ PDF viewer works (when PDFs are uploaded)
- ✅ Video players work for experiments
- ✅ Code blocks work with Execute functionality
- ✅ All links work
- ✅ Responsive design on mobile devices

---

## 🔄 Making Updates After Deployment

### For GitHub Deployment (Auto-deploy):

```powershell
# Make your changes to files
# Then:
git add .
git commit -m "Description of your changes"
git push
```

Netlify automatically rebuilds and deploys! ⚡

### For Manual Deployment:

```powershell
npm run build
# Then drag & drop the new 'dist' folder to Netlify
```

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Check build logs** in Netlify dashboard for errors:

- **Common fix**: Ensure all dependencies are in `package.json`
- **Node version**: Netlify uses Node 18 (configured in netlify.toml)

### 404 Errors on Page Refresh

✅ Already fixed! The `netlify.toml` file handles SPA routing.

### Images/PDFs Not Loading

- Ensure files are in the correct `public/` folder
- Push files to GitHub and redeploy
- Check file paths are lowercase and match exactly

### Videos Not Playing

- YouTube embeds work automatically
- Check video IDs in `experiments.json` are correct
- Ensure videos are not region-restricted

---

## 📊 Netlify Features You Get (FREE)

✅ **HTTPS** - Automatic SSL certificate
✅ **CDN** - Fast global delivery
✅ **Auto-deploy** - Push to GitHub → Auto update
✅ **Deploy previews** - Test before going live
✅ **Form handling** - Add contact forms easily
✅ **Analytics** - View site traffic (paid feature)

---

## 🎓 Your Website Info

**Course**: Data Science (Course ID: 22DS102006)
**Student**: P. Naga Teja (Roll: 24102A030102)
**Section**: 02
**Faculty**: Bosu Babu

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://answers.netlify.com
- **GitHub Docs**: https://docs.github.com

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Project builds successfully locally (`npm run build`)
- [ ] All files committed to Git
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Netlify account created
- [ ] Site deployed from GitHub
- [ ] Site name customized
- [ ] Website tested and working
- [ ] PDFs uploaded (if available)
- [ ] Share URL with faculty/friends! 🎉

---

**🚀 Ready to Deploy? Follow the steps above and your website will be live in minutes!**
