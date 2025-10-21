# Domain Change Guide: couronnedentaire.ma → dentistecasablanca.info

## Overview
This guide covers changing your domain from `couronnedentaire.ma` to `dentistecasablanca.info` in AWS.

---

## Prerequisites

- ✅ Domain registered: `dentistecasablanca.info`
- ✅ AWS Account access
- ✅ Current site: `couronnedentaire.ma` (CloudFront + S3)
- ✅ Access to domain registrar

---

## Step-by-Step AWS Configuration

### 1. Route 53 - Hosted Zone Setup

#### A. Create Hosted Zone for New Domain

1. **Go to Route 53**:
   - AWS Console → Route 53 → Hosted zones
   - Click "Create hosted zone"

2. **Configure Hosted Zone**:
   ```
   Domain name: dentistecasablanca.info
   Type: Public hosted zone
   ```
   - Click "Create hosted zone"

3. **Note the Name Servers** (you'll need these):
   ```
   Example:
   ns-1234.awsdns-12.org
   ns-5678.awsdns-34.com
   ns-9012.awsdns-56.net
   ns-3456.awsdns-78.co.uk
   ```

#### B. Update Domain Registrar

1. **Go to your domain registrar** (where you bought dentistecasablanca.info)
2. **Update nameservers** to the AWS Route 53 nameservers from step 3
3. **Wait for propagation** (can take 24-48 hours, usually faster)

---

### 2. ACM - SSL Certificate

#### A. Request Certificate

1. **Go to ACM (Certificate Manager)**:
   - AWS Console → Certificate Manager
   - **Important**: Must be in **us-east-1** region (for CloudFront)
   - Click "Request certificate"

2. **Request Public Certificate**:
   ```
   Domain names:
   - dentistecasablanca.info
   - www.dentistecasablanca.info
   
   Validation method: DNS validation
   ```
   - Click "Request"

3. **Add DNS Records for Validation**:
   - Click "Create records in Route 53"
   - This automatically adds CNAME records to your hosted zone
   - Wait for validation (5-30 minutes)

4. **Verify Certificate Status**:
   - Status should change to "Issued"
   - If not issued after 30 minutes, check DNS records

---

### 3. CloudFront - Update Distribution

#### A. Add New Domain to Existing Distribution

1. **Go to CloudFront**:
   - AWS Console → CloudFront → Distributions
   - Click on your distribution ID

2. **Edit Settings**:
   - Click "Edit" in General tab
   
3. **Update Alternate Domain Names (CNAMEs)**:
   ```
   Current:
   couronnedentaire.ma
   www.couronnedentaire.ma
   
   Add:
   dentistecasablanca.info
   www.dentistecasablanca.info
   ```
   
4. **Update SSL Certificate**:
   - Custom SSL certificate: Select your new certificate
   - Or keep both certificates if supporting both domains

5. **Save Changes**:
   - Click "Save changes"
   - Wait for deployment (5-15 minutes)

#### B. Alternative: Create New Distribution (Recommended)

If you want a clean setup:

1. **Create New Distribution**:
   - Origin domain: Your S3 bucket
   - Origin access: Origin access control
   - Viewer protocol policy: Redirect HTTP to HTTPS
   - Alternate domain names (CNAMEs):
     ```
     dentistecasablanca.info
     www.dentistecasablanca.info
     ```
   - Custom SSL certificate: Select your new certificate
   - Default root object: `index.html`

2. **Configure Error Pages** (same as current):
   ```
   404 → /index.html (200)
   403 → /index.html (200)
   ```

3. **Note CloudFront Domain**:
   ```
   Example: d1234abcd5678.cloudfront.net
   ```

---

### 4. Route 53 - DNS Records

#### A. Create A Records (Alias to CloudFront)

1. **Go to Route 53** → Your hosted zone (dentistecasablanca.info)

2. **Create Record for Root Domain**:
   ```
   Record name: (leave empty for root)
   Record type: A
   Alias: Yes
   Route traffic to: Alias to CloudFront distribution
   Choose distribution: Select your CloudFront distribution
   ```
   - Click "Create records"

3. **Create Record for www Subdomain**:
   ```
   Record name: www
   Record type: A
   Alias: Yes
   Route traffic to: Alias to CloudFront distribution
   Choose distribution: Select your CloudFront distribution
   ```
   - Click "Create records"

#### B. Optional: Create AAAA Records (IPv6)

Same as above but:
```
Record type: AAAA
```

---

### 5. S3 Bucket (No Changes Needed)

Your existing S3 bucket can stay the same:
- Bucket name: Can remain as is
- Content: No changes needed
- CloudFront will serve from same bucket

**Optional**: Create new bucket if you want:
```
Bucket name: dentistecasablanca.info
Region: Same as current
Settings: Same as current bucket
```

---

### 6. Update Application Configuration

#### A. Update Code References

**Files to update**:

1. **`client/index.html`** - Meta tags:
```html
<!-- Update all references -->
<meta property="og:url" content="https://dentistecasablanca.info/" />
<meta property="twitter:url" content="https://dentistecasablanca.info/" />
<meta property="og:image" content="https://dentistecasablanca.info/og-image.jpg" />
```

2. **`package.json`** - If you have homepage field:
```json
{
  "homepage": "https://dentistecasablanca.info"
}
```

3. **Any hardcoded URLs in components**:
```tsx
// Search for couronnedentaire.ma and replace
```

#### B. Update Sitemap

**`sitemap.xml`**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dentistecasablanca.info/</loc>
    <lastmod>2025-10-21</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- Update all URLs -->
</urlset>
```

#### C. Rebuild and Deploy

```bash
npm run build
# Deploy to S3
```

---

### 7. Google Services Updates

#### A. Google Search Console

1. **Add New Property**:
   - Go to Google Search Console
   - Add property: `dentistecasablanca.info`
   - Verify ownership (DNS TXT record)

2. **Submit Sitemap**:
   ```
   https://dentistecasablanca.info/sitemap.xml
   ```

3. **Set Up 301 Redirects** (see step 8)

#### B. Google Analytics

1. **Update Property Settings**:
   - Go to GA4 property
   - Admin → Data Streams
   - Update website URL to `dentistecasablanca.info`

2. **Or Create New Property**:
   - Keep old property for historical data
   - Create new property for new domain

#### C. Google Tag Manager

1. **Update Triggers**:
   - Check all triggers using domain
   - Update to new domain

2. **Test All Tags**:
   - Preview mode
   - Verify all tags fire correctly

#### D. Google Ads

1. **Update Conversion Tracking**:
   - Update domain in conversion actions
   - Update tracking URLs

2. **Update Campaigns**:
   - Update final URLs
   - Update display URLs

---

### 8. 301 Redirects (Old → New Domain)

#### Option A: CloudFront Function (Recommended)

1. **Create CloudFront Function**:
   - Go to CloudFront → Functions
   - Create function: `domain-redirect`

2. **Function Code**:
```javascript
function handler(event) {
    var request = event.request;
    var host = request.headers.host.value;
    
    // Redirect old domain to new domain
    if (host === 'couronnedentaire.ma' || host === 'www.couronnedentaire.ma') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: 'https://dentistecasablanca.info' + request.uri }
            }
        };
    }
    
    // Redirect www to non-www
    if (host === 'www.dentistecasablanca.info') {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: 'https://dentistecasablanca.info' + request.uri }
            }
        };
    }
    
    return request;
}
```

3. **Publish Function**:
   - Click "Publish"
   - Note the ARN

4. **Associate with Distribution**:
   - Go to your OLD domain's CloudFront distribution
   - Behaviors → Edit default behavior
   - Function associations:
     ```
     Viewer request: Select your function
     ```
   - Save changes

#### Option B: S3 Redirect (Alternative)

1. **Create Redirect Bucket**:
   - Bucket name: `couronnedentaire.ma`
   - Enable static website hosting
   - Redirect all requests to: `https://dentistecasablanca.info`

