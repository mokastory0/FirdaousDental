# Pricing Pages WhatsApp Sharing - Specific Fix

## Problem
- ✅ `/services/crowns` - Works (shows preview)
- ✅ `/services/whitening` - Works (shows preview)
- ❌ `/services/crowns/pricing` - Doesn't work (only link)
- ❌ `/services/whitening/pricing` - Doesn't work (only link)

## Root Cause
All URLs in a React SPA serve the **same `index.html`** file. WhatsApp can't distinguish between:
- `https://couronnedentaire.ma/fr/services/crowns`
- `https://couronnedentaire.ma/fr/services/crowns/pricing`

Both return identical HTML with the same default meta tags.

---

## Solutions

### Solution 1: Netlify/Vercel Edge Functions (Recommended) ⭐⭐⭐

**If you're using Netlify or Vercel**, you can inject meta tags at the edge.

#### Netlify Edge Function

Create `netlify/edge-functions/og-tags.ts`:

```typescript
import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Detect social media crawlers
  const userAgent = request.headers.get("user-agent") || "";
  const isCrawler = /facebookexternalhit|WhatsApp|Twitterbot|LinkedInBot/i.test(userAgent);
  
  if (!isCrawler) {
    // Regular users get normal response
    return context.next();
  }
  
  // Get the original HTML
  const response = await context.next();
  let html = await response.text();
  
  // Inject meta tags based on URL
  if (path.includes("/services/crowns/pricing")) {
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/,
      '<meta property="og:title" content="Prix Couronne Dentaire Casablanca | 3000-5000 DH"'
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*"/,
      '<meta property="og:description" content="Prix couronne dentaire: 3000-5000 DH. Céramique, zircone, céramo-métallique. Devis gratuit."'
    );
    html = html.replace(
      /<meta property="og:image" content="[^"]*"/,
      '<meta property="og:image" content="https://couronnedentaire.ma/og-crown.jpg"'
    );
  } else if (path.includes("/services/whitening/pricing")) {
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/,
      '<meta property="og:title" content="Prix Blanchiment Dentaire Casablanca | 3000-4500 DH"'
    );
    html = html.replace(
      /<meta property="og:description" content="[^"]*"/,
      '<meta property="og:description" content="Prix blanchiment dentaire: 3000-4500 DH. LED, laser, combiné. Résultats immédiats."'
    );
    html = html.replace(
      /<meta property="og:image" content="[^"]*"/,
      '<meta property="og:image" content="https://couronnedentaire.ma/og-whitening.jpg"'
    );
  }
  
  return new Response(html, {
    headers: response.headers,
  });
};

export const config = { path: "/*" };
```

**Deploy**:
```bash
netlify deploy
```

---

### Solution 2: Cloudflare Workers ⭐⭐⭐

**If you're using Cloudflare**, create a Worker to inject meta tags.

#### Cloudflare Worker

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  const userAgent = request.headers.get('user-agent') || '';
  
  // Detect social media crawlers
  const isCrawler = /facebookexternalhit|WhatsApp|Twitterbot|LinkedInBot/i.test(userAgent);
  
  if (!isCrawler) {
    return fetch(request);
  }
  
  // Fetch original response
  const response = await fetch(request);
  let html = await response.text();
  
  // Inject meta tags based on URL
  if (path.includes('/services/crowns/pricing')) {
    html = injectMetaTags(html, {
      title: 'Prix Couronne Dentaire Casablanca | 3000-5000 DH',
      description: 'Prix couronne dentaire: 3000-5000 DH. Céramique, zircone, céramo-métallique. Devis gratuit.',
      image: 'https://couronnedentaire.ma/og-crown.jpg'
    });
  } else if (path.includes('/services/whitening/pricing')) {
    html = injectMetaTags(html, {
      title: 'Prix Blanchiment Dentaire Casablanca | 3000-4500 DH',
      description: 'Prix blanchiment dentaire: 3000-4500 DH. LED, laser, combiné. Résultats immédiats.',
      image: 'https://couronnedentaire.ma/og-whitening.jpg'
    });
  }
  
  return new Response(html, {
    headers: response.headers
  });
}

