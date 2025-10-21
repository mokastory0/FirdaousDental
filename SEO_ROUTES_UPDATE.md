# SEO Routes Update - French Names with Casablanca

## Route Mapping (English → French)

### Services Routes

| English | French (New) | All Languages |
|---------|--------------|---------------|
| `/services/whitening` | `/services/blanchiment-casablanca` | ✅ |
| `/services/whitening/pricing` | `/services/blanchiment-casablanca/prix` | ✅ |
| `/services/crowns` | `/services/couronne-casablanca` | ✅ |
| `/services/crowns/pricing` | `/services/couronne-casablanca/prix` | ✅ |
| `/services/implants` | `/services/implants-casablanca` | ✅ |
| `/services/dentures` | `/services/prothese-casablanca` | ✅ |
| `/services/orthodontics` | `/services/orthodontie-casablanca` | ✅ |
| `/services/gum` | `/services/parodontologie-casablanca` | ✅ |
| `/services/general` | `/services/soins-generaux-casablanca` | ✅ |
| `/services/pediatric` | `/services/pedodontie-casablanca` | ✅ |

### Main Routes

| English | French (New) |
|---------|--------------|
| `/services` | `/services` (keep) |
| `/about` | `/a-propos` |
| `/testimonials` | `/avis` |
| `/faq` | `/faq` (keep) |
| `/blog` | `/blog` (keep) |
| `/contact` | `/contact` (keep) |

---

## Implementation Notes

1. **All languages** (fr, ar, en) will use French URLs
2. **Casablanca** appended to all service pages
3. **SEO benefit**: French keywords + local targeting
4. **Backward compatibility**: Old routes redirect to new

---

## Files to Update

1. ✅ `client/src/App.tsx` - Route definitions
2. ✅ `client/src/contexts/LanguageContext.tsx` - Path mapping
3. ✅ `client/src/hooks/useLocalizedPath.ts` - Path generation
4. ✅ All service page components - Update links
5. ✅ `sitemap.xml` - Update URLs

---

## Example URLs

### French (fr)
- `https://couronnedentaire.ma/fr/services/blanchiment-casablanca`
- `https://couronnedentaire.ma/fr/services/blanchiment-casablanca/prix`
- `https://couronnedentaire.ma/fr/services/couronne-casablanca`

### Arabic (ar)
- `https://couronnedentaire.ma/ar/services/blanchiment-casablanca`
- `https://couronnedentaire.ma/ar/services/couronne-casablanca`

### English (en)
- `https://couronnedentaire.ma/en/services/blanchiment-casablanca`
- `https://couronnedentaire.ma/en/services/couronne-casablanca`

**Note**: URLs are in French for all languages (SEO benefit)

---

## SEO Benefits

1. **Local Keywords**: "casablanca" in every service URL
2. **French URLs**: Better for Moroccan search
3. **Descriptive**: Clear service names
4. **Consistent**: All services follow same pattern

---

*Created: October 21, 2025*