2. **Update CloudFront**:
   - Point old distribution to redirect bucket

---

### 9. Testing Checklist

#### A. DNS Propagation

```bash
# Check DNS resolution
nslookup dentistecasablanca.info
dig dentistecasablanca.info

# Check from different locations
https://www.whatsmydns.net/
```

#### B. SSL Certificate

```bash
# Check certificate
https://www.ssllabs.com/ssltest/analyze.html?d=dentistecasablanca.info
```

#### C. Website Loading

- [ ] https://dentistecasablanca.info loads
- [ ] https://www.dentistecasablanca.info loads
- [ ] All pages work
- [ ] Images load correctly
- [ ] Forms work
- [ ] Google Analytics tracking
- [ ] Google Tag Manager events

#### D. Redirects

- [ ] http://couronnedentaire.ma → https://dentistecasablanca.info
- [ ] https://couronnedentaire.ma → https://dentistecasablanca.info
- [ ] http://www.couronnedentaire.ma → https://dentistecasablanca.info
- [ ] https://www.couronnedentaire.ma → https://dentistecasablanca.info

#### E. SEO

- [ ] Sitemap submitted
- [ ] Google Search Console verified
- [ ] Robots.txt accessible
- [ ] Meta tags updated

---

### 10. Timeline

**Immediate (0-1 hour)**:
- ✅ Create Route 53 hosted zone
- ✅ Request SSL certificate
- ✅ Update nameservers at registrar

