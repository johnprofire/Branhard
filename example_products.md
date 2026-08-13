# BRANHARD Products — Example Data & Customization

## How to Update Products in App.jsx

Find this line in `src/App.jsx`:
```javascript
const PRODUCTS = [
```

Replace all the products in that array with your Branhard products using these examples.

---

## Example 1: Oversized Essential Tee

```javascript
{
  id: 1,
  name: 'Oversized Essential Tee',
  price: 12500,                              // Price in Nigerian Naira
  image: '/images/oversized-tee-black.jpg',  // Main product image (800x900px)
  hoverImage: '/images/oversized-tee-white.jpg',  // Hover variant (800x900px)
  category: 'tees',                          // Category for search
  colors: ['Black', 'White', 'Charcoal'],   // Available colors
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], // Available sizes
  description: 'Premium oversized cotton tee. Bold. Minimal. Built different.',
  details: '100% Premium Cotton | Heavyweight Fabric | Oversized Fit | Made for Movement',
}
```

---

## Example 2: Signature Hoodie

```javascript
{
  id: 2,
  name: 'Signature Hoodie',
  price: 22500,
  image: '/images/signature-hoodie-black.jpg',
  hoverImage: '/images/signature-hoodie-white.jpg',
  category: 'hoodies',
  colors: ['Black', 'White', 'Charcoal', 'Navy'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Iconic Branhard hoodie with embroidered logo and premium fabric.',
  details: '80% Cotton, 20% Polyester | Premium Embroidery | Kangaroo Pocket | Drawstring Hood',
}
```

---

## Example 3: Varsity Jacket

```javascript
{
  id: 3,
  name: 'Varsity Jacket',
  price: 45000,
  image: '/images/varsity-jacket-black.jpg',
  hoverImage: '/images/varsity-jacket-white.jpg',
  category: 'jackets',
  colors: ['Black', 'Navy', 'Cream'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Bold varsity jacket with leather sleeves and embroidered patches.',
  details: '60% Wool, 40% Leather | Premium Lining | Snap Buttons | Embroidered Details',
}
```

---

## Example 4: Cargo Pants

```javascript
{
  id: 4,
  name: 'Cargo Pants',
  price: 28000,
  image: '/images/cargo-pants-black.jpg',
  hoverImage: '/images/cargo-pants-khaki.jpg',
  category: 'pants',
  colors: ['Black', 'Khaki', 'Olive'],
  sizes: ['28', '30', '32', '34', '36', '38'],  // Note: pants use numbers
  description: 'Urban cargo pants with premium fit and functional pockets.',
  details: '98% Cotton, 2% Elastane | Multiple Pockets | Adjustable Waist | Contemporary Fit',
}
```

---

## Example 5: Heavyweight Tee

```javascript
{
  id: 5,
  name: 'Heavyweight Tee',
  price: 14000,
  image: '/images/heavyweight-tee-black.jpg',
  hoverImage: '/images/heavyweight-tee-grey.jpg',
  category: 'tees',
  colors: ['Black', 'White', 'Grey'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Heavyweight cotton tee built for durability and comfort. Timeless design.',
  details: '100% Premium Cotton | 300gsm Weight | Reinforced Seams | Relaxed Fit',
}
```

---

## Example 6: Essential Sweatshirt

```javascript
{
  id: 6,
  name: 'Essential Sweatshirt',
  price: 18500,
  image: '/images/sweatshirt-black.jpg',
  hoverImage: '/images/sweatshirt-charcoal.jpg',
  category: 'sweatshirts',
  colors: ['Black', 'White', 'Charcoal', 'Cream'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Minimalist sweatshirt with premium French terry fabric. Everyday essential.',
  details: '85% Cotton, 15% Polyester | French Terry | Raglan Sleeves | Embroidered Logo',
}
```

---

## Complete Products Array (Template)

