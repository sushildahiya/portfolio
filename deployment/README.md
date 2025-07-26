# 🚀 Portfolio Deployment Guide

This guide will help you deploy your portfolio to multiple platforms with automated scripts.

## 📋 Prerequisites

Before deploying, ensure you have:

- [x] **Node.js 16+** and **Yarn** installed
- [x] **Git** installed and configured
- [x] **GitHub account** for repository hosting
- [x] Account on your chosen deployment platform

## 🔧 Quick Setup

### 1. GitHub Repository Setup

Run the automated Git setup script:

```bash
# Make scripts executable (if not already)
chmod +x deployment/*.sh

# Setup Git and push to GitHub
./deployment/git-setup.sh --username YOUR_GITHUB_USERNAME
```

**What this script does:**
- ✅ Initializes Git repository
- ✅ Adds all files and commits
- ✅ Sets up GitHub remote
- ✅ Pushes code to GitHub

### 2. Deploy to Platform

Choose your preferred deployment platform:

```bash
# Deploy to Vercel (Recommended)
./deployment/deploy.sh --target vercel

# Deploy to Netlify
./deployment/deploy.sh --target netlify

# Deploy to GitHub Pages
./deployment/deploy.sh --target github-pages

# Deploy to all platforms
./deployment/deploy.sh --target all
```

## 📚 Platform-Specific Instructions

### 🌟 Vercel (Recommended)

**Automatic Deployment:**
```bash
./deployment/deploy.sh --target vercel
```

**Manual Setup:**
1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project" → Import your repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
4. Deploy!

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed

### 🌐 Netlify

**Automatic Deployment:**
```bash
./deployment/deploy.sh --target netlify
```

**Manual Setup:**
1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click "New site from Git" → Choose your repository
3. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `yarn build`
   - **Publish directory**: `frontend/build`
4. Deploy!

### 📄 GitHub Pages

**Automatic Deployment:**
```bash
./deployment/deploy.sh --target github-pages
```

**Manual Setup:**
1. In your GitHub repository, go to **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The workflow will automatically deploy on push to `main`

**Your site will be available at:**
`https://YOUR_USERNAME.github.io/portfolio`

## 🔐 Environment Variables

For platforms requiring environment variables:

### Vercel
Add in Vercel dashboard → Settings → Environment Variables:
```
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

### Netlify
Add in Netlify dashboard → Site settings → Environment variables:
```
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

### GitHub Pages
Add in repository → Settings → Secrets and variables → Actions:
```
REACT_APP_BACKEND_URL=https://your-api-domain.com
```

## 📁 Configuration Files

Your project includes these deployment configurations:

### `vercel.json`
- Configures Vercel deployment
- Handles frontend and backend routing
- Sets up environment variables

### `netlify.toml`
- Configures Netlify deployment
- Sets up redirects and headers
- Optimizes for performance

### `.github/workflows/deploy.yml`
- GitHub Actions workflow
- Automatically deploys on push to main
- Builds and publishes to GitHub Pages

## 🛠️ Manual Deployment

If you prefer manual deployment:

### Build the Application
```bash
cd frontend
yarn install
yarn build
```

### Deploy Build Folder
- **Vercel**: Drag `build` folder to [drop.vercel.app](https://drop.vercel.app)
- **Netlify**: Drag `build` folder to [netlify.com/drop](https://netlify.com/drop)
- **Any Static Host**: Upload `build` folder contents

## 🔄 Continuous Deployment

Once set up, your portfolio will automatically redeploy when you push to GitHub:

1. **Make changes** to your code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. **Automatic deployment** triggers on all connected platforms

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json yarn.lock
yarn install
yarn build
```

### Deployment Fails
- ✅ Check build logs for errors
- ✅ Verify environment variables
- ✅ Ensure all dependencies are in `package.json`
- ✅ Check deployment platform status

### GitHub Pages Not Working
- ✅ Enable GitHub Actions in repository settings
- ✅ Check Actions tab for workflow errors
- ✅ Ensure `gh-pages` dependency is installed

### Custom Domain Issues
- ✅ Check DNS settings (A records, CNAME)
- ✅ Wait for DNS propagation (up to 24 hours)
- ✅ Verify SSL certificate generation

## 📊 Performance Optimization

After deployment, consider:

- **✅ Enable Gzip/Brotli compression**
- **✅ Set up CDN**
- **✅ Configure caching headers**
- **✅ Monitor with Google Analytics**
- **✅ Test with Lighthouse**

## 🎯 Success Checklist

After deployment, verify:

- [ ] **Portfolio loads correctly**
- [ ] **All sections are responsive**
- [ ] **3D animations work properly**
- [ ] **Contact form functions**
- [ ] **Social links work**
- [ ] **Mobile experience is smooth**
- [ ] **Page load speed is good**

## 🔗 Useful Links

- **Project Repository**: `https://github.com/YOUR_USERNAME/portfolio`
- **Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Netlify Dashboard**: [app.netlify.com](https://app.netlify.com)
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/portfolio`

## 📞 Support

If you encounter any issues:

1. **Check the deployment logs** for specific error messages
2. **Review this guide** for common solutions
3. **Test locally first** with `yarn start`
4. **Check platform status pages** for outages

---

**🎉 Congratulations!** Your portfolio is now live and ready to showcase your work to the world!