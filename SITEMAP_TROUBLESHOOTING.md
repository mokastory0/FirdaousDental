# Sitemap "Couldn't Fetch" Troubleshooting

## Issue
Google Search Console shows "Couldn't fetch" for sitemap.xml

## Common Causes & Solutions

---

### 1. ✅ Check Sitemap Accessibility

**Test manually**:
```bash
# Check if sitemap is accessible
curl https://dentistecasablanca.info/sitemap.xml

# Or visit in browser:
https://dentistecasablanca.info/sitemap.xml
```

**Expected**: Should return XML content with all URLs

**If 404**: Sitemap not deployed correctly

---

### 2. ✅ Verify robots.txt

**Check robots.txt**:
```
https://dentistecasablanca.info/robots.txt
```

**Should contain**:
```txt
User-agent: *
Allow: /

Sitemap: https://dentistecasablanca.info/sitemap.xml
```

**If missing**: Add sitemap reference to robots.txt

---

### 3. ✅ Check File Permissions (S3)

**S3 Bucket Settings**:
- Sitemap.xml must be publicly readable
- Check bucket policy allows public access
- Verify CloudFront can access the file

**Fix**:
```bash
# Make sitemap public
aws s3api put-object-acl --bucket couronnedentaire-maroc --key sitemap.xml --acl public-read
```

---

### 4. ✅ Verify Domain in Sitemap URLs

**Check sitemap content**:
```bash
# View first few URLs
curl https://dentistecasablanca.info/sitemap.xml | head -20
```

**URLs should match domain**:
- ✅ `https://dentistecasablanca.info/...`
- ❌ NOT `https://couronnedentaire.ma/...`

---

### 5. ✅ Google Search Console Property

**Verify property matches**:
- Property: `dentistecasablanca.info`
- Sitemap: `https://dentistecasablanca.info/sitemap.xml`

**Both must match exactly!**

---

### 6. ✅ Wait for Google to Retry

**Timeline**:
- **Immediate**: "Couldn't fetch" (normal)
- **1-24 hours**: Google retries automatically
- **1-3 days**: Should be processed
- **7 days**: If still failing, investigate

**Why?**
- Google needs time to discover new domain
- DNS propagation (24-48 hours)
- Google's crawl schedule

---

### 7. ✅ Check XML Format

**Validate sitemap**:
```
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

**Common issues**:
- Invalid XML syntax
- Missing closing tags
- Special characters not escaped
- Wrong encoding

---

### 8. ✅ CloudFront Cache

**Issue**: Old sitemap cached

**Solution**:
```bash
# Invalidate sitemap specifically
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/sitemap.xml"
```

---

### 9. ✅ HTTPS/SSL Certificate

**Check**:
- Site must be HTTPS
- Valid SSL certificate
- No mixed content warnings

**Test**:
```
https://www.ssllabs.com/ssltest/analyze.html?d=dentistecasablanca.info
```

---

### 10. ✅ Sitemap Size

**Limits**:
- Max 50,000 URLs per sitemap
- Max 50 MB uncompressed
- Max 10 MB compressed

**Your sitemap**: 72 URLs ✅ (well within limits)

---

## Quick Diagnostic Commands

### Test 1: Can you access the sitemap?
```bash
curl -I https://dentistecasablanca.info/sitemap.xml
```

**Expected**:
```
HTTP/2 200
content-type: application/xml
```

### Test 2: Does it have correct URLs?
```bash
curl https://dentistecasablanca.info/sitemap.xml | grep -o "https://[^<]*" | head -5
```

**Expected**:
```
https://dentistecasablanca.info/
https://dentistecasablanca.info/fr
https://dentistecasablanca.info/fr/services
```

### Test 3: Is robots.txt correct?
```bash
curl https://dentistecasablanca.info/robots.txt
```

**Expected**:
```
User-agent: *
Allow: /

