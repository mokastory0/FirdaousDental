# Crown Pricing Article Implementation Guide

## Overview
Creating a comprehensive SEO-optimized article about crown pricing in Casablanca in 3 languages (French, Arabic, English).

## Target Keywords
- **French**: couronne, bridge, prix d'une couronne, prix d'une couronne à Casablanca, prix d'une couronne au Maroc
- **Arabic**: سعر التاج السني, سعر التاج السني في الدار البيضاء, سعر التاج السني في المغرب
- **English**: dental crown price, crown price Casablanca, crown price Morocco

## Price Range
**3000 DH - 5000 DH** depending on material type

## Implementation Steps

### 1. Create Dedicated Page (`/services/crowns/pricing`)
- Route: `/fr/services/crowns/pricing`, `/ar/services/crowns/pricing`, `/en/services/crowns/pricing`
- Component: `CrownPricingPage.tsx`

### 2. Content Structure

#### Header Section
- Title: "Quel est le Prix d'une Couronne Dentaire à Casablanca ?"
- Subtitle: Guide complet des tarifs
- Price badge: "3000-5000 DH"

#### Section 1: Price Range by Material
1. **Céramo-Métallique**: 3000-3500 DH
2. **Céramique Pure**: 4000-4500 DH  
3. **Zircone**: 4500-5000 DH

#### Section 2: Bridge Prices
1. **3 éléments** (1 dent): 9000-12000 DH
2. **4 éléments** (2 dents): 12000-16000 DH
3. **Bridge complet**: Sur devis

#### Section 3: Price Factors
- Material choice
- Tooth location
- Case complexity
- Laboratory quality
- Practitioner experience

#### Section 4: What's Included
- Consultation
- X-rays
- Tooth preparation
- Impressions
- Temporary crown
- Final crown fabrication
- Placement & adjustments
- Follow-up
- Warranty

#### Section 5: FAQ (5 questions)
1. Why are zirconia crowns more expensive?
2. Does price include root canal?
3. Are there hidden fees?
4. Can I get a free quote?
5. Do insurance companies reimburse?

#### CTA Section
- Free consultation offer
- Booking button

### 3. Add to FAQ Page
Add crown pricing question to main FAQ with link to detailed article

### 4. Update Crowns Service Page
Add prominent pricing CTA card linking to pricing article

### 5. SEO Optimization
- Meta title: "Prix d'une Couronne Dentaire à Casablanca | 3000-5000 DH"
- Meta description: "Découvrez les prix des couronnes dentaires à Casablanca. Guide complet: 3000-5000 DH selon le matériau. Devis gratuit chez Dr. Firdaous MOUSTAINE."
- H1: "Quel est le Prix d'une Couronne Dentaire à Casablanca ?"
- Schema markup: Medical procedure pricing

### 6. Mobile & Desktop UX
- Responsive design
- Price cards with icons
- Sticky CTA button on mobile
- Easy-to-scan layout
- Visual hierarchy

### 7. Link Placement on Crowns Page
- Prominent card after intro section
- Icon: 💰 or price tag
- Title: "Combien coûte une couronne ?"
- Button: "Voir les tarifs détaillés"

## Files to Create/Modify

1. **NEW**: `client/src/pages/CrownPricingPage.tsx`
2. **MODIFY**: `client/src/App.tsx` (add route)
3. **MODIFY**: `client/src/pages/ServiceCrownsPage.tsx` (add pricing CTA)
4. **MODIFY**: `client/src/pages/FAQPage.tsx` (add pricing FAQ)
5. **MODIFY**: `client/src/data/translations.ts` (add translations)

## Next Steps
1. Complete CrownPricingPage component with full content
2. Add translations to translations.ts
3. Add route to App.tsx
4. Update ServiceCrownsPage with pricing CTA
5. Add FAQ entry
6. Test on mobile and desktop
7. Verify SEO optimization

## Design Notes
- Use Card components for price ranges
- CheckCircle2 icons for included items
- Info icons for explanatory sections
- Gradient background for CTA
- Mobile-first responsive design