```javascript
const PRODUCTS = [
  {
    id: 1,
    name: 'Oversized Essential Tee',
    price: 12500,
    image: '/images/oversized-tee-black.jpg',
    hoverImage: '/images/oversized-tee-white.jpg',
    category: 'tees',
    colors: ['Black', 'White', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium oversized cotton tee. Bold. Minimal. Built different.',
    details: '100% Premium Cotton | Heavyweight Fabric | Oversized Fit | Made for Movement',
  },
  {
    id: 2,
    name: 'Signature Hoodie',
    price: 22500,
    image: '/images/signature-hoodie-black.jpg',
    hoverImage: '/images/signature-hoodie-white.jpg',
    category: 'hoodies',
    colors: ['Black', 'White', 'Charcoal', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Iconic Branhard hoodie with embroidered logo and premium fabric.',
    details: '80% Cotton, 20% Polyester | Premium Embroidery | Kangaroo Pocket | Drawstring Hood',
  },
  {
    id: 3,
    name: 'Varsity Jacket',
    price: 45000,
    image: '/images/varsity-jacket-black.jpg',
    hoverImage: '/images/varsity-jacket-cream.jpg',
    category: 'jackets',
    colors: ['Black', 'Navy', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Bold varsity jacket with leather sleeves and embroidered patches.',
    details: '60% Wool, 40% Leather | Premium Lining | Snap Buttons | Embroidered Details',
  },
  {
    id: 4,
    name: 'Cargo Pants',
    price: 28000,
    image: '/images/cargo-pants-black.jpg',
    hoverImage: '/images/cargo-pants-khaki.jpg',
    category: 'pants',
    colors: ['Black', 'Khaki', 'Olive'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description: 'Urban cargo pants with premium fit and functional pockets.',
    details: '98% Cotton, 2% Elastane | Multiple Pockets | Adjustable Waist | Contemporary Fit',
  },
  {
    id: 5,
    name: 'Heavyweight Tee',
    price: 14000,
    image: '/images/heavyweight-tee-black.jpg',
    hoverImage: '/images/heavyweight-tee-grey.jpg',
    category: 'tees',
    colors: ['Black', 'White', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Heavyweight cotton tee built for durability and comfort.',
    details: '100% Premium Cotton | 300gsm Weight | Reinforced Seams | Relaxed Fit',
  },
  {
    id: 6,
    name: 'Essential Sweatshirt',
    price: 18500,
    image: '/images/sweatshirt-black.jpg',
    hoverImage: '/images/sweatshirt-charcoal.jpg',
    category: 'sweatshirts',
    colors: ['Black', 'White', 'Charcoal', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Minimalist sweatshirt with premium French terry fabric.',
    details: '85% Cotton, 15% Polyester | French Terry | Raglan Sleeves | Embroidered Logo',
  },
  {
    id: 7,
    name: 'Premium Polo Shirt',
    price: 16500,
    image: '/images/polo-black.jpg',
    hoverImage: '/images/polo-navy.jpg',
    category: 'tees',
    colors: ['Black', 'Navy', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic premium polo with modern silhouette.',
    details: '100% Premium Cotton | Structured Collar | Mother of Pearl Buttons',
  },
  {
    id: 8,
    name: 'Bomber Jacket',
    price: 38000,
    image: '/images/bomber-black.jpg',
    hoverImage: '/images/bomber-navy.jpg',
    category: 'jackets',
    colors: ['Black', 'Navy', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Modern bomber jacket with premium nylon construction.',
    details: '100% Nylon | Ribbed Cuffs | Zip Pockets | Adjustable Hem',
  },
];
```

---

## Understanding the Product Object

### Required Fields

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `id` | Number | 1 | Must be unique |
| `name` | String | 'Product Name' | Display name |
| `price` | Number | 12500 | Nigerian Naira |
| `image` | String | '/images/product.jpg' | Main image URL (800x900px) |
| `hoverImage` | String | '/images/product-hover.jpg' | Hover variant (800x900px) |
| `category` | String | 'tees' | For filtering |
| `colors` | Array | ['Black', 'White'] | Color options |
| `sizes` | Array | ['XS', 'S', 'M'] | Size options |
| `description` | String | 'Short description' | For product card |
| `details` | String | '100% Cotton \| Premium' | Material/specs |

### Important Notes

1. **ID must be unique** — Each product needs a different id
2. **Price is in Naira** — Use Nigerian currency
3. **Image paths** — Use `/images/filename.jpg` if storing locally
4. **Sizes differ by category**:
   - Shirts/Hoodies: `['XS', 'S', 'M', 'L', 'XL', 'XXL']`
   - Pants: `['28', '30', '32', '34', '36', '38']`
5. **Colors must match swatches** — Use color names we recognize
6. **Descriptions are short** — Displayed on product cards
7. **Details are full specs** — Shown on product page

---

## Where to Store Images

### Option A: Online URLs (Easiest)
```javascript
image: 'https://your-server.com/images/product-1.jpg',
hoverImage: 'https://your-server.com/images/product-1-hover.jpg',
```

Recommended services:
- Cloudinary (free tier: 25GB storage)
- Imgur (simple image hosting)
- Your own server