function injectMetaTags(html, { title, description, image }) {
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${title}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${description}"`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${image}"`
  );
  return html;
}
```

---

### Solution 3: Server-Side Detection (Express/Node) ⭐⭐

**If you have a Node.js server**, add middleware to detect crawlers.

#### Express Middleware

```javascript
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware to inject meta tags for crawlers
app.use((req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  const isCrawler = /facebookexternalhit|WhatsApp|Twitterbot|LinkedInBot/i.test(userAgent);
  
  if (!isCrawler) {
    return next();
  }
  
  // Read index.html
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Inject meta tags based on URL
  if (req.path.includes('/services/crowns/pricing')) {
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/,
      '<meta property="og:title" content="Prix Couronne Dentaire Casablanca | 3000-5000 DH"'
    );
    html = html.replace(
      /<meta property="og:image" content="[^"]*"/,
      '<meta property="og:image" content="https://couronnedentaire.ma/og-crown.jpg"'
    );
  } else if (req.path.includes('/services/whitening/pricing')) {
    html = html.replace(
      /<meta property="og:title" content="[^"]*"/,
      '<meta property="og:title" content="Prix Blanchiment Dentaire Casablanca | 3000-4500 DH"'
    );
    html = html.replace(
      /<meta property="og:image" content="[^"]*"/,
      '<meta property="og:image" content="https://couronnedentaire.ma/og-whitening.jpg"'
    );
  }
  
  res.send(html);
});

// Serve static files
app.use(express.static('dist'));

app.listen(3000);
```

---

### Solution 4: Prerender.io Service ⭐⭐⭐⭐

**Easiest but costs money** ($200/month)

1. Sign up at https://prerender.io
2. Add middleware to your server
3. Prerender detects crawlers and serves pre-rendered HTML
4. Works automatically for all pages

**Setup**:
```bash
npm install prerender-node
```

```javascript
app.use(require('prerender-node').set('prerenderToken', 'YOUR_TOKEN'));
```

---

### Solution 5: Quick Hack - Separate HTML Files ⭐

**Create separate HTML files** for pricing pages (not recommended but works).

#### Create `public/pricing-crown.html`
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Prix Couronne Dentaire Casablanca | 3000-5000 DH</title>
  <meta property="og:title" content="Prix Couronne Dentaire Casablanca | 3000-5000 DH">
  <meta property="og:description" content="Prix couronne dentaire: 3000-5000 DH. Céramique, zircone, céramo-métallique.">
  <meta property="og:image" content="https://couronnedentaire.ma/og-crown.jpg">
  <meta http-equiv="refresh" content="0;url=/fr/services/crowns/pricing">
</head>
<body>Redirecting...</body>
</html>
```

Then share: `https://couronnedentaire.ma/pricing-crown.html`

**Pros**: Works immediately  
**Cons**: Ugly URLs, not maintainable

---

## Recommended Approach

### Based on Your Hosting

| Hosting | Solution | Difficulty | Cost |
|---------|----------|------------|------|
| **Netlify** | Edge Functions | Easy | Free |
| **Vercel** | Edge Functions | Easy | Free |
| **Cloudflare** | Workers | Easy | Free |
| **Custom Server** | Express Middleware | Medium | Free |
| **Static Hosting** | Prerender.io | Easy | $200/mo |
| **Any** | Next.js Migration | Hard | Free |

---

## Implementation Steps (Netlify Example)

### Step 1: Create Edge Function

Create `netlify/edge-functions/og-tags.ts` with the code above.

### Step 2: Configure Netlify

Create `netlify.toml`:
```toml
[[edge_functions]]
  function = "og-tags"
  path = "/*"
```

### Step 3: Deploy
```bash
netlify deploy --prod
```

### Step 4: Test
1. Go to Facebook Sharing Debugger
2. Enter pricing page URL
3. Click "Scrape Again"
4. Should show correct meta tags

---

## Testing

### Verify It Works

**1. Check User-Agent Detection**:
```bash
curl -A "facebookexternalhit/1.1" https://couronnedentaire.ma/fr/services/crowns/pricing
```

Should show custom meta tags in HTML.

**2. Facebook Sharing Debugger**:
- URL: https://developers.facebook.com/tools/debug/
- Enter: `https://couronnedentaire.ma/fr/services/crowns/pricing`
- Should show: "Prix Couronne Dentaire Casablanca | 3000-5000 DH"

**3. WhatsApp**:
- Share pricing page link
- Wait 10 seconds
- Should show custom preview

---

## Comparison

| Solution | Setup Time | Maintenance | Page-Specific | Cost |
|----------|-----------|-------------|---------------|------|
| **Current** | Done | None | ❌ | Free |
| **Edge Functions** | 1 hour | Low | ✅ | Free |
| **Prerender.io** | 30 min | None | ✅ | $200/mo |
| **Next.js** | 1-2 weeks | Medium | ✅ | Free |

---

## What I Recommend

### Immediate (If using Netlify/Vercel/Cloudflare)
✅ **Implement Edge Functions** (1 hour setup)
- Free
- Works perfectly
- Easy to maintain
- Page-specific previews

### If Not Using Edge Platform
✅ **Use Prerender.io** ($200/month)
- Easiest solution
- Works immediately
- No code changes
- Professional

### Long Term
✅ **Migrate to Next.js** (Q1 2026)
- Proper SSR
- Best SEO
- No workarounds needed
- Industry standard

---

## Current Status

**Working**:
- ✅ `/services/crowns` - Shows preview
- ✅ `/services/whitening` - Shows preview

**Not Working**:
- ❌ `/services/crowns/pricing` - Only link
- ❌ `/services/whitening/pricing` - Only link

**Why**: All URLs serve same HTML, WhatsApp can't distinguish

**Fix**: Need server-side meta tag injection

---

## Next Steps

1. **Identify your hosting platform**
   - Netlify? → Use Edge Functions
   - Vercel? → Use Edge Functions
   - Cloudflare? → Use Workers
   - Other? → Consider Prerender.io

2. **Implement solution** (1 hour)

3. **Test with Facebook Debugger**

4. **Clear WhatsApp cache**

5. **Verify on WhatsApp**

---

*Document created: October 20, 2025*  
*Status: Solution documented, awaiting implementation*  
*Recommended: Edge Functions (if available) or Prerender.io*
