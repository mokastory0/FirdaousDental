# GTM Setup: Hero Booking Button Tracking

## 📋 Exact Configuration Steps

Follow these steps to add tracking for the hero section booking button.

---

## Step 1: Create Trigger

### **Navigation**
1. Go to your GTM container
2. Click **Triggers** in the left sidebar
3. Click **New** button (top right)

### **Configuration**

**Trigger Configuration**:
- Click on the trigger configuration area (top box)
- Select **Click - All Elements**

**Trigger Name**:
```
Click - Hero Booking Button
```

**This trigger fires on**:
- Select: **Some Clicks**

**Fire this trigger when an Event occurs and all of these conditions are true**:
- Click **Add Condition**
- Configure as follows:

| Variable | Operator | Value |
|----------|----------|-------|
| Click Element | matches CSS selector | `[data-testid="button-hero-booking"]` |

### **Screenshot Reference**
```
┌─────────────────────────────────────────┐
│ Trigger Configuration                   │
├─────────────────────────────────────────┤
│ Trigger Type: Click - All Elements     │
│                                         │
│ This trigger fires on: Some Clicks     │
│                                         │
│ Fire this trigger when:                │
│ ┌─────────────────────────────────┐   │
│ │ Click Element                    │   │
│ │ matches CSS selector             │   │
│ │ [data-testid="button-hero-      │   │
│ │  booking"]                       │   │
│ └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### **Save**
- Click **Save** (top right)

---

## Step 2: Create Tag

### **Navigation**
1. Click **Tags** in the left sidebar
2. Click **New** button (top right)

### **Tag Configuration**

**Tag Name**:
```
GA4 Event - Hero Booking Button
```

**Tag Configuration**:
- Click on the tag configuration area (top box)
- Select **Google Analytics: GA4 Event**

**Configuration Tag**:
- Select your existing GA4 Configuration tag from dropdown
- (It should be named something like "GA4 Configuration" or "Google Analytics: GA4 Configuration")

**Event Name**:
```
click_hero_booking
```

**Event Parameters**:
Click **Add Row** for each parameter:

| Parameter Name | Value |
|----------------|-------|
| `button_location` | `hero` |
| `button_type` | `booking` |
| `destination` | `dentisto` |
| `cta_position` | `primary` |

### **Screenshot Reference**
```
┌─────────────────────────────────────────┐
│ Tag Configuration                       │
├─────────────────────────────────────────┤
│ Tag Type: Google Analytics: GA4 Event  │
│                                         │
│ Configuration Tag: [Your GA4 Config]   │
│                                         │
│ Event Name: click_hero_booking         │
│                                         │
│ Event Parameters:                      │
│ ┌───────────────────┬─────────────┐   │
│ │ Parameter Name    │ Value       │   │
│ ├───────────────────┼─────────────┤   │
│ │ button_location   │ hero        │   │
│ │ button_type       │ booking     │   │
│ │ destination       │ dentisto    │   │
│ │ cta_position      │ primary     │   │
│ └───────────────────┴─────────────┘   │
└─────────────────────────────────────────┘
```

### **Triggering**
- Click on the triggering area (bottom box)
- Select: **Click - Hero Booking Button** (the trigger you created in Step 1)

### **Save**
- Click **Save** (top right)

---

## Step 3: Test in Preview Mode

### **Enable Preview**
1. Click **Preview** button (top right in GTM)
2. Enter your website URL: `http://localhost:5000` or your live URL
3. Click **Connect**

### **Test the Tag**
1. On your website, scroll to the hero section
2. Click the **"Prendre Rendez-Vous"** button (green button on the left)
3. In the GTM Preview panel (bottom or side), you should see:
   - **Tag Fired**: "GA4 Event - Hero Booking Button"
   - **Trigger**: "Click - Hero Booking Button"

### **Verify Event Parameters**
1. In GTM Preview, click on the tag that fired
2. Check the **Variables** tab
3. Verify these values:
   - `event`: `click_hero_booking`
   - `button_location`: `hero`
   - `button_type`: `booking`
   - `destination`: `dentisto`
   - `cta_position`: `primary`

### **Check in GA4 DebugView** (Optional)
1. Go to GA4 → **Configure** → **DebugView**
2. Click the booking button on your site
3. See the `click_hero_booking` event appear in real-time
4. Expand the event to see all parameters

---

