# GitHub Pages Deployment Guide

## 🚀 Deploy NewsHub to GitHub Pages

### **Quick Deployment Steps:**

1. **Build for GitHub Pages:**
   ```bash
   npm run build:github
   ```
   This builds with the correct base href for GitHub Pages.

2. **Deploy the dist folder:**
   - Copy the contents of `dist/newshub/` folder
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings

### **Alternative Method:**

1. **Build normally:**
   ```bash
   ng build
   ```

2. **The build already includes the correct base href** (`/newshub/`) configured in:
   - `angular.json` (baseHref: "/newshub/")
   - `src/index.html` (base href="/newshub/")

### **GitHub Pages Configuration:**

- **Source**: Deploy from a branch
- **Branch**: `main` (or your default branch)
- **Folder**: `/` (root) or `/docs` (if using docs folder)

### **URL Structure:**
- **Repository**: `https://github.com/rama7993/newshub`
- **Live Site**: `https://rama7993.github.io/newshub/`

### **Troubleshooting:**

If you still get 404 errors:
1. Make sure the base href is `/newshub/`
2. Ensure all files are in the correct directory structure
3. Check that GitHub Pages is enabled and pointing to the right branch/folder

### **Files to Deploy:**
Deploy the contents of `dist/newshub/` folder to your repository root or docs folder.

---
**Note**: The application is now configured with the correct base href for GitHub Pages deployment!
