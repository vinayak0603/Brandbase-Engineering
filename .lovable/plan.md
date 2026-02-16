
# ShapeCrafters Website Clone

A full clone of the ShapeCrafters plastic injection moulding company website — a multi-page, responsive business website with a professional industrial design.

## Design & Branding
- **Color scheme**: Dark charcoal/navy primary, green (#1DB954-ish) accents, white backgrounds
- **Typography**: Clean sans-serif fonts, bold headings
- **Style**: Professional industrial look with hero images, card layouts, and clean sections

## Pages

### 1. Home Page (`/`)
- **Sticky navigation bar** with logo, links (Services, Industries, Gallery, About, Contact), and dropdown menus for Services & Industries
- **Hero section** with full-width background image overlay, tagline "Complete Plastic Injection Moulding Solutions", headline, and CTA button
- **Our Services** — 4 service cards with icons (Injection Moulding, Contract Manufacturing, Precision Tooling, Secondary Operations) with descriptions
- **Precision Tooling section** — text + image grid showcasing facilities
- **Industries We Cater** — category cards (Packaging, Consumer Electronics, Household Products, Architectural & Furniture Fitting, Toys)
- **Associate Partners** — partner logos with descriptions (Kalyani, I-Kay, PPD, Inaylak)
- **CTA banner** — "We Mould Innovation & Craft Possibilities"
- **Footer** with logo, about text, social media links, resource links, and company links

### 2. Services Page (`/services`)
- Hero banner with background image
- **Custom Injection Moulding** — vertical timeline/steps layout with icons (Initial Consultation → Product Design → Prototyping → Mould Building → Injection Moulding → Value Added Manufacturing)
- **Contract Manufacturing** section with process steps
- **Precision Tooling** section with capabilities
- **Secondary Operations** section with services list
- Footer

### 3. Industries Page (`/industries`)
- Sections for each industry with tabbed content:
  - **Packaging** (Cosmetic, Pharma, Food & Beverage, Homecare) with tab-switching images
  - **Consumer Electronics**
  - **Household Products**
  - **Architectural & Furniture Fittings**
  - **Toys**
- Each section has descriptive text and relevant imagery

### 4. Gallery Page (`/gallery`)
- Masonry/grid photo gallery showcasing manufacturing capabilities and products
- Lightbox functionality for viewing images larger

### 5. About Page (`/about`)
- **Why ShapeCrafters** — 3 value propositions with green headings (Legacy, Precision, Innovation)
- **A Legacy of Excellence** — company story with logo and mission
- Team/leadership information
- Facility details and certifications
- Footer

### 6. Contact Page (`/contact`)
- Contact info sidebar (email, phone, address)
- Contact form with fields: First Name, Last Name, Email, Phone, Subject, Message
- Form validation and success/error toast notifications
- Footer

## Shared Components
- **Navbar** — sticky with logo, nav links, dropdown menus for Services & Industries, mobile hamburger menu
- **Footer** — logo, about description, social media icons, Resources links, Company links, copyright
- **Responsive design** — fully mobile-friendly across all pages

## Technical Notes
- No backend needed — this is a static informational website
- Contact form will show a toast notification on submit (no actual email sending without backend)
- Images will be referenced from the original site or use placeholder images
- Smooth scroll animations and hover effects to match the original
