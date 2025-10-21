# Backlink Preservation Guide: couronnedentaire.ma → dentistecasablanca.info

## How to Keep Your SEO Value When Changing Domains

---

## The Problem

When you change domains, you risk losing:
- ✅ Backlink authority (link juice)
- ✅ Search rankings
- ✅ Domain authority
- ✅ Traffic from old links

**Solution**: Proper 301 redirects preserve 90-99% of SEO value!

---

## The Solution: 301 Permanent Redirects

### What is a 301 Redirect?

A **301 redirect** tells:
- **Search engines**: "This page has permanently moved to a new location"
- **Browsers**: Automatically send visitors to the new domain
- **Backlinks**: Transfer SEO value (link juice) to the new domain

**Result**: Google transfers 90-99% of the ranking power to your new domain!

---

## Implementation Methods

### Method 1: CloudFront Function (Recommended) ⭐

**Best for**: AWS CloudFront + S3 setup

#### Step 1: Create CloudFront Function

1. **Go to CloudFront** → Functions
2. **Create function**: `domain-redirect-301`
3. **Add this code**:

```javascript
function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    var uri = request.uri;
    
    // Redirect old domain to new domain (301 Permanent)
    if (host === 'couronnedentaire.ma' || host === 'www.couronnedentaire.ma') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { 
                    value: 'https://dentistecasablanca.info' + uri 
                },
                'cache-control': {
                    value: 'max-age=31536000' // Cache for 1 year
                }
            }
        };
    }
    
    // Redirect www to non-www on new domain
    if (host === 'www.dentistecasablanca.info') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { 
                    value: 'https://dentistecasablanca.info' + uri 
                }
            }
        };
    }
    
    return request;
}
```

4. **Publish function**
5. **Associate with CloudFront distribution**:
   - Go to your OLD domain's distribution
   - Behaviors → Edit default behavior
   - Function associations → Viewer request
   - Select your function

#### Step 2: Keep Old Domain Active

**Important**: Keep `couronnedentaire.ma`:
- ✅ Domain registration active (1-2 years)
- ✅ CloudFront distribution active
- ✅ DNS pointing to CloudFront
- ✅ SSL certificate active

**Why?** So redirects work and backlinks transfer!

---

### Method 2: S3 Website Redirect (Alternative)

**Best for**: Simple redirect without CloudFront function

#### Step 1: Create Redirect Bucket

1. **Create S3 bucket**: `couronnedentaire.ma`
2. **Enable static website hosting**
3. **Redirect all requests**:
   - Redirect to: `https://dentistecasablanca.info`
   - Protocol: `https`

#### Step 2: Update CloudFront

1. **Point old CloudFront distribution** to redirect bucket
2. **Or create new distribution** for old domain pointing to redirect bucket

---

### Method 3: Route 53 + CloudFront (Comprehensive)

**Best for**: Maximum control

#### Setup:

1. **Keep both domains in Route 53**
2. **Old domain** (`couronnedentaire.ma`):
   - Points to CloudFront with redirect function
   - 301 redirects to new domain
   
3. **New domain** (`dentistecasablanca.info`):
   - Points to CloudFront with actual site
   - Serves content

---

## Timeline for Backlink Transfer

### Week 1-2: Initial Setup
- ✅ Set up 301 redirects
- ✅ Verify redirects work
- ✅ Submit new sitemap to Google

### Week 2-4: Google Discovery
- 🔄 Google discovers redirects
- 🔄 Starts crawling new domain
- 🔄 Begins transferring authority

### Month 1-3: Authority Transfer
- 🔄 Backlinks start pointing to new domain
- 🔄 Rankings stabilize on new domain
- 🔄 90-99% of SEO value transferred

### Month 3-6: Full Migration
- ✅ All backlinks recognized
- ✅ Full authority transferred
- ✅ Rankings restored/improved

### Month 6-12: Maintenance
- ✅ Keep redirects active
- ✅ Monitor rankings
- ✅ Consider keeping old domain longer

---

## Google Search Console Setup

### Step 1: Add New Property

