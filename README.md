# BRANHARD E-Commerce Website

A premium, modern e-commerce platform built with React, Vite, Tailwind CSS, and Lucide icons. Fully responsive with shopping cart functionality, product search, and professional UI/UX.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
```bash
cd branhard-ecommerce
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

The website will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
branhard-ecommerce/
├── src/
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles & Tailwind imports
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
└── README.md               # This file
```

---

## ✨ Features Implemented

### Homepage Sections
- ✅ Announcement bar with promotional message
- ✅ Sticky navigation with logo, menu items, search, cart
- ✅ Full-screen hero section with CTA
- ✅ Featured collection (4 products)
- ✅ Brand statement section
- ✅ Collection banner with image
- ✅ Best sellers grid (6+ products)
- ✅ About Branhard section
- ✅ Newsletter subscription
- ✅ Premium footer with links

### Product Features
- ✅ Product cards with hover effects
- ✅ Color selector (visual swatches)
- ✅ Size selector
- ✅ Real Nigerian pricing (₦)
- ✅ Product images and descriptions
- ✅ Add to cart functionality

### Shopping Cart
- ✅ Persistent cart (localStorage)
- ✅ Add/remove products
- ✅ Quantity adjustment
- ✅ Real-time subtotal and total
- ✅ Free shipping threshold (₦50,000+)
- ✅ Sliding cart sidebar

### Search Functionality
- ✅ Real-time product search
- ✅ Search by name, description, category
- ✅ Filtered results display
- ✅ Smooth search/hide toggle

### Design & UX
- ✅ Responsive mobile-first design
- ✅ Smooth animations and transitions
- ✅ Premium black/white color scheme
- ✅ Professional typography
- ✅ Hover effects on products
- ✅ Intuitive navigation

### Technical
- ✅ React 18 with hooks
- ✅ Tailwind CSS for styling
- ✅ Lucide icons for UI elements
- ✅ localStorage for cart persistence
- ✅ Context API for state management
- ✅ Fully responsive (mobile, tablet, desktop)

---

## 🎨 Customization Guide

### 1. Replace Product Images

**Option A: Use your own images**

Edit `src/App.jsx` and find the `PRODUCTS` array:

```javascript
const PRODUCTS = [
  {
    id: 1,
    name: 'Oversized Essential Tee',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1554521666-7dedc8ab4d3f?w=800&h=900&fit=crop',
    // ... rest of product
  },
  // ... more products
];
```

Replace the image URLs with your own:
```javascript
image: 'https://your-image-url.com/image1.jpg',
hoverImage: 'https://your-image-url.com/image1-hover.jpg',
```

**Option B: Use local images**

1. Create a `public/images/` folder
2. Add your product images there
3. Reference them like this:
```javascript
image: '/images/tee-1.jpg',
hoverImage: '/images/tee-1-hover.jpg',
```

### 2. Update Product Information

In the `PRODUCTS` array, customize:

```javascript
{
  id: 1,
  name: 'Your Product Name',           // Product name
  price: 12500,                         // Price in Naira (₦)
  category: 'tees',                     // Category for filtering
  colors: ['Black', 'White'],           // Available colors
  sizes: ['XS', 'S', 'M', 'L', 'XL'],  // Available sizes
  description: 'Your description',      // Short product description
  details: 'Material details',          // Product specifications
}
```

### 3. Customize Brand Information

**Update brand name/messaging:**

Find these sections in `src/App.jsx`:

- **Announcement bar** (line ~270):
```javascript
"BRANHARD — NEW COLLECTION AVAILABLE"
```

- **Hero section text** (line ~440):
```javascript
"BUILT DIFFERENT."
"Premium streetwear designed for those who move differently."
```

- **Brand statement** (line ~540):
```javascript
"WE DON'T FOLLOW TRENDS. WE BUILD IDENTITY."
```

- **About section** (line ~800):
Update the story and description to match your brand

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      brand: {
        black: '#000000',      // Primary color
        white: '#FFFFFF',      // Secondary color
        charcoal: '#36454F',   // Accent color
      },
    },
  },
}
```

Common Tailwind colors already available:
- `bg-black`, `bg-white`, `bg-gray-900`, etc.
- `text-black`, `text-white`, `text-gray-600`, etc.

### 5. Update Navigation Links

In the `Header` component, update nav links to point to your actual pages:

```javascript
<a href="/shop" className="...">SHOP</a>
<a href="/collections" className="...">COLLECTIONS</a>
<a href="/about" className="...">ABOUT</a>
<a href="/contact" className="...">CONTACT</a>
```

### 6. Update Social Media Links

In the `Footer` component:

```javascript
<a href="https://instagram.com/yourusername" className="...">
  Instagram