Sitemap: https://dentistecasablanca.info/sitemap.xml
```

---

## Most Likely Causes

### 1. **Timing Issue** (Most Common) ⭐
- Domain just set up
- Google hasn't crawled yet
- **Solution**: Wait 24-48 hours

### 2. **Sitemap Not Deployed**
- File not in S3
- **Solution**: Rebuild and deploy

### 3. **Wrong Domain in Sitemap**
- Sitemap has old domain URLs
- **Solution**: Update sitemap URLs

### 4. **CloudFront Cache**
- Old version cached
- **Solution**: Invalidate cache

### 5. **Robots.txt Blocking**
- Sitemap not listed
- **Solution**: Add to robots.txt

---

## Step-by-Step Fix

### Step 1: Verify Sitemap is Live
```bash
curl https://dentistecasablanca.info/sitemap.xml
```

**If 404**: Redeploy
**If 200**: Continue to Step 2

### Step 2: Check URLs in Sitemap
```bash
curl https://dentistecasablanca.info/sitemap.xml | grep "<loc>"
```

**Should show**: `dentistecasablanca.info` URLs
**If shows**: `couronnedentaire.ma` URLs → Update sitemap

### Step 3: Verify robots.txt
```bash
curl https://dentistecasablanca.info/robots.txt
```

**Should contain**: `Sitemap: https://dentistecasablanca.info/sitemap.xml`

### Step 4: Invalidate CloudFront
```bash
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/sitemap.xml" "/robots.txt"
```

### Step 5: Resubmit in Google Search Console
1. Remove old sitemap submission
2. Wait 5 minutes
3. Submit again: `https://dentistecasablanca.info/sitemap.xml`

### Step 6: Wait
- Give Google 24-48 hours to process
- Check back tomorrow

---

## Expected Timeline

| Time | Status | Action |
|------|--------|--------|
| **0-1 hour** | "Couldn't fetch" | Normal - Google hasn't tried yet |
| **1-6 hours** | "Couldn't fetch" | Google trying, may fail first time |
| **6-24 hours** | "Pending" or "Success" | Google processing |
| **1-3 days** | "Success" | Fully processed |
| **7+ days** | Still "Couldn't fetch" | Investigate issue |

---

## robots.txt Update

If your robots.txt doesn't have the sitemap, update it:

**File**: `client/public/robots.txt`

```txt
User-agent: *
Allow: /

Sitemap: https://dentistecasablanca.info/sitemap.xml
```

---

## Common Mistakes

### ❌ Wrong Property
- Submitted to `couronnedentaire.ma` property
- But sitemap has `dentistecasablanca.info` URLs
- **Fix**: Submit to correct property

### ❌ Mixed Domains
- Some URLs have old domain
- Some have new domain
- **Fix**: All URLs must use same domain

### ❌ Not Deployed
- Sitemap updated locally
- But not deployed to server
- **Fix**: Rebuild and deploy

### ❌ Cached Version
- CloudFront serving old sitemap
- **Fix**: Invalidate cache

---

## Verification Checklist

Before waiting for Google:

- [ ] Sitemap accessible at URL
- [ ] Returns 200 status code
- [ ] Content-Type is application/xml or text/xml
- [ ] All URLs use `dentistecasablanca.info`
- [ ] robots.txt references sitemap
- [ ] CloudFront cache invalidated
- [ ] Submitted to correct GSC property
- [ ] Domain is fully accessible
- [ ] SSL certificate valid

---

## If Still Failing After 7 Days

### Check Google Search Console Errors
- Look for specific error messages
- Check "Coverage" report
- Review "URL Inspection" tool

### Common Error Messages

**"Sitemap could not be read"**
- Invalid XML format
- Fix: Validate XML syntax

**"Sitemap is an HTML page"**
- Wrong content-type header
- Fix: Set Content-Type: application/xml

**"General HTTP error"**
- Server/CloudFront issue
- Fix: Check server logs

**"Timeout"**
- Sitemap too large or slow
- Fix: Optimize or split sitemap

---

## Contact Google

If nothing works after 7 days:

1. **Google Search Central Help**:
   - https://support.google.com/webmasters/

2. **Community Forum**:
   - https://support.google.com/webmasters/community

3. **Twitter**:
   - @googlesearchc

---

## Summary

**Most Likely**: Just need to wait 24-48 hours for Google to process

**Quick Checks**:
1. ✅ Sitemap accessible?
2. ✅ Correct domain in URLs?
3. ✅ robots.txt correct?
4. ✅ CloudFront cache cleared?

**Then**: Wait and check back tomorrow!

---

*Troubleshooting guide created: October 21, 2025*
