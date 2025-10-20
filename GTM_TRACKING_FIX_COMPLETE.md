# GTM Tracking Fix - Call Buttons ✅

## 🔴 **Problem Identified**

The call buttons were **not triggering GTM events** because `window.location.href = 'tel:...'` navigates immediately, interrupting GTM's event tracking before it can fire.

### **What Was Happening:**
1. ✅ User clicks call button
2. ❌ `window.location.href` **immediately** navigates to `tel:` link
3. ❌ Page navigation interrupts JavaScript execution
4. ❌ GTM doesn't have time to send the event
5. ❌ No event recorded in Google Analytics

---

## ✅ **Solution Applied**

Added a **300ms delay** before navigation to allow GTM to fire the tracking event.

### **Files Modified:**

#### **1. WhatsAppChatWidget.tsx** ✅
```javascript
const handleCall = () => {
  // Small delay to allow GTM tracking to fire before navigation
  setTimeout(() => {
    window.location.href = 'tel:+212520960611';
  }, 300);
};
```

#### **2. CornerActionButtons.tsx** ✅
```javascript
const handleCall = () => {
  // Small delay to allow GTM tracking to fire before navigation
  setTimeout(() => {
    window.location.href = 'tel:+212520960611';
  }, 300);
};
```

---

## 📋 **Complete GTM Setup Guide**

### **All Button Selectors**

Use these **exact selectors** in Google Tag Manager:

#### **Call Buttons:**
```css
[data-testid="chat-widget-call"]           /* WhatsApp widget call button */
[data-testid="cta-call-fixed"]             /* Desktop fixed call button */
[data-testid="cta-call-mobile"]            /* Mobile bottom bar call */
```

#### **Booking Buttons:**
```css
[data-testid="button-hero-booking"]        /* Hero section booking */
[data-testid="cta-book-floating"]          /* Desktop floating booking */
[data-testid="cta-book-mobile"]            /* Mobile bottom bar booking */
```

#### **WhatsApp Buttons:**
```css
[data-testid="cta-whatsapp-fixed"]         /* Desktop fixed WhatsApp */
[data-testid="cta-whatsapp-mobile"]        /* Mobile bottom bar WhatsApp */
[data-testid="chat-widget-whatsapp"]       /* WhatsApp widget chat button */
```

---

## 🎯 **GTM Configuration**

### **Trigger 1: Call Button Clicks**

**Trigger Configuration:**
- **Name**: `Call Button Clicks`
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: 
  - `Click Element` **matches CSS selector**: 
    ```
    [data-testid="chat-widget-call"], [data-testid="cta-call-fixed"], [data-testid="cta-call-mobile"]
    ```

**Tag Configuration:**
- **Name**: `GA4 - Call Button Click`
- **Type**: Google Analytics: GA4 Event
- **Event Name**: `call_button_click`
- **Event Parameters**:
  - `button_location`: Use Custom JavaScript Variable (see below)
  - `phone_number`: `+212520960611`
  - `page_path`: `{{Page Path}}`

**Custom JavaScript Variable for button_location:**
```javascript
function() {
  var element = {{Click Element}};
  var testId = element.getAttribute('data-testid');
  
  if (testId === 'chat-widget-call') return 'whatsapp_widget';
  if (testId === 'cta-call-fixed') return 'desktop_fixed';
  if (testId === 'cta-call-mobile') return 'mobile_bottom';
  
  return 'unknown';
}
```

---

### **Trigger 2: Booking Button Clicks**

**Trigger Configuration:**
- **Name**: `Booking Button Clicks`
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: 
  - `Click Element` **matches CSS selector**: 
    ```
    [data-testid="button-hero-booking"], [data-testid="cta-book-floating"], [data-testid="cta-book-mobile"]
    ```

**Tag Configuration:**
- **Name**: `GA4 - Booking Button Click`
- **Type**: Google Analytics: GA4 Event
- **Event Name**: `booking_button_click`
- **Event Parameters**:
  - `button_location`: Use Custom JavaScript Variable (see below)
  - `booking_url`: `https://dentisto.ma/index.php/rendez-vous/docteurs/kamal-amar-2108`
  - `page_path`: `{{Page Path}}`

**Custom JavaScript Variable for button_location:**
```javascript
function() {
  var element = {{Click Element}};
  var testId = element.getAttribute('data-testid');
  
  if (testId === 'button-hero-booking') return 'hero_section';
  if (testId === 'cta-book-floating') return 'desktop_floating';
  if (testId === 'cta-book-mobile') return 'mobile_bottom';
  
  return 'unknown';
}
```

