# NewsHub - Simple News Application

A clean, modern Angular news application powered by GNews API.

## 🚀 Features

- **Top Headlines** - Latest news from India
- **Technology News** - Tech updates and innovations
- **Sports News** - Sports coverage and updates
- **Business News** - Business and financial news
- **Health News** - Health and medical news
- **Advanced Search** - Search with filters by category and country
- **Responsive Design** - Works on all devices
- **Modern UI** - Clean, professional interface

## 🛠️ Quick Setup

### 1. Get GNews API Key (Free)
- Visit: https://gnews.io/
- Sign up for free account
- Get your API key (100 free requests/day)

### 2. Configure API Key

Update `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  gnewsApiKey: 'YOUR_ACTUAL_GNEWS_API_KEY_HERE', // Replace this
  gnewsBaseUrl: 'https://gnews.io/api/v4',
  defaultCountry: 'in',
  defaultLanguage: 'en',
  pageSize: 20,
};
```

Update `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  gnewsApiKey: 'YOUR_ACTUAL_GNEWS_API_KEY_HERE', // Replace this
  gnewsBaseUrl: 'https://gnews.io/api/v4',
  defaultCountry: 'in',
  defaultLanguage: 'en',
  pageSize: 20,
};
```

### 3. Install and Run

```bash
cd "d:\Angular-Practise\news-api"
npm install
ng serve
```

Open: http://localhost:4200

## 📱 Available Routes

- `/` or `/home` - Top Headlines
- `/tech` - Technology News
- `/sports` - Sports News
- `/business` - Business News
- `/health` - Health News
- `/search` - Advanced Search

## 🔧 API Configuration

- **Single API**: GNews API only
- **Production Ready**: Works in both development and production
- **CORS Support**: No CORS issues
- **Reliable**: Stable API with good uptime

## 🚀 Deployment

```bash
ng build --prod
```

Deploy the `dist/` folder to any hosting platform (Vercel, Netlify, etc.).

## ✅ Ready to Use!

The application is now configured with a single, reliable API that works in both local development and production environments.

## 📊 API Limits

- **Free Tier**: 100 requests/day
- **Paid Plans**: Available for higher limits
- **No CORS Issues**: Works in production

## 🎨 Features

- **Modern Card Design**: Hover effects and smooth animations
- **Loading States**: Beautiful shimmer effects
- **Error Handling**: User-friendly error messages
- **Responsive**: Mobile-first design
- **Fast**: Optimized performance
- **Clean Code**: Well-structured TypeScript

---

**Note**: This application uses only GNews API for simplicity and reliability. No complex fallback mechanisms needed!