import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Heart,
} from 'lucide-react';

// ======================================================
// BRANHARD PRODUCT DATA
// ======================================================

const PRODUCTS = [
  {
    id: 1,
    name: 'Oversized Essential Tee',
    price: 12500,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1554521666-7dedc8ab4d3f?w=800&h=900&fit=crop',
    category: 'tees',
    colors: ['Black', 'White', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Premium oversized cotton tee with bold minimalist design. Perfect for everyday wear.',
    details:
      '100% Premium Cotton | Heavyweight Fabric | Oversized Fit | Made for Movement',
  },

  {
    id: 2,
    name: 'Signature Hoodie',
    price: 22500,
    image:
      'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1609027291029-cf9c3616c2f1?w=800&h=900&fit=crop',
    category: 'hoodies',
    colors: ['Black', 'White', 'Charcoal', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Iconic Branhard hoodie featuring embroidered logo and premium fabric.',
    details:
      '80% Cotton, 20% Polyester | Premium Embroidery | Kangaroo Pocket | Drawstring Hood',
  },

  {
    id: 3,
    name: 'Varsity Jacket',
    price: 45000,
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=900&fit=crop',
    category: 'jackets',
    colors: ['Black', 'Navy', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Bold varsity jacket with leather sleeves and embroidered patches.',
    details:
      '60% Wool, 40% Leather | Premium Lining | Snap Buttons | Embroidered Details',
  },

  {
    id: 4,
    name: 'Cargo Pants',
    price: 28000,
    image:
      'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1578272989dacafc505ce2b5f11e773b1044a2aa?w=800&h=900&fit=crop',
    category: 'pants',
    colors: ['Black', 'Khaki', 'Olive'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    description:
      'Urban cargo pants with premium fit and functional pockets.',
    details:
      '98% Cotton, 2% Elastane | Multiple Pockets | Adjustable Waist | Contemporary Fit',
  },

  {
    id: 5,
    name: 'Heavyweight Tee',
    price: 14000,
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1532622785990-1501149a8b27?w=800&h=900&fit=crop',
    category: 'tees',
    colors: ['Black', 'White', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Heavyweight cotton tee built for durability and comfort.',
    details:
      '100% Premium Cotton | 300gsm Weight | Reinforced Seams | Relaxed Fit',
  },

  {
    id: 6,
    name: 'Essential Sweatshirt',
    price: 18500,
    image:
      'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=900&fit=crop',
    category: 'sweatshirts',
    colors: ['Black', 'White', 'Charcoal', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Minimalist sweatshirt with premium French terry fabric.',
    details:
      '85% Cotton, 15% Polyester | French Terry | Raglan Sleeves | Embroidered Logo',
  },

  {
    id: 7,
    name: 'Premium Polo Shirt',
    price: 16500,
    image:
      'https://images.unsplash.com/photo-1579963801881-338429dcbd4f?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1538005066466-b8af271d4674?w=800&h=900&fit=crop',
    category: 'tees',
    colors: ['Black', 'Navy', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Classic premium polo with modern silhouette.',
    details:
      '100% Premium Cotton | Structured Collar | Mother of Pearl Buttons',
  },

  {
    id: 8,
    name: 'Bomber Jacket',
    price: 38000,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=900&fit=crop',
    hoverImage:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=900&fit=crop',
    category: 'jackets',
    colors: ['Black', 'Navy', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Modern bomber jacket with premium nylon construction.',
    details:
      '100% Nylon | Ribbed Cuffs | Zip Pockets | Adjustable Hem',
  },
];


//
// ======================================================
// CART ITEM COMPONENT
// ======================================================
//

const CartItem = ({
  item,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="flex gap-4 pb-4 border-b border-gray-200">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover bg-gray-100"
      />

      {/* Product Information */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500">
          {item.selectedColor} • {item.selectedSize}
        </p>

        <p className="font-semibold text-gray-900 mt-1">
          ₦{item.price.toLocaleString()}
        </p>
      </div>

      {/* Quantity + Remove */}
      <div className="flex flex-col items-end gap-2">

        <div className="flex items-center border border-gray-300">

          <button
            onClick={() =>
              onQuantityChange(
                item.cartItemId,
                item.quantity - 1
              )
            }
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="px-3 py-1 text-sm">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              onQuantityChange(
                item.cartItemId,
                item.quantity + 1
              )
            }
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>

        </div>

        <button
          onClick={() => onRemove(item.cartItemId)}
          className="text-xs text-red-600 hover:text-red-700"
        >
          Remove
        </button>

      </div>
    </div>
  );
};


//
// ======================================================
// CART SIDEBAR
// ======================================================
//

const CartSidebar = ({
  cartOpen,
  setCartOpen,
  cart,
  onQuantityChange,
  onRemove,
}) => {

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // Free shipping over ₦50,000
  const shipping =
    subtotal > 50000 ? 0 : 3000;

  const total = subtotal + shipping;

  return (
    <>
      {/* Background Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg z-40 overflow-y-auto transform transition-transform ${
          cartOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >

        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">

          <h2 className="text-lg font-bold">
            YOUR BAG
          </h2>

          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-500 hover:text-gray-900"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>

        </div>


        {/* Cart Content */}
        <div className="p-6">

          {cart.length === 0 ? (

            <p className="text-gray-500 text-center py-8">
              Your bag is empty
            </p>

          ) : (

            <>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">

                {cart.map((item) => (
                  <CartItem
                    key={item.cartItemId}
                    item={item}
                    onQuantityChange={
                      onQuantityChange
                    }
                    onRemove={onRemove}
                  />
                ))}

              </div>


              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-4 space-y-2">

                {/* Subtotal */}
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>

                  <span>
                    ₦{subtotal.toLocaleString()}
                  </span>
                </div>


                {/* Shipping */}
                <div className="flex justify-between text-sm">

                  <span>
                    Shipping
                  </span>

                  <span>
                    {shipping === 0
                      ? 'FREE'
                      : `₦${shipping.toLocaleString()}`
                    }
                  </span>

                </div>


                {/* Total */}
                <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4">

                  <span>
                    Total
                  </span>

                  <span>
                    ₦{total.toLocaleString()}
                  </span>

                </div>

              </div>


              {/* Checkout */}
              <button
                className="w-full bg-black text-white py-3 font-bold mt-6 hover:bg-gray-900 transition"
                onClick={() => {
                  alert(
                    'Checkout will be connected in a later part.'
                  );
                }}
              >
                PROCEED TO CHECKOUT
              </button>


              {/* Continue Shopping */}
              <button
                onClick={() =>
                  setCartOpen(false)
                }
                className="w-full bg-gray-100 text-gray-900 py-3 font-bold mt-2 hover:bg-gray-200 transition"
              >
                CONTINUE SHOPPING
              </button>

            </>

          )}

        </div>

      </div>
    </>
  );
};




//
// ======================================================
// HEADER / NAVIGATION
// ======================================================
//

const Header = ({
  cartOpen,
  setCartOpen,
  cart,
  searchOpen,
  setSearchOpen,
  onSearch,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <>
      {/* =================================================
          ANNOUNCEMENT BAR
      ================================================= */}

      <div className="bg-black text-white py-2 text-center text-sm tracking-wide px-4">
        BRANHARD — NEW COLLECTION AVAILABLE | FREE SHIPPING
        ON ORDERS OVER ₦50,000
      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <div className="flex-shrink-0">

              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="text-2xl font-bold tracking-tighter"
              >
                BRANHARD
              </button>

            </div>


            {/* =================================================
                DESKTOP MENU
            ================================================= */}

            <div className="hidden md:flex items-center gap-8">

              <a
                href="#shop"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition"
              >
                SHOP
              </a>

              <a
                href="#collections"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition"
              >
                COLLECTIONS
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition"
              >
                ABOUT
              </a>

              <a
                href="#contact"
                className="text-sm font-medium text-gray-900 hover:text-gray-600 transition"
              >
                CONTACT
              </a>

            </div>


            {/* =================================================
                RIGHT SIDE ICONS
            ================================================= */}

            <div className="flex items-center gap-5">

              {/* SEARCH */}
              <button
                onClick={() =>
                  setSearchOpen(!searchOpen)
                }
                className="text-gray-900 hover:text-gray-600 transition"
                aria-label="Search"
              >
                <Search size={20} />
              </button>


              {/* CART */}
              <button
                onClick={() =>
                  setCartOpen(!cartOpen)
                }
                className="relative text-gray-900 hover:text-gray-600 transition"
                aria-label="Shopping cart"
              >

                <ShoppingBag size={20} />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}

              </button>


              {/* MOBILE MENU */}
              <button
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                className="md:hidden text-gray-900"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

            </div>

          </div>


          {/* =================================================
              SEARCH BAR
          ================================================= */}

          {searchOpen && (
            <div className="pb-4 pt-2 border-t border-gray-200">

              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) =>
                  handleSearch(e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-100 rounded border-0 focus:outline-none focus:ring-2 focus:ring-black"
                autoFocus
              />

            </div>
          )}


          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {menuOpen && (
            <div className="md:hidden pb-5 pt-2 flex flex-col gap-4">

              <a
                href="#shop"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-900"
              >
                SHOP
              </a>

              <a
                href="#collections"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-900"
              >
                COLLECTIONS
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-900"
              >
                ABOUT
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-900"
              >
                CONTACT
              </a>

            </div>
          )}

        </div>

      </nav>
    </>
  );
};




//
// ======================================================
// PRODUCT CARD
// ======================================================
//

const ProductCard = ({
  product,
  onAddToCart,
}) => {
  const [hovered, setHovered] = useState(false);

  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );


  // ====================================================
  // ADD PRODUCT TO CART
  // ====================================================

  const handleAddToCart = () => {
    onAddToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor,
      selectedSize,
      quantity: 1,
    });
  };


  // ====================================================
  // COLOR DISPLAY
  // ====================================================

  const getColorValue = (color) => {
    const colorMap = {
      Black: '#000000',
      White: '#ffffff',
      Charcoal: '#36454f',
      Navy: '#001f3f',
      Grey: '#999999',
      Khaki: '#c3b091',
      Olive: '#808000',
      Cream: '#fffdd0',
    };

    return colorMap[color] || '#666666';
  };


  return (
    <div className="group">

      {/* =================================================
          PRODUCT IMAGE
      ================================================= */}

      <div
        className="relative overflow-hidden bg-gray-100 mb-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        <div className="aspect-square">

          <img
            src={
              hovered
                ? product.hoverImage
                : product.image
            }
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </div>


        {/* HEART BUTTON */}

        <button
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
          aria-label={`Add ${product.name} to wishlist`}
          onClick={() => {
            alert(
              `${product.name} added to wishlist`
            );
          }}
        >
          <Heart
            size={18}
            className="text-gray-900"
          />
        </button>

      </div>


      {/* =================================================
          PRODUCT INFORMATION
      ================================================= */}

      <div>

        <h3 className="font-semibold text-gray-900 text-sm mb-2">
          {product.name}
        </h3>


        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>


        {/* PRICE */}

        <p className="font-bold text-gray-900 mb-4">
          ₦{product.price.toLocaleString()}
        </p>


        {/* =================================================
            COLOR SELECTOR
        ================================================= */}

        <div className="mb-4">

          <p className="text-xs text-gray-600 mb-2">
            Color: {selectedColor}
          </p>


          <div className="flex gap-2 flex-wrap">

            {product.colors.map((color) => (

              <button
                key={color}
                type="button"
                onClick={() =>
                  setSelectedColor(color)
                }
                title={color}
                aria-label={`Select ${color}`}
                className={`w-7 h-7 rounded-full border-2 transition ${
                  selectedColor === color
                    ? 'border-black scale-110'
                    : 'border-gray-300 hover:border-gray-500'
                }`}
                style={{
                  backgroundColor:
                    getColorValue(color),
                }}
              />

            ))}

          </div>

        </div>


        {/* =================================================
            SIZE SELECTOR
        ================================================= */}

        <div className="mb-4">

          <p className="text-xs text-gray-600 mb-2">
            Size: {selectedSize}
          </p>


          <div className="flex gap-2 flex-wrap">

            {product.sizes.map((size) => (

              <button
                key={size}
                type="button"
                onClick={() =>
                  setSelectedSize(size)
                }
                className={`text-xs px-3 py-1.5 border transition ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                {size}
              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            ADD TO CART BUTTON
        ================================================= */}

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-3 font-semibold text-sm hover:bg-gray-900 transition"
        >
          ADD TO CART
        </button>

      </div>

    </div>
  );
};


//
// ======================================================
// HERO SECTION
// ======================================================
//

const HeroSection = ({ onShopClick }) => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[650px] bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1600&h=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />


      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">

        <p className="text-sm md:text-base tracking-[0.3em] text-gray-300 mb-5">
          BRANHARD
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-tight animate-fade-in">
          BUILT DIFFERENT.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in-delay">
          Premium streetwear designed for those who move differently.
        </p>

        <button
          onClick={onShopClick}
          className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition transform hover:scale-105 animate-fade-in-delay-2"
        >
          SHOP THE COLLECTION
        </button>

      </div>
    </section>
  );
};


//
// ======================================================
// FEATURED COLLECTION
// ======================================================
//

const FeaturedCollection = ({
  onAddToCart,
}) => {

  const featuredProducts =
    PRODUCTS.slice(0, 4);

  return (
    <section
      id="shop"
      className="py-20 px-4"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-sm tracking-[0.25em] text-gray-500 mb-3">
            DISCOVER
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            FEATURED COLLECTION
          </h2>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {featuredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            )
          )}

        </div>

      </div>

    </section>
  );
};


//
// ======================================================
// BRAND STATEMENT
// ======================================================
//

const BrandStatement = () => {
  return (
    <section className="bg-black text-white py-20 px-4">

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500 mb-6">
          THE BRANHARD MINDSET
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">

          WE DON'T FOLLOW TRENDS.
          <br />

          WE BUILD IDENTITY.

        </h2>

        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
          Branhard represents a movement of individuals
          who refuse to blend in. Every piece is crafted
          with intention, built for those who understand
          that style is a statement, not a compromise.
        </p>

      </div>

    </section>
  );
};


//
// ======================================================
// COLLECTION BANNER
// ======================================================
//

const CollectionBanner = ({
  onExplore,
}) => {
  return (
    <section
      id="collections"
      className="relative h-[500px] md:h-screen max-h-[900px] bg-gradient-to-r from-gray-900 to-black overflow-hidden"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1552830820-6b2ecdc0f26f?w=1600&h=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />


      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">

        <div>

          <p className="text-sm md:text-lg tracking-[0.3em] mb-4 text-gray-400">
            THE FIRST COLLECTION
          </p>

          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking


//
// ======================================================
// BEST SELLERS
// ======================================================
//

const BestSellers = ({
  onAddToCart,
}) => {
  return (
    <section
      id="best-sellers"
      className="py-20 px-4"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">

          <p className="text-sm tracking-[0.25em] text-gray-500 mb-3">
            CUSTOMER FAVORITES
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            BEST SELLERS
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Customer favorites crafted with precision
            and purpose.
          </p>

        </div>


        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}

        </div>

      </div>

    </section>
  );
};


//
// ======================================================
// ABOUT BRANHARD
// ======================================================
//

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 px-4"
    >

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1552830820-6b2ecdc0f26f?w=800&h=800&fit=crop"
              alt="Branhard"
              className="w-full aspect-square object-cover"
              loading="lazy"
            />

          </div>


          {/* Text */}
          <div>

            <p className="text-sm tracking-[0.25em] text-gray-500 mb-4">
              OUR STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              ABOUT BRANHARD
            </h2>


            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Branhard was founded on a simple belief:
              fashion should never compromise individuality
              for acceptance.
            </p>


            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We create premium streetwear for those who
              understand that confidence is the best style.
              Each piece is designed to be worn with purpose,
              built to last, and crafted to make a statement
              without saying a word.
            </p>


            <p className="text-gray-700 text-lg leading-relaxed">
              In a world of trends, we choose authenticity.
              In a marketplace of replicas, we choose quality.
              Branhard is for those who move differently.
            </p>


            {/* Small Brand Detail */}
            <div className="mt-8 pt-6 border-t border-gray-300">

              <p className="text-xs tracking-[0.3em] font-semibold text-gray-500">
                BUILT DIFFERENT • BRANHARD
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


//
// ======================================================
// NEWSLETTER SECTION
// ======================================================
//

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubscribed(true);
    setEmail('');

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-4"
    >

      <div className="max-w-2xl mx-auto text-center">

        <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">
          STAY CONNECTED
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
          JOIN THE BRANHARD WORLD
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Get exclusive drops, stories, and insider access
          to new collections.
        </p>


        {/* Newsletter Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-2"
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="flex-1 px-6 py-3 bg-gray-900 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />

          <button
            type="submit"
            className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition whitespace-nowrap"
          >
            SUBSCRIBE
          </button>

        </form>


        {/* Success Message */}
        {subscribed && (
          <p className="text-green-400 mt-4 font-medium">
            Welcome to Branhard! Check your inbox.
          </p>
        )}

      </div>

    </section>
  );
};


//
// ======================================================
// FOOTER
// ======================================================
//

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>

            <h3 className="font-black text-white mb-4">
              BRANHARD
            </h3>

            <p className="text-sm leading-relaxed">
              Premium streetwear for those who move
              differently.
            </p>

          </div>


          {/* SHOP */}
          <div>

            <h4 className="font-semibold text-white mb-4">
              SHOP
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <a
                  href="#shop"
                  className="hover:text-white transition"
                >
                  All Products
                </a>
              </li>

              <li>
                <a
                  href="#collections"
                  className="hover:text-white transition"
                >
                  New Arrivals
                </a>
              </li>

              <li>
                <a
                  href="#best-sellers"
                  className="hover:text-white transition"
                >
                  Best Sellers
                </a>
              </li>

            </ul>

          </div>


          {/* COMPANY */}
          <div>

            <h4 className="font-semibold text-white mb-4">
              COMPANY
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Branhard careers page coming soon.'
                    )
                  }
                  className="hover:text-white transition"
                >
                  Careers
                </button>
              </li>

            </ul>

          </div>


          {/* SUPPORT */}
          <div>

            <h4 className="font-semibold text-white mb-4">
              SUPPORT
            </h4>

            <ul className="space-y-2 text-sm">

              <li>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Shipping & Returns information coming soon.'
                    )
                  }
                  className="hover:text-white transition text-left"
                >
                  Shipping & Returns
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Privacy Policy coming soon.'
                    )
                  }
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Terms of Service coming soon.'
                    )
                  }
                  className="hover:text-white transition"
                >
                  Terms of Service
                </button>
              </li>

            </ul>

          </div>

        </div>


        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} BRANHARD. All rights reserved.
          </p>


          {/* Social Links */}
          <div className="flex gap-6">

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Instagram link will be added soon.');
              }}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Instagram
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('TikTok link will be added soon.');
              }}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              TikTok
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Twitter/X link will be added soon.');
              }}
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Twitter
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};




//
// ======================================================
// MAIN BRANHARD STORE
// ======================================================
//

export default function BranhardStore() {

  // ====================================================
  // UI STATE
  // ====================================================

  const [cartOpen, setCartOpen] = useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchResults, setSearchResults] =
    useState(null);


  // ====================================================
  // CART STATE
  // ====================================================

  const [cart, setCart] = useState(() => {

    // Safely access localStorage
    // so the app doesn't crash in environments
    // where localStorage isn't available.

    try {

      if (
        typeof window === 'undefined' ||
        !window.localStorage
      ) {
        return [];
      }

      const saved =
        window.localStorage.getItem(
          'branhard_cart'
        );

      if (!saved) {
        return [];
      }

      const parsed = JSON.parse(saved);

      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch (error) {

      console.error(
        'Unable to load saved cart:',
        error
      );

      return [];
    }
  });


  // ====================================================
  // SAVE CART
  // ====================================================

  useEffect(() => {

    try {

      if (
        typeof window !== 'undefined' &&
        window.localStorage
      ) {
        window.localStorage.setItem(
          'branhard_cart',
          JSON.stringify(cart)
        );
      }

    } catch (error) {

      console.error(
        'Unable to save cart:',
        error
      );
    }

  }, [cart]);


  // ====================================================
  // ADD TO CART
  // ====================================================

  const handleAddToCart = (newItem) => {

    setCart((previousCart) => {

      /*
       * Check whether the exact same product,
       * color and size already exists.
       */

      const existingItem =
        previousCart.find(
          (item) =>
            item.productId ===
              newItem.productId &&
            item.selectedColor ===
              newItem.selectedColor &&
            item.selectedSize ===
              newItem.selectedSize
        );


      // If it exists, increase quantity.
      if (existingItem) {

        return previousCart.map(
          (item) => {

            if (
              item.cartItemId ===
              existingItem.cartItemId
            ) {

              return {
                ...item,
                quantity:
                  item.quantity + 1,
              };

            }

            return item;
          }
        );
      }


      /*
       * Create a unique cart ID.
       *
       * The product ID remains untouched.
       */

      const cartItemId =
        `${newItem.productId}-${newItem.selectedColor}-${newItem.selectedSize}`;


      return [
        ...previousCart,

        {
          ...newItem,
          cartItemId,
        },
      ];
    });


    // Open the cart after adding.
    setCartOpen(true);
  };


  // ====================================================
  // CHANGE QUANTITY
  // ====================================================

  const handleQuantityChange = (
    cartItemId,
    newQuantity
  ) => {

    // Remove item if quantity reaches zero.
    if (newQuantity <= 0) {

      setCart((previousCart) =>
        previousCart.filter(
          (item) =>
            item.cartItemId !== cartItemId
        )
      );

      return;
    }


    // Otherwise update quantity.
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.cartItemId === cartItemId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };


  // ====================================================
  // REMOVE FROM CART
  // ====================================================

  const handleRemoveFromCart = (
    cartItemId
  ) => {

    setCart((previousCart) =>
      previousCart.filter(
        (item) =>
          item.cartItemId !== cartItemId
      )
    );
  };


  // ====================================================
  // SEARCH
  // ====================================================

  const handleSearch = (query) => {

    const cleanQuery =
      query.trim().toLowerCase();


    // Empty search
    if (!cleanQuery) {

      setSearchResults(null);

      return;
    }


    const results =
      PRODUCTS.filter((product) => {

        return (
          product.name
            .toLowerCase()
            .includes(cleanQuery) ||

          product.description
            .toLowerCase()
            .includes(cleanQuery) ||

          product.category
            .toLowerCase()
            .includes(cleanQuery) ||

          product.colors.some(
            (color) =>
              color
                .toLowerCase()
                .includes(cleanQuery)
          )
        );
      });


    setSearchResults(results);
  };


  // ====================================================
  // SHOP BUTTON
  // ====================================================

  const scrollToShop = () => {

    const shop =
      document.getElementById('shop');

    if (shop) {

      shop.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  // ====================================================
  // COLLECTION BUTTON
  // ====================================================

  const exploreCollection = () => {

    const collection =
      document.getElementById(
        'collections'
      );

    if (collection) {

      collection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  // ====================================================
  // MAIN UI
  // ====================================================

  return (

    <div className="min-h-screen bg-white text-gray-900">


      {/* ==================================================
          HEADER
      ================================================== */}

      <Header
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cart={cart}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        onSearch={handleSearch}
      />


      {/* ==================================================
          CART SIDEBAR
      ================================================== */}

      <CartSidebar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cart={cart}
        onQuantityChange={
          handleQuantityChange
        }
        onRemove={
          handleRemoveFromCart
        }
      />


      {/* ==================================================
          CUSTOM ANIMATIONS
      ================================================== */}

      <style>{`

        @keyframes fadeIn {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        .animate-fade-in {

          animation:
            fadeIn
            0.8s
            ease-out;

        }


        .animate-fade-in-delay {

          animation:
            fadeIn
            0.8s
            ease-out
            0.2s
            both;

        }


        .animate-fade-in-delay-2 {

          animation:
            fadeIn
            0.8s
            ease-out
            0.4s
            both;

        }


        .line-clamp-2 {

          display: -webkit-box;

          -webkit-line-clamp: 2;

          -webkit-box-orient: vertical;

          overflow: hidden;

        }


        html {
          scroll-behavior: smooth;
        }


        button,
        a {
          -webkit-tap-highlight-color:
            transparent;
        }

      `}</style>


      {/* ==================================================
          SEARCH RESULTS OR HOMEPAGE
      ================================================== */}

      {searchResults !== null ? (

        <section className="py-16 px-4">

          <div className="max-w-7xl mx-auto">

            {/* Search Header */}

            <div className="flex items-center justify-between mb-10">

              <div>

                <p className="text-sm tracking-[0.25em] text-gray-500 mb-2">
                  SEARCH
                </p>

                <h2 className="text-4xl font-black tracking-tighter">
                  SEARCH RESULTS
                </h2>

              </div>


              <button
                onClick={() => {
                  setSearchResults(null);
                  setSearchOpen(false);
                }}
                className="flex items-center gap-2 text-sm font-semibold hover:text-gray-500"
              >
                <X size={18} />
                CLOSE
              </button>

            </div>


            {/* No Results */}

            {searchResults.length === 0 ? (

              <div className="text-center py-20">

                <Search
                  size={40}
                  className="mx-auto mb-5 text-gray-400"
                />

                <h3 className="text-xl font-bold mb-2">
                  NO PRODUCTS FOUND
                </h3>

                <p className="text-gray-500">
                  Try searching for tees,
                  hoodies, jackets or pants.
                </p>

              </div>

            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {searchResults.map(
                  (product) => (

                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={
                        handleAddToCart
                      }
                    />

                  )
                )}

              </div>

            )}

          </div>

        </section>

      ) : (

        <>

          {/* HERO */}

          <HeroSection
            onShopClick={scrollToShop}
          />


          {/* FEATURED */}

          <FeaturedCollection
            onAddToCart={
              handleAddToCart
            }
          />


          {/* BRAND STATEMENT */}

          <BrandStatement />


          {/* COLLECTION */}

          <CollectionBanner
            onExplore={
              exploreCollection
            }
          />


          {/* BEST SELLERS */}

          <BestSellers
            onAddToCart={
              handleAddToCart
            }
          />


          {/* ABOUT */}

          <AboutSection />


          {/* NEWSLETTER */}

          <NewsletterSection />

        </>

      )}


      {/* ==================================================
          FOOTER
      ================================================== */}

      <Footer />

    </div>
  );
}






