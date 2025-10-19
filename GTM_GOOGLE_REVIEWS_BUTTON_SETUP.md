# GTM Setup: Google Reviews Button Tracking

## **Button Details** 📋

**Button**: "Voir tous les avis sur Google" / "View all reviews on Google"  
**data-testid**: `button-google-reviews`  
**Action**: Opens Google Maps reviews page  
**URL**: https://www.google.com/maps/place/Cabinet+dentaire+Dr+Firdaous+MOUSTAINE/...

---

## 🎯 Step 1: Create the Trigger

### **1.1 Navigate to Triggers**
1. Log in to Google Tag Manager
2. Select your container
3. Click **Triggers** in the left sidebar
4. Click **New** button

### **1.2 Configure Trigger**

**Trigger Configuration**:
- Click the trigger configuration box (top)
- Select **Click - All Elements**

**Trigger Name**:
```
Click - Google Reviews Button
```

**This trigger fires on**:
- Select: **Some Clicks**

**Fire this trigger when an Event occurs and all of these conditions are true**:

| Variable | Operator | Value |
|----------|----------|-------|
| Click Element | matches CSS selector | `[data-testid="button-google-reviews"]` |

### **1.3 Save Trigger**
- Click **Save** button
- Trigger is now ready to use

---

## 🏷️ Step 2: Create the Tag

### **2.1 Navigate to Tags**
1. Click **Tags** in the left sidebar
2. Click **New** button

### **2.2 Configure Tag**

**Tag Name**:
```
GA4 Event - Google Reviews Button
```

**Tag Configuration**:
- Click the tag configuration box (top)
- Select **Google Analytics: GA4 Event**

**Configuration Tag**:
- Select your GA4 Configuration tag (e.g., `GA4 Configuration`)

**Event Name**:
```
click_google_reviews
```

**Event Parameters** (Click "Add Row" for each):

| Parameter Name | Value |
|----------------|-------|
| `button_location` | `reviews_section` |
| `button_text` | `voir_tous_avis` |
| `destination` | `google_maps_reviews` |
| `link_url` | `{{Click URL}}` |

### **2.3 Configure Triggering**

**Triggering**:
- Click the triggering box (bottom)
- Select: **Click - Google Reviews Button** (the trigger you just created)

### **2.4 Save Tag**
- Click **Save** button
- Tag is now ready

---

## 🧪 Step 3: Test the Setup

### **3.1 Enable Preview Mode**
1. In GTM, click **Preview** button (top right)
2. Enter your website URL
3. Click **Connect**
4. Your website opens in a new tab with GTM debugger

### **3.2 Test the Button**
1. Navigate to the Google Reviews section on your site
2. Click the **"Voir tous les avis sur Google"** button
3. Check the GTM debugger panel

### **3.3 Verify in Debugger**

**What to check**:
- ✅ Trigger "Click - Google Reviews Button" fires
- ✅ Tag "GA4 Event - Google Reviews Button" fires
- ✅ Event name: `click_google_reviews`
- ✅ Parameters are correct

### **3.4 Verify in GA4 DebugView**
1. Open Google Analytics 4
2. Go to **Configure** → **DebugView**
3. Click the button on your site
4. Check if event `click_google_reviews` appears
5. Verify parameters are correct

---

## 📤 Step 4: Publish Changes

### **4.1 Submit Changes**
1. In GTM, click **Submit** button (top right)
2. Add a version name:
   ```
   Added Google Reviews button tracking
   ```
3. Add a description (optional):
   ```
   Tracking clicks on "Voir tous les avis sur Google" button in reviews section
   ```
4. Click **Publish**

### **4.2 Verify Live**
1. Wait a few minutes for changes to propagate
2. Visit your live website
3. Click the Google Reviews button
4. Check GA4 real-time reports
5. Verify event appears

---

## 📊 Expected Results in GA4

### **Event Details**

**Event Name**: `click_google_reviews`

