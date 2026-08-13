# BRANHARD Website — Quick Customization Reference

## 🎯 5 Things to Change First

### 1. Update Products (App.jsx - Lines 10-100)

```javascript
// FIND THIS:
const PRODUCTS = [
  {
    id: 1,
    name: 'Oversized Essential Tee',
    price: 12500,
    image: 'https://...',
    hoverImage: 'https://...',
    category: 'tees',
    colors: ['Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: '...',
    details: '...',
  },
  // ... more products
];

// CHANGE TO YOUR PRODUCTS:
const PRODUCTS = [
  {
    id: 1,
    name: 'Your Branhard Product Name',
    price: YOUR_PRICE_IN_NAIRA,
    image: '/images/your-product-1.jpg',
    hoverImage: '/images/your-product-1-hover.jpg',
    category: 'tees', // or 'hoodies', 'jackets', 'pants', etc.
    colors: ['Black', 'White', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Your product description here',
    details: '100% Cotton | Premium Quality | Your specs',
  },
];
```

---

### 2. Update Brand Messages (App.jsx)

**Announcement Bar (Line ~275):**
```javascript
// OLD:
"BRANHARD — NEW COLLECTION AVAILABLE | FREE SHIPPING ON ORDERS OVER ₦50,000"

// NEW:
"BRANHARD SEASON 2 | AVAILABLE NOW | FREE SHIPPING OVER ₦50,000"
```

**Hero Headline (Line ~442):**
```javascript
// OLD:
"BUILT DIFFERENT."

// NEW:
"YOUR TAGLINE HERE"
```

**Hero Subtitle (Line ~447):**
```javascript
// OLD:
"Premium streetwear designed for those who move differently."

// NEW:
"Your value proposition"
```

**Hero Button (Line ~451):**
```javascript
// OLD:
"SHOP THE COLLECTION"

// NEW:
"SHOP NOW" or "VIEW COLLECTION"
```

**Brand Statement (Line ~548):**
```javascript
// OLD:
"WE DON'T FOLLOW TRENDS.
WE BUILD IDENTITY."

// NEW:
"YOUR BRAND STATEMENT"
```

---

### 3. Update Images (App.jsx)

**Hero Background (Line ~435):**
```javascript
backgroundImage: 'url(https://YOUR_IMAGE_URL)',
```

**Collection Banner Image (Line ~594):**
```javascript
backgroundImage: 'url(https://YOUR_IMAGE_URL)',
```

**About Section Image (Line ~831):**
```javascript
src="https://YOUR_IMAGE_URL"
```

**Pro tip:** Use 1600x1200px for backgrounds, 600x600px for about section.

---

### 4. Update Social Links (App.jsx - Footer, Line ~885)

```javascript
// OLD:
<a href="#" className="...">Instagram</a>
<a href="#" className="...">TikTok</a>

// NEW:
<a href="https://instagram.com/branhard" className="...">Instagram</a>
<a href="https://tiktok.com/@branhard" className="...">TikTok</a>
<a href="https://twitter.com/branhard" className="...">Twitter</a>
```

---

### 5. Update About Section (App.jsx - Line ~820)

```javascript
// FIND THIS:
<h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
  ABOUT BRANHARD
</h2>
<p className="text-gray-700 text-lg mb-6 leading-relaxed">
  Branhard was founded on a simple belief...
</p>

// UPDATE TO YOUR STORY:
<h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
  ABOUT BRANHARD
</h2>
<p className="text-gray-700 text-lg mb-6 leading-relaxed">
  Branhard represents individuality...
  [Your story about the brand]
</p>
```

---

## 🎨 Common Customization Points

### Change Shipping Cost
**Line ~155:**
```javascript
const shipping = subtotal > 50000 ? 0 : 3000;
//                                  ↑ threshold    ↑ cost
```