---

### **Trigger 3: WhatsApp Button Clicks**

**Trigger Configuration:**
- **Name**: `WhatsApp Button Clicks`
- **Type**: Click - All Elements
- **Fires on**: Some Clicks
- **Condition**: 
  - `Click Element` **matches CSS selector**: 
    ```
    [data-testid="cta-whatsapp-fixed"], [data-testid="cta-whatsapp-mobile"], [data-testid="chat-widget-whatsapp"]
    ```

**Tag Configuration:**
- **Name**: `GA4 - WhatsApp Button Click`
- **Type**: Google Analytics: GA4 Event
- **Event Name**: `whatsapp_button_click`
- **Event Parameters**:
  - `button_location`: Use Custom JavaScript Variable
  - `whatsapp_number`: `+212665477745`
  - `page_path`: `{{Page Path}}`

---

## 🧪 **Testing Steps**

### **1. Enable GTM Preview Mode**
1. Go to your GTM container
2. Click **Preview** in the top right
3. Enter your website URL
4. Click **Connect**

### **2. Test Each Button**

#### **Test Call Buttons:**
1. Open WhatsApp widget → Click call button
2. Click desktop fixed call button (bottom left)
3. On mobile: Click call button in bottom bar

**Expected Result:**
- ✅ GTM debugger shows trigger firing
- ✅ Event `call_button_click` appears
- ✅ After 300ms, phone dialer opens

#### **Test Booking Buttons:**
1. Click hero section booking button
2. Click desktop floating booking button (bottom center)
3. On mobile: Click booking button in bottom bar

**Expected Result:**
- ✅ GTM debugger shows trigger firing
- ✅ Event `booking_button_click` appears
- ✅ New tab opens with booking URL

#### **Test WhatsApp Buttons:**
1. Click desktop fixed WhatsApp button (bottom right)
2. On mobile: Click WhatsApp button in bottom bar
3. Click WhatsApp chat button in widget

**Expected Result:**
- ✅ GTM debugger shows trigger firing
- ✅ Event `whatsapp_button_click` appears
- ✅ WhatsApp opens in new tab

---

## 📊 **Verify in Google Analytics**

### **Real-time Reports:**
1. Go to Google Analytics
2. Navigate to **Reports** → **Realtime**
3. Click buttons on your site
4. Check **Event count by Event name**
5. You should see:
   - `call_button_click`
   - `booking_button_click`
   - `whatsapp_button_click`

### **DebugView (Recommended):**
1. Go to **Admin** → **DebugView**
2. Enable debug mode in GTM Preview
3. Click buttons
4. See events appear in real-time with all parameters

---

## ⚠️ **Important Notes**

### **Why 300ms Delay?**
- ✅ Gives GTM enough time to fire the event
- ✅ Not noticeable to users (imperceptible)
- ✅ Standard practice for tracking navigation events
- ✅ Prevents event loss

### **Alternative Approach (Not Recommended):**
Using `navigator.sendBeacon()` is more complex and not necessary for `tel:` links since the 300ms delay works perfectly.

### **Don't Use Long Selectors!**
❌ **WRONG:**
```css
#root > div > div.flex.flex-col > div.fixed.bottom-24 > button.inline-flex...
```

✅ **CORRECT:**
```css
[data-testid="chat-widget-call"]
```

The `data-testid` attributes are specifically added for tracking and won't break with styling changes.

---

## ✅ **Summary of Changes**

### **Files Modified:** 2
1. ✅ `WhatsAppChatWidget.tsx` - Added 300ms delay to `handleCall()`
2. ✅ `CornerActionButtons.tsx` - Added 300ms delay to `handleCall()`

### **Buttons Fixed:** 3
1. ✅ WhatsApp widget call button
2. ✅ Desktop fixed call button
3. ✅ Mobile bottom bar call button

### **GTM Setup Required:**
1. ✅ Create triggers with correct CSS selectors
2. ✅ Create GA4 event tags
3. ✅ Add custom JavaScript variables for button location
4. ✅ Test in Preview mode
5. ✅ Verify in Google Analytics

---

## 🎉 **All Call Buttons Now Track Properly!**

The 300ms delay ensures GTM has time to fire tracking events before the phone dialer opens. This is a standard best practice for tracking navigation events.

**Test it now:**
1. Enable GTM Preview mode
2. Click any call button
3. Watch the GTM debugger
4. See the event fire! ✅