**Event Parameters**:
- `button_location`: `reviews_section`
- `button_text`: `voir_tous_avis`
- `destination`: `google_maps_reviews`
- `link_url`: (full Google Maps URL)
- `page_location`: (current page URL)
- `page_title`: (current page title)

### **Where to Find in GA4**

1. **Real-time Reports**:
   - Go to **Reports** → **Realtime**
   - Look for `click_google_reviews` event

2. **Events Report**:
   - Go to **Reports** → **Engagement** → **Events**
   - Find `click_google_reviews` in the list

3. **Exploration**:
   - Create custom exploration
   - Filter by event name: `click_google_reviews`
   - Analyze parameters

---

## 🎯 Quick Reference

### **Trigger Summary**
```
Name: Click - Google Reviews Button
Type: Click - All Elements
Condition: Click Element matches CSS selector [data-testid="button-google-reviews"]
```

### **Tag Summary**
```
Name: GA4 Event - Google Reviews Button
Type: Google Analytics: GA4 Event
Event Name: click_google_reviews
Parameters:
  - button_location: reviews_section
  - button_text: voir_tous_avis
  - destination: google_maps_reviews
  - link_url: {{Click URL}}
Trigger: Click - Google Reviews Button
```

---

## 🔍 Troubleshooting

### **Issue: Trigger not firing**

**Check**:
1. ✅ Button has `data-testid="button-google-reviews"`
2. ✅ CSS selector is correct: `[data-testid="button-google-reviews"]`
3. ✅ Trigger type is "Click - All Elements"
4. ✅ Preview mode is active

**Solution**:
- Inspect button element in browser
- Verify data-testid attribute exists
- Check for typos in CSS selector

### **Issue: Tag not firing**

**Check**:
1. ✅ Tag is linked to correct trigger
2. ✅ GA4 Configuration tag is selected
3. ✅ Event name is correct
4. ✅ Tag is enabled (not paused)

**Solution**:
- Check tag configuration
- Verify trigger is firing first
- Check GTM debugger for errors

### **Issue: Event not in GA4**

**Check**:
1. ✅ GA4 Measurement ID is correct
2. ✅ Changes are published (not just previewed)
3. ✅ Wait 24-48 hours for full data
4. ✅ Check DebugView for real-time data

**Solution**:
- Verify GA4 setup
- Check real-time reports
- Wait for data processing

---

## 📈 Analytics Insights

### **What You Can Track**

1. **Click Volume**
   - How many users click to see reviews
   - Trend over time

2. **User Engagement**
   - Which pages drive most clicks
   - User journey to reviews

3. **Conversion Impact**
   - Do users who view reviews convert more?
   - Correlation with bookings

4. **A/B Testing**
   - Test button placement
   - Test button text
   - Test button design

---

## 🎨 Button Variations

### **Multilingual Tracking**

If you want to track which language version is clicked:

**Add parameter**:
```
language: {{Page Language}}
```

Or create separate events:
- `click_google_reviews_fr`
- `click_google_reviews_ar`
- `click_google_reviews_en`

### **Mobile vs Desktop**

**Add parameter**:
```
device_type: {{Device Type}}
```

This helps understand mobile vs desktop behavior.

---

## ✅ Checklist

### **Setup Complete When**:
- [ ] Trigger created with correct CSS selector
- [ ] Tag created with GA4 Event type
- [ ] Event name is `click_google_reviews`
- [ ] Parameters are configured
- [ ] Tag linked to trigger
- [ ] Tested in Preview mode
- [ ] Verified in GTM debugger
- [ ] Verified in GA4 DebugView
- [ ] Changes published
- [ ] Verified on live site
- [ ] Event appears in GA4 reports

---

## 🎉 Success!

Once completed, you'll be able to:
- ✅ Track all clicks on Google Reviews button
- ✅ See click volume in GA4
- ✅ Analyze user behavior
- ✅ Measure engagement with reviews
- ✅ Optimize button placement and design

**Your Google Reviews button is now fully tracked!** 📊✨
