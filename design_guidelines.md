# Design Guidelines: Cabinet Dentaire Dr. Firdaous MOUSTAINE

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern healthcare and dental websites with emphasis on trust, professionalism, and accessibility. Primary references: Modern medical portals with clean aesthetics, Apple HIG for minimalist content presentation, and healthcare-specific UX patterns.

## Core Design Principles
- **Trust & Professionalism**: Clean, medical-grade aesthetic that instills confidence
- **Cultural Sensitivity**: Seamless trilingual experience respecting French, Arabic (RTL), and English conventions
- **Accessibility First**: High contrast, readable typography, clear navigation for all ages
- **Local Connection**: Emphasize Casablanca location throughout design elements

## Color Palette

### Light Mode
- **Primary**: 190 65% 45% (Calming medical teal - trust and cleanliness)
- **Secondary**: 200 15% 30% (Deep slate for text and headers)
- **Accent**: 160 55% 50% (Fresh mint for CTAs and highlights)
- **Background**: 0 0% 98% (Off-white for warmth)
- **Surface**: 0 0% 100% (Pure white for cards and sections)
- **Text Primary**: 200 15% 20%
- **Text Secondary**: 200 10% 45%

### Dark Mode
- **Primary**: 190 50% 55%
- **Background**: 200 15% 12%
- **Surface**: 200 12% 16%
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 0 0% 70%

## Typography

**Font Families**: 
- **Primary (Latin)**: 'Inter' for French/English - modern, highly legible
- **Secondary (Arabic)**: 'Cairo' or 'Tajawal' for Arabic content - professional medical-grade Arabic typeface
- **Accent**: 'Playfair Display' for elegant headings on homepage hero

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl font-bold (Playfair for hero, Inter for others)
- Page Title: text-4xl md:text-5xl font-bold
- Section Heading: text-3xl md:text-4xl font-semibold
- Subsection: text-2xl font-semibold
- Body Large: text-lg
- Body: text-base leading-relaxed
- Small: text-sm

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container padding: px-4 md:px-6 lg:px-8
- Card spacing: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8, gap-12

**Max Widths**:
- Content container: max-w-7xl
- Text content: max-w-4xl
- Forms: max-w-2xl

## Component Library

### Navigation
- **Desktop**: Horizontal top nav with service dropdown, language switcher (FR | AR | EN flags), sticky header with phone CTA
- **Mobile**: Hamburger menu, sticky "Call/WhatsApp" button at bottom
- **RTL**: Complete mirror for Arabic with right-aligned navigation

### Hero Section (Homepage)
- **Large hero image**: Professional clinic interior or Dr. MOUSTAINE welcoming patients (70vh height)
- Overlay gradient: from black/60% to transparent
- Centered text with tagline "Votre sourire, notre priorité" in large elegant serif
- Dual CTAs: Primary "Prendre Rendez-vous" (accent color), Secondary "Nos Services" (outline with backdrop-blur)
- Trust badge below CTAs: "4.8★ sur Google | 250+ avis patients"

### Service Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card design: White background, subtle shadow on hover, icon at top (teal), service name, 2-line description, "En savoir plus" link
- Icons: Use medical/dental icon set (tooth, implant, braces symbols)

### Service Detail Pages
- Hero image specific to service (e.g., whitening results, implant procedure)
- Breadcrumb navigation
- Content sections: Overview, Benefits, Process, FAQs
- Related services sidebar with internal linking
- Before/After section (where appropriate, with patient consent)

### About Page
- Two-column layout: Left - professional photo of Dr. MOUSTAINE, Right - biography, credentials
- Equipment showcase: Grid of modern technology images with captions
- Trust elements: Certifications, years of experience highlighted

### Testimonials
- Card carousel with 3 visible at desktop, 1 on mobile
- Patient name, rating stars, quote text, service mentioned
- Google reviews integration widget
- Language-specific testimonials in appropriate sections

### FAQ
- Accordion pattern with expand/collapse
- Categorized tabs: Rendez-vous, Traitements, Soins post-traitement, Paiement
- Search functionality for quick answers
- Structured data markup for SEO

### Blog
- Masonry grid for article previews (2-3 columns desktop)
- Article cards: Featured image, category tag, title, excerpt, read time, date
- Article page: Full-width featured image, author info, related articles sidebar
- Language filter for trilingual content

### Contact/Appointment
- Split layout: Left - embedded Google Maps (full height), Right - contact form and info
- Form fields: Nom, Téléphone, Email, Date souhaitée, Message
- Contact methods displayed: Phone (click-to-call), WhatsApp button (green), Email
- Office hours clearly listed
- Emergency contact highlighted

### Footer
- Four columns: About/Services/Quick Links/Contact
- Social media icons (if available)
- Language switcher repeated
- Privacy policy, terms links
- Copyright and dental association logos

## RTL Implementation for Arabic
- Complete layout mirror for navigation, grids, forms
- Right-aligned text and headings
- Icons and images flip appropriately
- Ensure Arabic typography spacing is optimized
- Date formats and numbers follow Arabic conventions

## Images

### Required Images:
1. **Homepage Hero**: Modern clinic reception or Dr. MOUSTAINE with patient (warm, professional)
2. **Service Icons**: 9 custom dental icons (tooth, crown, implant, braces, children, gums, etc.)
3. **Service Pages**: Each service needs 1-2 relevant images (procedures, results, equipment)
4. **About Page**: Professional portrait of Dr. MOUSTAINE, clinic interior, equipment photos (3-4 images)
5. **Testimonial Avatars**: Generic patient placeholders or actual photos with consent
6. **Blog Featured Images**: Stock dental health images for each article

### Image Treatment:
- Use subtle rounded corners (rounded-lg to rounded-xl)
- Apply subtle shadows on cards
- Hero images: slight darkening overlay for text readability
- Optimize for web performance (WebP format)

## Animations & Interactions
- Minimal, purposeful animations only
- Smooth scroll to sections
- Fade-in on scroll for service cards and testimonials
- Hover lift effect on cards (transform scale 1.02)
- Language switch: smooth content fade transition
- No distracting parallax or complex animations

## Mobile Optimization
- Sticky bottom bar: "Appeler" and "WhatsApp" buttons on mobile
- Hamburger menu with smooth slide-in
- Service cards stack to single column
- Touch-friendly button sizes (min 44px height)
- Simplified navigation for smaller screens
- Map scrollable on mobile (not full height)

## Trust & Credibility Elements
- Google review rating prominently displayed
- Years of experience badge
- Patient count ("1000+ patients traités")
- Modern equipment callouts
- Professional associations logos
- Secure booking form (lock icon)

## WhatsApp Integration
- Floating WhatsApp button (bottom-right, green, subtle pulse animation)
- Pre-filled message: "Bonjour, je souhaiterais prendre rendez-vous..."
- Available in all three languages with appropriate greetings

This design creates a trustworthy, modern, and accessible dental clinic website that serves French, Arabic, and English-speaking patients while emphasizing local Casablanca SEO and professional healthcare aesthetics.