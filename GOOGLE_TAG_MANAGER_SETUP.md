# Google Tag Manager Setup Guide

## 📊 Complete Event Tracking Configuration

This guide will help you set up Google Tag Manager (GTM) to track all important user interactions on your dental clinic website.

### ⚡ Quick Overview

**Setup Steps**:
1. ✅ Enable 3 built-in variables (Click Element, Click Text, Click URL)
2. ✅ Create 1 custom variable (Data TestID)
3. ✅ Create 12 triggers (one for each button/action)
4. ✅ Create 12 GA4 tags (one for each event)

**Total Time**: ~30-45 minutes

> **Note**: We use GTM's built-in variables instead of creating custom ones - this simplifies setup and improves performance!

---

## 🎯 Events to Track

### **1. Call Buttons**
- Hero section call button
- Mobile bottom bar call button
- Desktop corner call button
- Chat window call button

### **2. WhatsApp Buttons**
- Mobile bottom bar WhatsApp button
- Desktop corner WhatsApp button
- Chat window WhatsApp button

### **3. Booking Buttons**
- Mobile bottom bar booking button
- Desktop side booking button

### **4. Maps Button**
- Hero section Maps button

---

## 📋 Step-by-Step GTM Setup

### **Step 1: Enable Built-In Variables**

1. Go to **Variables** → **Built-In Variables** → **Configure**
2. In the "Clicks" section, enable these variables:
   - ✅ **Click Element**
   - ✅ **Click Text**
   - ✅ **Click URL**
   - ✅ **Click Classes** (optional, but useful for debugging)
3. Click **Save**

> **Note**: These built-in variables are maintained by Google and optimized for performance. No need to create custom versions!

---

### **Step 2: Create Custom Variable (Data TestID)**

We need ONE custom variable to extract the `data-testid` attribute:

#### **Data TestID Variable**
1. Go to **Variables** → **User-Defined Variables** → **New**
2. Name: `Data TestID`
3. Variable Type: **DOM Element** (under "Page Elements")
4. Configuration:
   - **Selection Method**: CSS Selector
   - **Element Selector**: `{{Click Element}}` (use the built-in variable)
   - **Attribute Name**: `data-testid`
5. Click **Save**

> **What this does**: Extracts the `data-testid` attribute from the clicked element, allowing us to identify which specific button was clicked.

---

### **Step 3: Create Triggers**

#### **3.1 Hero Call Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Hero Call Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="button-hero-phone"]`
6. Save

#### **3.2 Hero Maps Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Hero Maps Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="button-hero-maps"]`
6. Save

#### **3.3 Mobile Call Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Mobile Call Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-call-mobile"]`
6. Save

#### **3.4 Desktop Call Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Desktop Call Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-call-fixed"]`
6. Save

#### **3.5 Mobile WhatsApp Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Mobile WhatsApp Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-whatsapp-mobile"]`
6. Save

#### **3.6 Desktop WhatsApp Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Desktop WhatsApp Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-whatsapp-fixed"]`
6. Save

#### **3.7 Mobile Booking Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Mobile Booking Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-book-mobile"]`
6. Save

#### **3.8 Desktop Booking Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Desktop Booking Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-book-floating"]`
6. Save

#### **3.9 Chat Widget WhatsApp Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Chat WhatsApp Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="chat-widget-whatsapp"]`
6. Save

#### **3.10 Chat Widget Call Button Trigger**
1. Go to **Triggers** → **New**
2. Name: `Click - Chat Call Button`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="chat-widget-call"]`
6. Save

#### **3.11 Chat Widget Open Trigger**
1. Go to **Triggers** → **New**
2. Name: `Chat Widget - Opened`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="cta-whatsapp-mobile"], [data-testid="cta-whatsapp-fixed"]`
   - AND `Click Element` does NOT contain `chat-widget-close`
6. Save

#### **3.12 Chat Widget Close Trigger**
1. Go to **Triggers** → **New**
2. Name: `Chat Widget - Closed`
3. Trigger Type: **Click - All Elements**
4. This trigger fires on: **Some Clicks**
5. Conditions:
   - `Click Element` matches CSS selector `[data-testid="chat-widget-close"]`
6. Save

---

### **Step 4: Create Tags (Google Analytics 4)**

#### **4.1 Hero Call Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Hero Call Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_hero_call`
6. Event Parameters:
   - `button_location`: `hero`
   - `button_type`: `call`
   - `phone_number`: `+212520960611`
7. Triggering: `Click - Hero Call Button`
8. Save

#### **4.2 Hero Maps Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Hero Maps Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_maps`
6. Event Parameters:
   - `button_location`: `hero`
   - `destination`: `google_maps`