</a>
<a href="https://tiktok.com/@yourusername" className="...">
  TikTok
</a>
```

### 7. Customize Newsletter

Update the newsletter section copy and functionality (around line ~775):

```javascript
<h2>JOIN THE BRANHARD WORLD</h2>
<p>Get exclusive drops, stories, and insider access...</p>
```

You can integrate with email services like Mailchimp, SendGrid, etc.

### 8. Hero and Banner Images

Replace these background images:

**Hero section:**
```javascript
backgroundImage: 'url(https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1600&h=1200&fit=crop)',
```

**Collection banner:**
```javascript
backgroundImage: 'url(https://images.unsplash.com/photo-1552830820-6b2ecdc0f26f?w=1600&h=1200&fit=crop)',
```

**About section:**
```javascript
src="https://images.unsplash.com/photo-1552830820-6b2ecdc0f26f?w=600&h=600&fit=crop"
```

---

## 💾 Data Persistence

### Cart Data (localStorage)

Cart data automatically saves to the browser's localStorage and persists across sessions. To clear:

```javascript
// In browser console
localStorage.removeItem('branhard_cart');
```

---

## 📱 Responsive Design

The site is fully responsive:

- **Mobile** (< 640px): Single column layouts, stacked navigation
- **Tablet** (640px - 1024px): Two-column grids, optimized spacing
- **Desktop** (> 1024px): Full multi-column layouts, enhanced spacing

All breakpoints are handled by Tailwind CSS automatically.

---

## 🔧 Advanced Customization

### Adding More Products Programmatically

```javascript
const PRODUCTS = [
  // ... existing products
  {
    id: 9,
    name: 'Your New Product',
    price: 25000,
    image: 'https://your-url.com/product.jpg',
    hoverImage: 'https://your-url.com/product-hover.jpg',
    category: 'hoodies',
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium product description',
    details: 'Material and care information',
  },
];
```

### Modifying Animations

Edit the `<style>` tag in `BranhardStore` component:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);  /* Increase for bigger movement */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;  /* Adjust duration */
}
```

### Adding More Sections

Add new components before the closing tags in `BranhardStore`:

```javascript
return (
  <CartContext.Provider value={{ cart, setCart }}>
    <div className="min-h-screen bg-white">
      <Header {...props} />
      <CartSidebar {...props} />
      
      {/* Add new sections here */}
      <YourNewSection />
      
      <Footer />
    </div>
  </CartContext.Provider>
);
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys automatically

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `dist/` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repository for auto-deployment

### Deploy to Other Platforms

Any platform supporting Node.js can host this:
- AWS Amplify
- GitHub Pages (requires additional config)
- DigitalOcean
- Heroku
- Railway.app

---

## 🔐 Environment Variables

For sensitive data (API keys, email service credentials), create a `.env` file:

```
VITE_STRIPE_PUBLIC_KEY=your_key_here
VITE_MAILCHIMP_API_KEY=your_key_here
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
```

**Never commit `.env` files!** Add to `.gitignore`:

```
.env
.env.local
.env.*.local
```

---

## 📦 Dependencies

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful SVG icons
- **PostCSS & Autoprefixer** - CSS processing

All dependencies are lightweight and production-ready.

---

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Images not loading
- Check image URLs are correct
- Ensure CORS is enabled on image hosting
- Use HTTPS for image URLs

### Styling not applying
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Cart data not persisting
- Check browser's localStorage is enabled
- Try in a different browser
- Clear browser cache

---

## 📞 Support & Next Steps

### To add payment processing:
- Integrate Stripe
- Add checkout page
- Handle payment validation

### To add backend:
- Create API with Node.js/Express
- Connect to database (MongoDB, PostgreSQL)
- Add user authentication

### To add more features:
- Product filtering/categories
- User accounts & wishlist
- Admin dashboard
- Analytics integration

---

## 📝 License

Built for BRANHARD. Premium streetwear for those who move differently.

---

## ✅ Checklist for Launch

- [ ] Replace all placeholder images with your products
- [ ] Update product prices and details
- [ ] Customize brand messaging and copy
- [ ] Update social media links
- [ ] Set up email newsletter integration
- [ ] Add payment processing (Stripe, Paystack, etc.)
- [ ] Create backend for order management
- [ ] Add customer authentication
- [ ] Test on mobile devices
- [ ] Deploy to production
- [ ] Set up analytics (Google Analytics)
- [ ] Configure custom domain

---

**Made with ❤️ for BRANHARD**