1. **Go to Google Search Console**
2. **Add property**: `dentistecasablanca.info`
3. **Verify ownership** (DNS TXT record)

### Step 2: Change of Address Tool

1. **In OLD property** (`couronnedentaire.ma`):
   - Settings → Change of address
   - Select new property: `dentistecasablanca.info`
   - Verify 301 redirects are working
   - Submit

2. **Google will**:
   - ✅ Transfer search data
   - ✅ Update search results
   - ✅ Preserve rankings
   - ✅ Transfer backlink authority

### Step 3: Submit New Sitemap

1. **In NEW property** (`dentistecasablanca.info`):
   - Sitemaps → Add sitemap
   - Submit: `https://dentistecasablanca.info/sitemap.xml`

---

## Backlink Monitoring

### Tools to Track Backlinks

1. **Google Search Console**:
   - Links → External links
   - See which sites link to you

2. **Ahrefs** (paid):
   - Backlink checker
   - Track old vs new domain

3. **SEMrush** (paid):
   - Backlink analytics
   - Monitor transfer progress

4. **Moz Link Explorer** (free tier):
   - Domain authority
   - Backlink count

### What to Monitor

- ✅ Number of backlinks to old domain
- ✅ Number of backlinks to new domain
- ✅ Domain authority score
- ✅ Search rankings
- ✅ Organic traffic

---

## Best Practices

### ✅ Do's