**Short term (1-24 hours)**:
- ✅ DNS propagation
- ✅ SSL certificate issued
- ✅ CloudFront distribution updated
- ✅ DNS records created

**Medium term (1-7 days)**:
- ✅ Test all functionality
- ✅ Set up redirects
- ✅ Update Google services
- ✅ Monitor traffic

**Long term (1-3 months)**:
- ✅ Monitor SEO rankings
- ✅ Keep old domain redirecting
- ✅ Update all external links
- ✅ Consider keeping old domain for 1 year

---

## Cost Estimate

**AWS Costs**:
- Route 53 hosted zone: $0.50/month
- SSL certificate (ACM): FREE
- CloudFront: Same as current (no change)
- S3: Same as current (no change)

**Domain Costs**:
- dentistecasablanca.info: ~$10-15/year
- couronnedentaire.ma: Keep for 1 year for redirects

**Total Additional Cost**: ~$1-2/month

---

## Rollback Plan

If something goes wrong:

1. **Keep Old Domain Active**:
   - Don't delete old CloudFront distribution
   - Keep old DNS records
   - Keep old SSL certificate

2. **Switch Back**:
   - Update DNS to point to old distribution
   - Wait for propagation (5-60 minutes)

3. **Test**:
   - Verify old domain works
   - Check all functionality

---

## Best Practices

### ✅ Do's

- Keep old domain redirecting for at least 6-12 months
- Update all Google services
- Monitor traffic and rankings
- Test thoroughly before switching
- Keep backups of all configurations

### ❌ Don'ts

- Don't delete old domain immediately
- Don't forget to update Google services
- Don't skip SSL certificate validation
- Don't forget to test redirects
- Don't rush the process

---

## Quick Command Reference

### Check DNS
```bash
nslookup dentistecasablanca.info
dig dentistecasablanca.info
```

### Check SSL
```bash
openssl s_client -connect dentistecasablanca.info:443 -servername dentistecasablanca.info
```

### Test Redirects
```bash
curl -I https://couronnedentaire.ma
curl -I https://www.couronnedentaire.ma
```

---

## Support Resources

- **AWS Route 53**: https://docs.aws.amazon.com/route53/
- **AWS CloudFront**: https://docs.aws.amazon.com/cloudfront/
- **AWS ACM**: https://docs.aws.amazon.com/acm/
- **Google Search Console**: https://search.google.com/search-console

---

## Summary

**Steps**:
1. ✅ Create Route 53 hosted zone
2. ✅ Update nameservers at registrar
3. ✅ Request SSL certificate (us-east-1)
4. ✅ Update CloudFront distribution
5. ✅ Create DNS A records (alias)
6. ✅ Update code references
7. ✅ Set up 301 redirects
8. ✅ Update Google services
9. ✅ Test everything
10. ✅ Monitor and maintain

**Timeline**: 1-3 days for full migration
**Cost**: ~$1-2/month additional
**Downtime**: None (if done correctly)

---

*Guide created: October 21, 2025*  
*Domain change: couronnedentaire.ma → dentistecasablanca.info*