7. Triggering: `Click - Hero Maps Button`
8. Save

#### **4.3 Mobile Call Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Mobile Call Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_mobile_call`
6. Event Parameters:
   - `button_location`: `mobile_bottom_bar`
   - `button_type`: `call`
   - `phone_number`: `+212520960611`
7. Triggering: `Click - Mobile Call Button`
8. Save

#### **4.4 Desktop Call Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Desktop Call Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_desktop_call`
6. Event Parameters:
   - `button_location`: `bottom_left_corner`
   - `button_type`: `call`
   - `phone_number`: `+212520960611`
7. Triggering: `Click - Desktop Call Button`
8. Save

#### **4.5 Mobile WhatsApp Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Mobile WhatsApp Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_mobile_whatsapp`
6. Event Parameters:
   - `button_location`: `mobile_bottom_bar`
   - `button_type`: `whatsapp`
   - `action`: `toggle_chat`
7. Triggering: `Click - Mobile WhatsApp Button`
8. Save

#### **4.6 Desktop WhatsApp Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Desktop WhatsApp Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_desktop_whatsapp`
6. Event Parameters:
   - `button_location`: `bottom_right_corner`
   - `button_type`: `whatsapp`
   - `action`: `toggle_chat`
7. Triggering: `Click - Desktop WhatsApp Button`
8. Save

#### **4.7 Mobile Booking Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Mobile Booking Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_mobile_booking`
6. Event Parameters:
   - `button_location`: `mobile_bottom_bar`
   - `button_type`: `booking`
   - `destination`: `dentisto`
7. Triggering: `Click - Mobile Booking Button`
8. Save

#### **4.8 Desktop Booking Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Desktop Booking Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_desktop_booking`
6. Event Parameters:
   - `button_location`: `right_side_center`
   - `button_type`: `booking`
   - `destination`: `dentisto`
7. Triggering: `Click - Desktop Booking Button`
8. Save

#### **4.9 Chat WhatsApp Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Chat WhatsApp Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_chat_whatsapp`
6. Event Parameters:
   - `button_location`: `chat_widget`
   - `button_type`: `whatsapp`
   - `action`: `open_whatsapp`
   - `phone_number`: `+212665477745`
7. Triggering: `Click - Chat WhatsApp Button`
8. Save

#### **4.10 Chat Call Button Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Chat Call Button`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `click_chat_call`
6. Event Parameters:
   - `button_location`: `chat_widget`
   - `button_type`: `call`
   - `phone_number`: `+212520960611`
7. Triggering: `Click - Chat Call Button`
8. Save

#### **4.11 Chat Widget Opened Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Chat Widget Opened`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `chat_widget_opened`
6. Event Parameters:
   - `widget_type`: `whatsapp_chat`
   - `action`: `open`
7. Triggering: `Chat Widget - Opened`
8. Save

#### **4.12 Chat Widget Closed Tag**
1. Go to **Tags** → **New**
2. Name: `GA4 Event - Chat Widget Closed`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: `[Your GA4 Configuration Tag]`
5. Event Name: `chat_widget_closed`
6. Event Parameters:
   - `widget_type`: `whatsapp_chat`
   - `action`: `close`
7. Triggering: `Chat Widget - Closed`
8. Save

---

## 📊 Quick Reference: All Data TestIDs

### **Hero Section**
```html
data-testid="button-hero-phone"    → Call button
data-testid="button-hero-maps"     → Maps button
```

### **Mobile Bottom Bar**
```html
data-testid="cta-call-mobile"      → Call button (left)
data-testid="cta-book-mobile"      → Booking button (center)
data-testid="cta-whatsapp-mobile"  → WhatsApp button (right)
```

### **Desktop Corner Buttons**
```html
data-testid="cta-call-fixed"       → Call button (bottom-left)
data-testid="cta-book-floating"    → Booking button (right-center)
data-testid="cta-whatsapp-fixed"   → WhatsApp button (bottom-right)
```

### **Chat Widget**
```html
data-testid="chat-widget-whatsapp" → WhatsApp button
data-testid="chat-widget-call"     → Call button
data-testid="chat-widget-close"    → Close X button
data-testid="chat-widget-expanded" → Widget container
```

---

## 🎯 Google Ads Conversion Tracking

### **For Google Ads Campaigns**

If you're running Google Ads, create conversion actions:

#### **1. Phone Call Conversions**
**Conversion Action Name**: `Phone Call - All Sources`
**Category**: Lead
**Value**: Assign appropriate value
**Count**: One

**Events to Track**:
- `click_hero_call`
- `click_mobile_call`
- `click_desktop_call`
- `click_chat_call`