### Change Newsletter Text
**Line ~775:**
```javascript
<h2>JOIN THE BRANHARD WORLD</h2>
<p>Get exclusive drops, stories, and insider access...</p>
```

### Change Footer Text
**Line ~865:**
```javascript
<h3 className="font-black text-white mb-4">BRANHARD</h3>
<p className="text-sm">Your footer description here</p>
```

---

## 📁 File Locations Quick Map

```
src/
  └── App.jsx           ← 95% of customization happens here
      ├── Header (Line ~200)
      ├── Hero Section (Line ~430)
      ├── PRODUCTS array (Line ~10)
      ├── Brand Statement (Line ~540)
      ├── Newsletter (Line ~770)
      └── Footer (Line ~860)

index.html            ← Change page title & meta description
tailwind.config.js    ← Change brand colors here
```

---

## 🖼️ Image Sizes Reference

| Section | Recommended Size | Format |
|---------|-----------------|--------|
| Product Images | 800x900px | JPG/PNG |
| Product Hover | 800x900px | JPG/PNG |
| Hero Background | 1600x1200px | JPG |
| Banner Image | 1600x1200px | JPG |
| About Image | 600x600px | JPG/PNG |
| Favicon | 256x256px | PNG |

---

## 🚀 Deploy in 2 Steps

### Step 1: Build
```bash
npm run build
```

### Step 2: Deploy
**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
- Go to netlify.com
- Drag the `dist` folder
- Done!

---

## 🔍 Product Data Template

Copy this template for each product:

```javascript
{
  id: NUMBER,
  name: 'Product Name',
  price: 25000,
  image: '/images/product-1.jpg',
  hoverImage: '/images/product-1-hover.jpg',
  category: 'tees',  // tees, hoodies, jackets, pants, sweatshirts
  colors: ['Black', 'White', 'Navy'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Short description for product card',
  details: 'Material info | Fit Type | Special Features',
}
```

---

## 🎯 Search Terms for Finding Things in Code

Use Ctrl+F (or Cmd+F) to find:

- `"BUILT DIFFERENT"` → Hero headline
- `"WE DON'T FOLLOW TRENDS"` → Brand statement
- `"FREE SHIPPING"` → Shipping info
- `const PRODUCTS = [` → Products array
- `const Header = ` → Navigation header
- `const Footer = ` → Footer section
- `Instagram` → Social media links
- `ABOUT BRANHARD` → About section

---

## ✨ Don't Touch (You Don't Need To)

These are working fine as-is:

- Cart functionality
- Search feature
- Mobile responsiveness
- Product page layout
- Color selectors
- Size selectors
- Newsletter form
- All animations

---

## 💡 Pro Tips

1. **Use HTTPS URLs for images** — Required for production
2. **Keep product images consistent** — Similar lighting/backgrounds
3. **Update both `image` and `hoverImage`** — For hover effect to work
4. **Test on mobile** — View on your phone before launch
5. **Backup your changes** — Use Git or save copies
6. **Use placeholder service temporarily** — Unsplash, Pexels if needed

---

## ✅ Launch Checklist (5 minutes)

- [ ] All products updated with real images
- [ ] All prices correct in Naira
- [ ] Brand messaging updated
- [ ] Social links point to your accounts
- [ ] Images tested (all loading properly)
- [ ] Tested on mobile phone
- [ ] Deploy to Vercel or Netlify
- [ ] Share your new website!

---

## 📞 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Images not showing | Check URLs are HTTPS and accessible |
| Styling broken | Run `npm install` again, restart dev server |
| Cart not saving | Clear browser cache, check localStorage enabled |
| Port in use | Run `npm run dev -- --port 3000` |
| Can't find code | Use Ctrl+F to search the file |

---

## 🎉 You're All Set!

Your Branhard website is ready. Now:

1. Add your products
2. Deploy
3. Share with the world

**Branhard — Built Different** 🔥

---

Need more help? See SETUP_GUIDE.md for detailed instructions.