## Step 4: Submit Container

### **After Testing**
1. Click **Submit** (top right in GTM)
2. Add a **Version Name**: `Added hero booking button tracking`
3. Add a **Version Description**: `Tracking for hero section booking CTA`
4. Click **Publish**

---

## 🎯 Google Ads Conversion Setup (Optional)

If you're running Google Ads, create a conversion action:

### **In Google Ads**
1. Go to **Tools & Settings** → **Conversions**
2. Click **+ New conversion action**
3. Select **Website**
4. Click **Add a conversion action manually**

### **Configuration**

**Goal and action optimization**:
- Category: **Lead**
- Conversion name: `Hero Booking Click`

**Value**:
- Use the same value as your other booking conversions
- Or select "Don't use a value"

**Count**:
- **One** (count only one conversion per click)

**Click through conversion window**:
- **30 days** (default)

**Attribution model**:
- **Data-driven** (recommended)

### **Set up the tag**

**Event name**:
```
click_hero_booking
```

**Save and Continue**

---

## 📊 GA4 Custom Report (Optional)

### **Compare Booking Button Performance**

**In GA4**:
1. Go to **Explore** → **Blank**
2. Name: `Booking Button Comparison`

**Dimensions**:
- Add: `Event name`
- Add: `button_location` (custom parameter)

**Metrics**:
- Add: `Event count`
- Add: `Total users`

**Filters**:
- `Event name` contains `booking`

**Visualization**:
- Select: **Table**

**Result**: Compare performance of:
- `click_hero_booking` (hero section)
- `click_mobile_booking` (mobile bottom bar)
- `click_desktop_booking` (desktop floating button)

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Trigger created: "Click - Hero Booking Button"
- [ ] Tag created: "GA4 Event - Hero Booking Button"
- [ ] Tested in Preview mode
- [ ] Tag fires when clicking hero booking button
- [ ] Event parameters are correct
- [ ] Container submitted and published
- [ ] Event appears in GA4 Realtime (within 30 seconds)
- [ ] (Optional) Google Ads conversion action created
- [ ] (Optional) GA4 custom report created

---

## 🔍 Troubleshooting

### **Tag Not Firing**

**Check**:
1. Is the trigger configured correctly?
   - CSS selector: `[data-testid="button-hero-booking"]`
   - Trigger type: Click - All Elements
   - Condition: Some Clicks

2. Is the button on the page?
   - Right-click the booking button → Inspect
   - Verify `data-testid="button-hero-booking"` exists

3. Is GTM installed on the page?
   - Check browser console for GTM snippet
   - Verify GTM container ID matches

### **Event Not in GA4**

**Check**:
1. Is the GA4 Configuration tag firing?
   - In GTM Preview, verify config tag fires on page load

2. Is the Measurement ID correct?
   - In GTM, check your GA4 Configuration tag
   - Verify Measurement ID (G-XXXXXXXXXX)

3. Wait time:
   - Events can take 30-60 seconds to appear in Realtime
   - Wait up to 24 hours for full reporting

### **Wrong Event Parameters**

**Check**:
1. In GTM tag configuration
2. Verify each parameter name and value
3. No typos or extra spaces
4. Values are lowercase (best practice)

---

## 📝 Summary

### **What You Created**

1. **Trigger**: Fires when hero booking button is clicked
2. **Tag**: Sends `click_hero_booking` event to GA4
3. **Parameters**: Tracks location, type, destination, position

### **What You Can Track**

- How many users click the hero booking button
- Compare hero vs. mobile vs. desktop booking buttons
- Optimize CTA placement based on data
- Measure booking conversion rate by source

### **Next Steps**

1. Monitor for 1 week
2. Compare booking button performance
3. Optimize based on data
4. A/B test button placement/design

---

## 🎉 You're Done!

The hero booking button is now fully tracked in Google Analytics 4 and ready for Google Ads conversion tracking.

**Need help?** Check the troubleshooting section or verify each step above.

---

## 📞 Quick Reference

**Trigger Name**: `Click - Hero Booking Button`  
**Tag Name**: `GA4 Event - Hero Booking Button`  
**Event Name**: `click_hero_booking`  
**CSS Selector**: `[data-testid="button-hero-booking"]`

**Event Parameters**:
- `button_location`: `hero`
- `button_type`: `booking`
- `destination`: `dentisto`
- `cta_position`: `primary`