#### **2. WhatsApp Conversions**
**Conversion Action Name**: `WhatsApp Contact`
**Category**: Lead
**Value**: Assign appropriate value
**Count**: One

**Events to Track**:
- `click_chat_whatsapp`

#### **3. Booking Conversions**
**Conversion Action Name**: `Booking Attempt`
**Category**: Lead
**Value**: Assign appropriate value
**Count**: One

**Events to Track**:
- `click_mobile_booking`
- `click_desktop_booking`

#### **4. Maps/Location Conversions**
**Conversion Action Name**: `Location Search`
**Category**: Engagement
**Value**: Lower value
**Count**: One

**Events to Track**:
- `click_maps`

---

## 🔧 Advanced Setup: Enhanced Conversions

### **Add User Data Variables** (Optional)

If collecting user data (email, phone), add these variables:

1. **Email Variable**
   - Type: Data Layer Variable
   - Data Layer Variable Name: `user_email`

2. **Phone Variable**
   - Type: Data Layer Variable
   - Data Layer Variable Name: `user_phone`

---

## 📈 Testing Your Setup

### **Step 1: Enable Preview Mode**
1. In GTM, click **Preview**
2. Enter your website URL
3. Click **Connect**

### **Step 2: Test Each Button**
1. Click each button on your site
2. Check GTM Preview panel
3. Verify correct tag fires
4. Check event parameters

### **Step 3: Verify in GA4**
1. Go to GA4 → **Reports** → **Realtime**
2. Click buttons on your site
3. See events appear in real-time
4. Check event parameters are correct

### **Step 4: Debug Mode**
1. Install **Google Analytics Debugger** Chrome extension
2. Enable debugger
3. Open browser console
4. Click buttons and verify events

---

## 📋 Event Summary Table

| Button | Location | Event Name | data-testid |
|--------|----------|------------|-------------|
| Hero Call | Hero section | `click_hero_call` | `button-hero-phone` |
| Hero Maps | Hero section | `click_maps` | `button-hero-maps` |
| Mobile Call | Bottom bar | `click_mobile_call` | `cta-call-mobile` |
| Mobile Book | Bottom bar | `click_mobile_booking` | `cta-book-mobile` |
| Mobile WhatsApp | Bottom bar | `click_mobile_whatsapp` | `cta-whatsapp-mobile` |
| Desktop Call | Bottom-left | `click_desktop_call` | `cta-call-fixed` |
| Desktop Book | Right-center | `click_desktop_booking` | `cta-book-floating` |
| Desktop WhatsApp | Bottom-right | `click_desktop_whatsapp` | `cta-whatsapp-fixed` |
| Chat WhatsApp | Chat widget | `click_chat_whatsapp` | `chat-widget-whatsapp` |
| Chat Call | Chat widget | `click_chat_call` | `chat-widget-call` |
| Chat Open | - | `chat_widget_opened` | - |
| Chat Close | Chat widget | `chat_widget_closed` | `chat-widget-close` |

---

## 🎯 Recommended Google Ads Goals

### **Primary Conversions** (High Value)
1. **Phone Calls**: All call button clicks
2. **WhatsApp Chats**: Chat widget WhatsApp button
3. **Bookings**: All booking button clicks

### **Secondary Conversions** (Medium Value)
1. **Chat Opens**: Chat widget opened
2. **Maps Clicks**: Location search

### **Engagement Metrics** (Low Value)
1. **Chat Closes**: User engagement time
2. **Button Interactions**: Overall engagement

---

## 📝 Notes

1. **Replace** `[Your GA4 Configuration Tag]` with your actual GA4 config tag
2. **Test thoroughly** in Preview mode before publishing
3. **Submit** container after testing
4. **Monitor** events in GA4 Realtime for 24-48 hours
5. **Adjust** event parameters as needed for your reporting

---

## 🚀 Quick Start Checklist

- [ ] **Step 1**: Enable built-in variables (Click Element, Click Text, Click URL)
- [ ] **Step 2**: Create Data TestID custom variable
- [ ] **Step 3**: Create all 12 triggers
- [ ] **Step 4**: Create all 12 tags
- [ ] Test in Preview mode
- [ ] Verify in GA4 Realtime
- [ ] Submit container
- [ ] Set up Google Ads conversions
- [ ] Monitor for 48 hours
- [ ] Optimize based on data

---

## 📞 Support

If you need help:
1. Check GTM Preview console for errors
2. Verify data-testid attributes exist in HTML
3. Test with GA4 DebugView
4. Check browser console for JavaScript errors

---

**All events are now ready to track! 🎉**
