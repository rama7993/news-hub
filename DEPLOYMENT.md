# GitHub Pages Deployment Guide

## 🚀 Deploy NewsHub to GitHub Pages

### **CORS Issue Fixed! ✅**

The app now handles CORS issues properly:

- **Development**: Uses Angular proxy (`/api` → `https://gnews.io/api/v4`)
- **Production**: Uses CORS proxy service (`https://api.allorigins.win/raw?url=https://gnews.io/api/v4`)

### **Quick Deployment Steps:**

1. **Build for Production:**

   ```bash
   ng build --configuration production
   ```

   This builds with CORS proxy for production.

2. **Deploy using angular-cli-ghpages:**
   ```bash
   npm install -g angular-cli-ghpages
   npx angular-cli-ghpages --dir=dist/newshub
   ```

### **One-Command Deployment:**

```bash
npm run deploy
```

### **Manual Steps:**

1. **Build:**

   ```bash
   ng build --configuration production
   ```

2. **Deploy:**
   ```bash
   npx angular-cli-ghpages --dir=dist/newshub
   ```

### **Configuration Details:**

- **Development**: Uses proxy configuration (`proxy.conf.json`)
- **Production**: Uses CORS proxy service
- **Base href**: `/newshub/` (configured in `angular.json`)

### **URL Structure:**

- **Repository**: `https://github.com/rama7993/newshub`
- **Live Site**: `https://rama7993.github.io/newshub/`

### **CORS Solution:**

The app now works in production because:

1. **Development**: Angular proxy bypasses CORS
2. **Production**: CORS proxy service handles cross-origin requests
3. **No more CORS errors** in GitHub Pages! 🎉

---

**Note**: CORS issues are now resolved for both development and production!
