# 🚀 Deploy Digital Laboratory to Netlify

## Quick Deployment Guide

Your Digital Laboratory website is ready to deploy to Netlify for free hosting!

---

## 📋 Prerequisites

1. ✅ GitHub account (to push your code)
2. ✅ Netlify account (free - sign up at netlify.com)
3. ✅ Your project code ready

---

## 🎯 Method 1: Deploy via GitHub (Recommended)

### **Step 1: Push Code to GitHub**

1. Open your terminal in the project folder:
   ```powershell
   cd "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"
   ```

2. Initialize Git (if not already done):
   ```powershell
   git init
   git add .
   git commit -m "Initial commit - Digital Laboratory Data Science"
   ```

3. Create a new repository on GitHub:
   - Go to: https://github.com/new
   - Repository name: `digital-laboratory-datascience`
   - Make it Public or Private
   - Click "Create repository"

4. Push your code:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/digital-laboratory-datascience.git
   git branch -M main
   git push -u origin main
   ```

### **Step 2: Deploy on Netlify**

1. **Go to Netlify:**
   - Visit: https://app.netlify.com/
   - Click "Sign up" (use GitHub account for easier integration)

2. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your repository: `digital-laboratory-datascience`

3. **Configure Build Settings:**
   Netlify should auto-detect these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** (leave empty)

   If not auto-detected, enter them manually.

4. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes for build to complete
   - Your site will be live! 🎉

5. **Custom Domain (Optional):**
   - Click "Domain settings"
   - Click "Add custom domain" or use the free Netlify subdomain
   - Your site URL: `your-site-name.netlify.app`

---

## 🎯 Method 2: Deploy via Netlify CLI

### **Step 1: Install Netlify CLI**

```powershell
npm install -g netlify-cli
```

### **Step 2: Login to Netlify**

```powershell
netlify login
```

This will open your browser to authenticate.

### **Step 3: Build Your Project**

```powershell
cd "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"
npm run build
```

### **Step 4: Deploy**

**For first deployment:**
```powershell
netlify deploy
```

Follow the prompts:
- Create & configure a new site? **Yes**
- Team: Choose your team
- Site name: `digital-laboratory-datascience` (or leave blank for random)
- Publish directory: `dist`

**For production deployment:**
```powershell
netlify deploy --prod
```

---

## 🎯 Method 3: Drag & Drop (Simplest)

### **Step 1: Build Your Project**

```powershell
cd "C:\Users\pydan\OneDrive\Desktop\datascience_digital lab\digital-laboratory"
npm run build
```

This creates a `dist` folder with your built website.

### **Step 2: Deploy on Netlify**

1. Go to: https://app.netlify.com/drop
2. Drag the entire `dist` folder onto the page
3. Wait for upload to complete
4. Your site is live! 🎉

**Note:** This method requires manual re-deployment for updates.

---

## ✅ What's Configured

Your project now includes:

### **`netlify.toml` file:**
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing (redirects all routes to index.html)
- Security headers
- Asset caching

### **Build Settings:**
- Node.js version: 18
- Automatic deployments on push (if using GitHub)
- Preview deployments for pull requests

---

## 🌐 After Deployment

Once deployed, you'll get:

1. **Live URL:**
   ```
   https://your-site-name.netlify.app
   ```

2. **Features:**
   - ✅ HTTPS (automatic SSL certificate)
   - ✅ Global CDN (fast loading worldwide)
   - ✅ Continuous deployment (auto-updates on Git push)
   - ✅ Preview deployments (for testing)
   - ✅ Free hosting

3. **Access Your Site:**
   - Share the URL with anyone
   - Works on any device
   - Available 24/7

---

## 🔄 Update Your Site

### **Via GitHub (Automatic):**
```powershell
# Make changes to your code
git add .
git commit -m "Update experiments"
git push
```
Netlify automatically rebuilds and deploys! ✨

### **Via CLI:**
```powershell
npm run build
netlify deploy --prod
```

### **Via Drag & Drop:**
```powershell
npm run build
# Then drag the new 'dist' folder to Netlify
```

---

## 🎨 Custom Domain (Optional)

### **Option 1: Use Netlify Subdomain (Free)**
- Your site: `digital-lab-datascience.netlify.app`
- Go to: Site settings → Domain management → Change site name

### **Option 2: Custom Domain (If you own one)**
1. Go to: Domain settings → Add custom domain
2. Enter your domain: `yourdomain.com`
3. Update DNS settings as instructed
4. Wait for DNS propagation (24-48 hours)
5. SSL certificate auto-generated

---

## 🛠️ Troubleshooting

### **Build Failed?**

Check these:
1. All dependencies installed: `npm install`
2. Build works locally: `npm run build`
3. Node version: Should be 14+ (18 recommended)
4. Check build logs in Netlify dashboard

### **404 Errors on Routes?**

The `netlify.toml` file handles this with SPA redirects.
Make sure it's in the root of your project.

### **Assets Not Loading?**

Check that:
- Images are in `public/assets/` folder
- Build command completed successfully
- Publish directory is set to `dist`

### **Environment Variables Needed?**

Add them in Netlify:
1. Site settings → Environment variables
2. Add key-value pairs
3. Redeploy

---

## 📊 Deployment Checklist

Before deploying:
- [x] Code is complete and tested
- [x] `npm run build` works locally
- [x] All images in `public/assets/` folder
- [x] MBU logo file exists
- [x] `netlify.toml` file created
- [x] Copyright disclaimer added
- [x] All experiments have working videos
- [x] Responsive design tested
- [x] No console errors

After deploying:
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Logo displays
- [ ] Videos play
- [ ] Search works
- [ ] Mobile responsive
- [ ] Share URL with faculty/friends

---

## 🎉 Your Site Will Be Live At:

```
https://your-chosen-name.netlify.app
```

**Example URLs:**
- `https://digital-lab-datascience.netlify.app`
- `https://mbu-datascience-lab.netlify.app`
- `https://nagateja-datascience.netlify.app`

---

## 💡 Tips

1. **Choose a good site name** - It's your URL!
2. **Test before sharing** - Check all pages work
3. **Monitor deployments** - Check Netlify dashboard
4. **Use GitHub** - Easiest for updates
5. **Free plan is enough** - Plenty for educational projects

---

## 📱 Share Your Site

Once deployed, you can:
- ✅ Access from any device
- ✅ Share with classmates
- ✅ Submit to faculty
- ✅ Add to resume/portfolio
- ✅ Demo in presentations

---

## 🚀 Ready to Deploy!

Choose your method and deploy your Digital Laboratory website now!

**Questions?** Refer to Netlify docs: https://docs.netlify.com/

---

*Deployment time: ~2-3 minutes*  
*Cost: Free forever (Netlify Free Tier)*  
*Support: 24/7 via Netlify Community*

**Good luck with your deployment!** 🎓✨
