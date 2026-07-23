# Accredian Enterprise Landing Page

A production-ready Next.js clone of the Accredian Enterprise landing page built with React 19, TypeScript 5.9, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **React 19** with Hooks
- **TypeScript 5.9.x**
- **Tailwind CSS 3.4**
- **Fully Responsive Design**

## ✨ Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Semantic HTML with accessibility  
✅ SEO metadata and Open Graph tags  
✅ Smooth scrolling navigation  
✅ Reusable components  
✅ Lead form with API integration  
✅ Production-ready code  
✅ TypeScript strict mode  
✅ Modern animations  
✅ Type-safe data management  

## 📦 Quick Start

### Installation

```bash
git clone https://github.com/Sjm2006/accredian-enterprise-landing.git
cd accredian-enterprise-landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
accredian-enterprise-landing/
├── app/
│   ├── layout.tsx              # Root layout with SEO
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   └── api/
│       └── leads/
│           └── route.ts        # Lead form API endpoint
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Footer.tsx              # Footer component
│   └── sections/
│       ├── Hero.tsx            # Hero section
│       ├── Programs.tsx        # Programs showcase
│       ├── Features.tsx        # Key features
│       ├── Process.tsx         # Implementation process
│       ├── Partners.tsx        # Partner logos
│       ├── Testimonials.tsx    # Client testimonials
│       ├── LeadForm.tsx        # Lead generation form
│       ├── FAQ.tsx             # FAQ accordion
│       └── CTA.tsx             # Call-to-action section
├── types/
│   └── index.ts                # TypeScript type definitions
├── data/
│   ├── programs.ts             # Programs data
│   ├── features.ts             # Features data
│   ├── process.ts              # Process steps
│   ├── partners.ts             # Partners data
│   ├── testimonials.ts         # Testimonials
│   └── faq.ts                  # FAQ items
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🔌 API Routes

### POST `/api/leads`

Submit a lead with validation:

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1-234-567-8900"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Lead submitted successfully. We will contact you soon."
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

## 🧩 Components

### Navbar
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Brand logo with gradient
- Navigation links and CTA button

### Hero Section
- Eye-catching headline with gradient text
- Value proposition
- Statistics/social proof
- CTA buttons
- Background visual effects

### Programs
- 6 featured learning programs
- Program cards with duration and level
- Responsive grid layout
- Hover effects

### Features
- 6 key features with icons
- Grid layout
- Hover animations
- Clear descriptions

### Process
- 4-step implementation flow
- Visual progression with icons
- Step descriptions
- Responsive design

### Partners
- Partner logo grid (6 partners)
- Hover animations
- Responsive layout

### Testimonials
- 4 customer testimonials
- 5-star ratings
- Client information
- Smooth animations

### Lead Form
- Input validation (name, email, company, phone)
- API integration
- Success/error messages
- Loading states
- Responsive design

### FAQ
- Accordion-style questions
- Expandable answers with animations
- 6 common questions
- Smooth expand/collapse

### CTA Section
- Strong value proposition
- Action buttons
- Gradient background

### Footer
- Company information
- Quick links
- Social media links
- Copyright and legal links

## 📱 Responsive Design

- **Mobile:** 320px and up
- **Tablet:** 768px and up
- **Desktop:** 1024px and up
- **Large Desktop:** 1280px and up

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and attributes
- Keyboard navigation support
- Color contrast compliance
- Focus indicators
- Alt text ready for images

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  'primary': '#0055CC',
  'primary-dark': '#003D99',
  'secondary': '#FF6B35',
  // ...
}
```

### Data
Edit files in `data/` directory to update:
- Programs
- Features
- Process steps
- Partners
- Testimonials
- FAQ items

## ⚡ Performance

- Code splitting with Next.js
- Lazy loading of components
- Optimized CSS with Tailwind
- Fast page loads
- SEO optimized

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

```bash
vercel deploy
```

### Other Platforms

1. Build: `npm run build`
2. Start: `npm start`

## 🔐 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT - Feel free to use this project as a template.

## 💬 Support

For issues or questions, please refer to the GitHub repository.

---

**Built with ❤️ for enterprise learning and development**