### Option B: Local Files (Recommended)
```
Create folder: public/images/
Add your files:
  ├── oversized-tee-black.jpg
  ├── oversized-tee-white.jpg
  ├── signature-hoodie-black.jpg
  └── ... more images

Then reference:
image: '/images/oversized-tee-black.jpg'
```

---

## Pricing Examples (Nigerian Naira)

| Product Type | Price Range | Examples |
|--------------|------------|----------|
| T-Shirts | 10,000 - 18,000 | 12,500 / 14,000 / 16,500 |
| Sweatshirts | 16,000 - 22,000 | 18,500 / 20,000 |
| Hoodies | 20,000 - 28,000 | 22,500 / 25,000 |
| Jackets | 35,000 - 60,000 | 38,000 / 45,000 / 55,000 |
| Pants | 20,000 - 35,000 | 25,000 / 28,000 / 32,000 |

*Adjust based on your actual Branhard pricing*

---

## Color Naming Convention

Use these color names (they map to actual color swatches):

| Color Name | Hex Value | Use For |
|-----------|-----------|---------|
| Black | #000000 | ◆ All products |
| White | #FFFFFF | ◆ All products |
| Charcoal | #36454F | ◆ Shirts, hoodies |
| Navy | #001F3F | ◆ Jackets, hoodies |
| Grey | #999999 | ◆ Shirts |
| Cream | #FFFDD0 | ◆ Luxury items |
| Khaki | #C3B091 | ◆ Pants |
| Olive | #808000 | ◆ Pants, jackets |

---

## Adding New Products

### Template to Copy

```javascript
{
  id: 9,
  name: 'Your New Product Name',
  price: 00000,  // Price in Naira
  image: '/images/product-name-color1.jpg',
  hoverImage: '/images/product-name-color2.jpg',
  category: 'category',  // tees, hoodies, jackets, pants, sweatshirts
  colors: ['Color1', 'Color2', 'Color3'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Short product description for card display',
  details: 'Material composition | Fit type | Special features',
}
```

### Steps to Add

1. Open `src/App.jsx`
2. Find the `PRODUCTS` array
3. Find the last product (e.g., product with id: 8)
4. Add a comma after the closing brace
5. Paste the template
6. Fill in your product details
7. Save the file
8. Website updates automatically

---

## Testing Your Products

### Checklist

- [ ] All product images are 800x900px
- [ ] All images are HTTPS URLs or in `/images/` folder
- [ ] Prices are numbers (not strings with ₦)
- [ ] All products have 2-3 color options minimum
- [ ] All products have 5-6 size options minimum
- [ ] Descriptions are concise (1-2 lines)
- [ ] Details list materials and features
- [ ] IDs are unique (no duplicates)
- [ ] Search finds products by name
- [ ] Can add to cart with selected color/size

---

## Common Mistakes to Avoid

❌ **Wrong:** `price: "12500"` (string instead of number)
✅ **Right:** `price: 12500` (number)

❌ **Wrong:** `colors: ['black', 'white']` (lowercase)
✅ **Right:** `colors: ['Black', 'White']` (capitalized)

❌ **Wrong:** `sizes: ['xs', 's', 'm']` (lowercase)
✅ **Right:** `sizes: ['XS', 'S', 'M']` (uppercase)

❌ **Wrong:** `image: 'http://...'` (HTTP instead of HTTPS)
✅ **Right:** `image: 'https://...'` (HTTPS for security)

❌ **Wrong:** Missing comma after product object
✅ **Right:** Add comma after each product except the last

❌ **Wrong:** Duplicate product IDs
✅ **Right:** Each ID should be unique

---

## Quick Copy-Paste

Here's a product you can quickly update with your Branhard info:

```javascript
{
  id: 1,
  name: 'Branhard [PRODUCT TYPE]',
  price: 25000,
  image: '/images/branhard-[name]-black.jpg',
  hoverImage: '/images/branhard-[name]-white.jpg',
  category: 'category',
  colors: ['Black', 'White', 'Charcoal'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description: 'Branhard [type]. Premium quality. Built different.',
  details: '[Material] | [Fit] | [Special Feature]',
}
```

Replace:
- `[PRODUCT TYPE]` with actual product name
- `[name]` with filename
- `category` with product type
- `[Material]`, `[Fit]`, `[Special Feature]` with actual specs

---

## Need Help?

See these files:
- **QUICK_REFERENCE.md** — Quick lookup
- **SETUP_GUIDE.md** — Detailed customization
- **README.md** — Full documentation

---

**You're ready to add your Branhard products!** 🚀