1. **Keep old domain active** for 12-24 months minimum
2. **Use 301 redirects** (not 302 temporary)
3. **Redirect ALL pages** (not just homepage)
4. **Preserve URL structure** when possible
5. **Update internal links** to new domain
6. **Notify major backlink sources** about change
7. **Monitor rankings** weekly
8. **Keep redirects permanent** (don't remove)

### ❌ Don'ts

1. **Don't delete old domain** immediately
2. **Don't use 302 redirects** (temporary)
3. **Don't redirect to homepage only** (redirect page-to-page)
4. **Don't change URL structure** unnecessarily
5. **Don't remove redirects** after a few months
6. **Don't forget to update**:
   - Google Business Profile
   - Social media profiles
   - Directory listings
   - Email signatures

---

## URL Mapping Strategy

### Preserve URL Structure ✅

**Old URL** → **New URL** (Same path)

```
couronnedentaire.ma/fr/services/blanchiment-casablanca
→ dentistecasablanca.info/fr/services/blanchiment-casablanca

couronnedentaire.ma/fr/services/couronne-casablanca
→ dentistecasablanca.info/fr/services/couronne-casablanca

couronnedentaire.ma/fr/a-propos
→ dentistecasablanca.info/fr/a-propos
```

**Why?** Same paths = easier redirect = better SEO value transfer!

---

## Outreach Strategy

### Notify Important Backlink Sources

1. **Identify top backlinks**:
   - Google Search Console → Links
   - Find sites with most links

2. **Contact webmasters**:
   ```
   Subject: Domain Change Notification - Cabinet Dentaire Dr. Firdaous Moustaine
   
   Bonjour,
   
   Thank you for linking to our dental clinic website.
   
   We've moved to a new domain:
   OLD: couronnedentaire.ma
   NEW: dentistecasablanca.info
   
   The old domain redirects automatically, but if you could update 
   the link, we'd appreciate it!
   
   Best regards,
   Dr. Firdaous Moustaine
   ```

3. **Update your own profiles**:
   - Google Business Profile
   - Facebook
   - Instagram
   - LinkedIn
   - Directory listings (Pages Jaunes, etc.)

---

## Technical Checklist

### Before Migration

- [ ] Set up new domain in Route 53
- [ ] Request SSL certificate for new domain
- [ ] Create CloudFront distribution for new domain
- [ ] Test new domain works correctly
- [ ] Create redirect function for old domain

### During Migration

- [ ] Implement 301 redirects on old domain
- [ ] Test all redirects work (every page)
- [ ] Update sitemap with new domain
- [ ] Submit sitemap to Google Search Console
- [ ] Use Change of Address tool in GSC
- [ ] Update Google Business Profile
- [ ] Update social media profiles

### After Migration

- [ ] Monitor rankings daily (first week)
- [ ] Monitor rankings weekly (first month)
- [ ] Check backlink transfer progress
- [ ] Verify redirects still working
- [ ] Keep old domain active (12+ months)
- [ ] Update any hardcoded links

---

## Cost Analysis

### Keeping Old Domain Active

**Annual Costs**:
- Domain registration: ~$15/year
- Route 53 hosted zone: $6/year ($0.50/month)
- CloudFront: ~$1-5/month (minimal traffic)
- SSL certificate: FREE (AWS ACM)

**Total**: ~$30-75/year

**ROI**: Preserving thousands of dollars in SEO value!

---

## Expected Results

### Traffic & Rankings

**Week 1-2**:
- Small traffic dip (5-10%)
- Rankings fluctuate slightly

**Month 1**:
- Traffic recovers to 90-95%
- Rankings stabilize

**Month 2-3**:
- Traffic back to 100%
- Rankings equal or better

**Month 6+**:
- Full authority transferred
- Potential ranking improvements (better domain name!)

### Backlink Transfer

**Month 1**: 20-30% of backlinks recognized on new domain  
**Month 3**: 60-70% transferred  
**Month 6**: 90-95% transferred  
**Month 12**: 95-99% transferred

---

## Testing Your Redirects

### Manual Testing

```bash
# Test redirect (should return 301)
curl -I https://couronnedentaire.ma

# Expected output:
HTTP/2 301
location: https://dentistecasablanca.info/
```

### Online Tools

1. **Redirect Checker**:
   - https://httpstatus.io
   - Enter: couronnedentaire.ma
   - Should show: 301 → dentistecasablanca.info

2. **Screaming Frog** (free):
   - Crawl old domain
   - Check all pages redirect with 301

---

## FAQ

### Q: How long should I keep the old domain?

**A**: Minimum 12 months, ideally 24 months. Some recommend keeping it forever (it's cheap!).

### Q: Will I lose rankings?

**A**: With proper 301 redirects, you'll preserve 90-99% of rankings. Small temporary dip is normal.

### Q: Do I need to update backlinks manually?

**A**: No, 301 redirects transfer the value automatically. But updating major ones helps.

### Q: What if I delete the old domain?

**A**: ❌ You'll lose all backlink value and rankings. DON'T DO THIS!

### Q: Can I redirect to a different URL structure?

**A**: Yes, but it's better to keep the same structure. Map old URLs to equivalent new URLs.

### Q: How do I know it's working?

**A**: Monitor Google Search Console → Links. You'll see backlinks gradually point to new domain.

---

## Summary

### The Key to Success: 301 Redirects ✅

1. **Set up 301 redirects** from old to new domain
2. **Keep old domain active** for 12-24 months
3. **Use Google Change of Address tool**
4. **Monitor backlink transfer** progress
5. **Update major backlink sources** manually
6. **Be patient** - full transfer takes 3-6 months

### Expected Outcome

- ✅ 90-99% of SEO value preserved
- ✅ Rankings maintained or improved
- ✅ Backlinks transferred automatically
- ✅ Traffic recovers within 1-2 months
- ✅ Better domain name for branding!

---

## Implementation Priority

**Phase 1 (Week 1)**: Setup
- ✅ Create redirect function
- ✅ Test redirects
- ✅ Deploy to production

**Phase 2 (Week 2)**: Google
- ✅ Add new property to GSC
- ✅ Use Change of Address tool
- ✅ Submit new sitemap

**Phase 3 (Month 1-3)**: Monitor
- ✅ Track rankings
- ✅ Monitor backlinks
- ✅ Update major sources

**Phase 4 (Month 3-12)**: Maintain
- ✅ Keep redirects active
- ✅ Monitor progress
- ✅ Optimize new domain

---

*Guide created: October 21, 2025*  
*Domain migration: couronnedentaire.ma → dentistecasablanca.info*  
*Method: 301 Permanent Redirects*  
*Expected value preservation: 90-99%*
