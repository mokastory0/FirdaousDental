# CloudFront WWW to Non-WWW Redirect Setup

## Your Setup
- **Hosting**: Amazon S3
- **CDN**: CloudFront
- **Issue**: Need to redirect www to non-www

---

## Solution: CloudFront Function

CloudFront Functions are the best way to handle www → non-www redirects for S3/CloudFront setups.

### Step 1: Create CloudFront Function

1. Go to **AWS Console** → **CloudFront**
2. Click **Functions** (left sidebar)
3. Click **Create function**
4. Name: `www-redirect`
5. Paste this code:

```javascript
function handler(event) {
    var request = event.request;
    var headers = request.headers;
    var host = headers.host.value;
    
    // If host starts with www, redirect to non-www
    if (host.startsWith('www.')) {
        var newHost = host.replace('www.', '');
        var newUrl = 'https://' + newHost + request.uri;
        
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: newUrl }
            }
        };
    }
    
    // Otherwise, continue with request
    return request;
}
```

6. Click **Save changes**
7. Click **Publish** tab → **Publish function**

---

### Step 2: Associate Function with Distribution

1. Go to **CloudFront** → **Distributions**
2. Select your distribution (couronnedentaire.ma)
3. Go to **Behaviors** tab
4. Select the default behavior (*)
5. Click **Edit**
6. Scroll to **Function associations**
7. Under **Viewer request**:
   - Function type: **CloudFront Functions**
   - Function ARN: Select `www-redirect`
8. Click **Save changes**

---

### Step 3: Ensure Both Domains Point to CloudFront

Make sure both domains have DNS records:

**Route 53 (or your DNS provider)**:
- `couronnedentaire.ma` → CloudFront distribution
- `www.couronnedentaire.ma` → CloudFront distribution

Both should point to the **same CloudFront distribution**.

---

### Step 4: Add www to CloudFront Alternate Domain Names

1. Go to your CloudFront distribution
2. Click **Edit**
3. Under **Alternate domain names (CNAMEs)**, add:
   - `couronnedentaire.ma`
   - `www.couronnedentaire.ma`
4. Ensure SSL certificate covers both domains
5. Click **Save changes**

---

## Alternative: Lambda@Edge (More Powerful)

If you need more complex logic, use Lambda@Edge:

### Lambda Function Code:

```javascript
exports.handler = async (event) => {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    const host = headers.host[0].value;
    
    if (host.startsWith('www.')) {
        const newHost = host.replace('www.', '');
        const newUrl = `https://${newHost}${request.uri}`;
        
        return {
            status: '301',
            statusDescription: 'Moved Permanently',
            headers: {
                'location': [{
                    key: 'Location',
                    value: newUrl
                }]
            }
        };
    }
    
    return request;
};
```

**Setup**:
1. Create Lambda function in **us-east-1** (required for Lambda@Edge)
2. Add CloudFront trigger
3. Select **Viewer request** event
4. Deploy to CloudFront

---

## Testing After Setup

### Test 1: Direct Access
```bash
curl -I https://www.couronnedentaire.ma/fr
```

**Expected**:
```
HTTP/2 301
Location: https://couronnedentaire.ma/fr
```

### Test 2: Browser
1. Visit: `https://www.couronnedentaire.ma/fr/blog`
2. Should redirect to: `https://couronnedentaire.ma/fr/blog`
3. Check URL bar - should show non-www

### Test 3: Canonical Tags
1. Visit: `https://www.couronnedentaire.ma/fr/blog`
2. After redirect, view source
3. Check canonical tag - should be non-www

---

## Cost

### CloudFront Functions:
- **Free tier**: 2 million invocations/month
- **After**: $0.10 per 1 million invocations
- **Your traffic**: Likely free or < $1/month

### Lambda@Edge:
- More expensive (~$0.60 per 1 million requests)
- Only needed for complex logic

**Recommendation**: Use CloudFront Functions (cheaper, faster)

---

## Current Status

✅ **Code fix**: Canonical URLs use non-www (already deployed)
⏳ **CloudFront setup**: Needs manual configuration (follow steps above)

**What works now**:
- Canonical tags point to non-www ✅
- Google knows which version to index ✅

**What needs setup**:
- Automatic redirect from www to non-www ⏳
- Prevents users from seeing www version ⏳

---

## Summary

**For S3 + CloudFront**:
1. ✅ Code changes work (canonical URLs fixed)
2. ⏳ Need CloudFront Function for redirect
3. ⏳ Manual setup in AWS Console (10 minutes)

**Priority**:
- **High**: Code changes (done)
- **Medium**: CloudFront redirect (improves UX)

The canonical tag fix will resolve the Google Search Console error even without the redirect, but the redirect provides better user experience.

---

*Setup time: 10-15 minutes*  
*Cost: Free (within CloudFront free tier)*  
*Difficulty: Easy (copy-paste function code)*
