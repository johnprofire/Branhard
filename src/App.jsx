import React, { useState, useEffect, createContext, useContext } from 'react';
import { ShoppingBag, Search, Menu, X, ChevronRight, Star, Heart } from 'lucide-react';

// Context for cart management
const CartContext = createContext();

const useCart = () => useContext(CartContext);

// Product data
const PRODUCTS = [
  {
    id: 1,
    name: 'Oversized Essential Tee',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1554521666-7dedc8ab4d3f?w=800&h=900&fit=crop',
    category: 'tees',
    colors: ['Black', 'White', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium oversized cotton tee with bold minimalist design. Perfect for everyday wear.',
    details: '100% Premium Cotton | Heavyweight Fabric | Oversized Fit | Made for Movement',
  },
  {
    id: 2,
    name: 'Signature Hoodie',
    price: 22500,
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1609027291029-cf9c3616c2f1?w=800&h=900&fit=crop',
    category: 'hoodies',
    colors: ['Black', 'White', 'Charcoal', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Iconic Branhard hoodie featuring embroidered logo and premium fabric.',
    details: '80% Cotton, 20% Polyester | Premium Embroidery | Kangaroo Pocket | Drawstring Hood',
  },
  {
    id: 3,
    name: 'Varsity Jacket',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=900&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1578272989dacafc505ce2b5f11e773b1044a2aa?w=800&h=900&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1532622785990-1501149a8b27?w=800&h=900&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=900&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1579963801881-338429dcbd4f?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1538005066466-b8af271d4674?w=800&h=900&fit=crop',
    category: 'tees',
    colors: ['Black', 'Navy', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic premium polo with modern silhouette.',
    details: '100% Premium Cotton | Structured Collar | Mother of Pearl Buttons',
  },
  {

// Cart Item Component
const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex gap-4 pb-4 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover bg-gray-100"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.selectedColor} • {item.selectedSize}</p>
        <p className="font-semibold text-gray-900 mt-1">₦{item.price.toLocaleString()}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center border border-gray-300">
          <button
            onClick={() => onQuantityChange(item.id, item.quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            −
          </button>
          <span className="px-3 py-1 text-sm">{item.quantity}</span>
          <button
            onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-xs text-red-600 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};


// Header Component
const Header = ({ cartOpen, setCartOpen, cart, searchOpen, setSearchOpen, onSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-center text-sm tracking-wide">
        BRANHARD — NEW COLLECTION AVAILABLE | FREE SHIPPING ON ORDERS OVER ₦50,000
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tighter">BRANHARD</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                SHOP
              </a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                COLLECTIONS
              </a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                ABOUT
              </a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                CONTACT
              </a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-900 hover:text-gray-600 transition"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative text-gray-900 hover:text-gray-600 transition"
              >
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-900"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="pb-4 border-t border-gray-200">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 rounded border-0 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <a href="#" className="text-sm font-medium text-gray-900">
                SHOP
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                COLLECTIONS
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                ABOUT
              </a>
              <a href="#" className="text-sm font-medium text-gray-900">
                CONTACT
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};


// Cart Sidebar
const CartSidebar = ({ cartOpen, setCartOpen, cart, onQuantityChange, onRemove }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50000 ? 0 : 3000;
  const total = subtotal + shipping;

  return (
    <>
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setCartOpen(false)}
        />
      )}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg z-40 overflow-y-auto transform transition-transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-bold">YOUR BAG</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your bag is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={onQuantityChange}
                    onRemove={onRemove}
                  />
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₦${shipping.toLocaleString()}`}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 font-bold mt-6 hover:bg-gray-900 transition">
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={() => setCartOpen(false)}
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




// Product Card
const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor,
      selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div
        className="relative overflow-hidden bg-gray-100 mb-4"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="aspect-square">
          <img
            src={hovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition">
          <Heart size={18} className="text-gray-900" />
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-gray-900 text-sm mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Price */}
        <p className="font-bold text-gray-900 mb-3">₦{product.price.toLocaleString()}</p>

        {/* Color Selector */}
        <div className="mb-3">
          <p className="text-xs text-gray-600 mb-2">Color: {selectedColor}</p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition ${
                  selectedColor === color
                    ? 'border-black'
                    : 'border-gray-300 hover:border-gray-500'
                }`}
                style={{
                  backgroundColor:
                    color === 'Black'
                      ? '#000'
                      : color === 'White'
                      ? '#fff'
                      : color === 'Charcoal'
                      ? '#36454f'
                      : color === 'Navy'
                      ? '#001f3f'
                      : color === 'Grey'
                      ? '#999'
                      : color === 'Khaki'
                      ? '#c3b091'
                      : color === 'Olive'
                      ? '#808000'
                      : color === 'Cream'
                      ? '#fffdd0'
                      : '#666',
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="mb-4">
          <p className="text-xs text-gray-600 mb-2">Size: {selectedSize}</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.slice(0, 4).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-xs px-2 py-1 border transition ${
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

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 font-semibold text-sm hover:bg-gray-900 transition"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};



// Hero Section
const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1600&h=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight animate-fade-in">
          BUILT DIFFERENT.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl animate-fade-in-delay">
          Premium streetwear designed for those who move differently.
        </p>
        <button className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition transform hover:scale-105 animate-fade-in-delay-2">
          SHOP THE COLLECTION
        </button>
      </div>
    </div>
  );
};

// Featured Collection Section
const FeaturedCollection = ({ onAddToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter">
          FEATURED COLLECTION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Brand Statement Section
const BrandStatement = () => {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
          WE DON'T FOLLOW TRENDS.
          <br />
          WE BUILD IDENTITY.
        </h2>
        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
          Branhard represents a movement of individuals who refuse to blend in. Every piece is
          crafted with intention, built for those who understand that style is a statement, not a
          compromise.
        </p>
      </div>
    </div>
  );
};

// Collection Banner Section
const CollectionBanner = () => {
  return (
    <div className="relative h-96 md:h-screen bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1552830820-6b2ecdc0f26f?w=1600&h=1200&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div>
          <p className="text-sm md:text-lg tracking-widest mb-4 text-gray-400">THE FIRST COLLECTION</p>
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">BRANHARD 25</h2>
          <button className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
};

// Best Sellers Section
const BestSellers = ({ onAddToCart }) => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">BEST SELLERS</h2>
        <p className="text-gray-600 mb-12 text-lg">Customer favorites crafted with precision and purpose.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

// About Section
const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552830820-6b2ecdc0f26f?w=600&h=600&fit=crop"
              alt="Branhard Team"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              ABOUT BRANHARD
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Branhard was founded on a simple belief: fashion should never compromise individuality for
              acceptance.
            </p>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              We create premium streetwear for those who understand that confidence is the best style.
              Each piece is designed to be worn with purpose, built to last, and crafted to make a
              statement without saying a word.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              In a world of trends, we choose authenticity. In a marketplace of replicas, we choose
              quality. Branhard is for those who move differently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Newsletter Section
const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
          JOIN THE BRANHARD WORLD
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Get exclusive drops, stories, and insider access to new collections.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {subscribed && (
          <p className="text-green-400 mt-4 font-medium">Welcome to Branhard! Check your inbox.</p>
        )}
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-black text-white mb-4">BRANHARD</h3>
            <p className="text-sm">Premium streetwear for those who move differently.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">All Products</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2025 BRANHARD. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">TikTok</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Search Filter Component
const SearchResults = ({ results, onAddToCart, onClose }) => {
  if (results.length === 0) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-lg">No products found. Try a different search.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-8 tracking-tighter">SEARCH RESULTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};




// Main App Component
export default function BranhardStore() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('branhard_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('branhard_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === newItem.id &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedSize === newItem.selectedSize
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id &&
          item.selectedColor === newItem.selectedColor &&
          item.selectedSize === newItem.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...newItem, id: `${newItem.id}-${Date.now()}` }];
    });

    alert('✓ Added to cart!');
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== itemId));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults(null);
    } else {
      const results = PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };



return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="min-h-screen bg-white">
        <Header
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          cart={cart}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
          onSearch={handleSearch}
        />

        <CartSidebar
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          cart={cart}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemoveFromCart}
        />

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
            animation: fadeIn 0.8s ease-out;
          }
          .animate-fade-in-delay {
            animation: fadeIn 0.8s ease-out 0.2s both;
          }
          .animate-fade-in-delay-2 {
            animation: fadeIn 0.8s ease-out 0.4s both;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>

        {searchResults !== null ? (
          <SearchResults
            results={searchResults}
            onAddToCart={handleAddToCart}
            onClose={() => setSearchResults(null)}
          />
        ) : (
          <>
            <HeroSection />
            <FeaturedCollection onAddToCart={handleAddToCart} />
            <BrandStatement />
            <CollectionBanner />
            <BestSellers onAddToCart={handleAddToCart} />
            <AboutSection />
            <NewsletterSection />
          </>
        )}

        <Footer />
      </div>
    </CartContext.Provider>
  );
}





    id: 8,
    name: 'Bomber Jacket',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=900&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=900&fit=crop',
    category: 'jackets',
    colors: ['Black', 'Navy', 'Olive'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Modern bomber jacket with premium nylon construction.',
    details: '100% Nylon | Ribbed Cuffs | Zip Pockets | Adjustable Hem',
  },
];

