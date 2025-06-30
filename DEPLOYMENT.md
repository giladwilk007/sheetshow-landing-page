# Deployment Guide

## ✅ Ready for Deployment!

Your SheetShow landing page is now configured correctly for all deployment platforms:

- **✅ Vercel**: Works out of the box with `npm run build`
- **✅ Static hosting**: Use `npm run build:static` for Netlify, GitHub Pages, etc.
- **✅ No configuration conflicts**: Clean setup that adapts to your deployment target

---

## Deploy to Vercel (Recommended)

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SheetShow landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/sheetshow-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"
   - No additional configuration needed!

3. **Automatic deployments:**
   - Every push to main branch will trigger automatic deployment
   - Preview deployments for pull requests

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Other Deployment Options

### Netlify

1. **Build for static hosting:**
   ```bash
   npm run build:static
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `out` folder to [netlify.com/drop](https://netlify.com/drop)
   - Or connect your GitHub repository to Netlify with build command: `npm run build:static`

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "deploy": "gh-pages -d out"
   ```

3. **Deploy:**
   ```bash
   npm run build:static
   npm run deploy
   ```

### Static File Hosting

The `out` folder contains all static files and can be deployed to any static hosting service:

- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Firebase Hosting

## Environment Variables

If you need to add environment variables:

1. **Create `.env.local`:**
   ```
   NEXT_PUBLIC_CHROME_STORE_URL=https://chrome.google.com/webstore/detail/your-extension-id
   ```

2. **Use in your code:**
   ```javascript
   const chromeStoreUrl = process.env.NEXT_PUBLIC_CHROME_STORE_URL
   ```

3. **Add to Vercel:**
   - Go to your project settings in Vercel
   - Add environment variables in the "Environment Variables" section

## Custom Domain

### On Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

## Performance Optimization

The landing page is already optimized with:
- ✅ Static generation (SSG)
- ✅ Optimized images
- ✅ Minified CSS/JS
- ✅ Font optimization
- ✅ SEO meta tags

## Monitoring

Consider adding analytics:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

## SSL Certificate

All modern hosting platforms provide automatic SSL certificates:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic  
- ✅ GitHub Pages: Automatic for custom domains

Your landing page will be available at `https://your-domain.com`

## Troubleshooting

### Vercel Deployment Errors

**Error: "routes-manifest.json couldn't be found"** ✅ **FIXED**
- ✅ Removed conflicting `vercel.json` file 
- ✅ Cleaned up Next.js configuration
- ✅ The project now works correctly with Vercel out of the box

**Build Command for Different Platforms:**
- **Vercel**: Use `npm run build` or `npm run build:vercel`
- **Static Hosting** (Netlify, GitHub Pages, etc.): Use `npm run build:static`

### Environment Variables Not Working

Make sure environment variables are prefixed with `NEXT_PUBLIC_` for client-side access:
```bash
# ✅ Correct
NEXT_PUBLIC_CHROME_STORE_URL=...

# ❌ Won't work in browser
CHROME_STORE_URL=...
```

### Build Fails

1. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run build
   ```

2. **Check Node.js version:**
   ```bash
   node --version  # Should be 18+
   ```

3. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ``` 