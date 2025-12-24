import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Auth from './components/Auth';
import UserAccount from './components/UserAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Expanded product data with more categories and products
const PRODUCTS = [
  // Audio Category
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Audio',
    description: 'High-quality sound with active noise cancellation',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    stock: 15,
    badge: 'Sale'
  },
  {
    id: 2,
    name: 'Bluetooth Speaker Pro',
    category: 'Audio',
    description: '360° surround sound, waterproof design',
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviews: 156,
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_1200x.png?v=1709717404',
    stock: 20,
    badge: 'Sale'
  },
  {
    id: 3,
    name: 'Studio Earbuds',
    category: 'Audio',
    description: 'Professional audio quality with noise isolation',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
    stock: 25,
    badge: ''
  },
  
  // Wearables Category
  {
    id: 4,
    name: 'Smart Fitness Watch',
    category: 'Wearables',
    description: 'Track health, fitness, and daily activities',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 287,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    stock: 8,
    badge: 'Sale'
  },
  {
    id: 5,
    name: 'Advanced Sports Band',
    category: 'Wearables',
    description: 'All-day fitness tracking with heart rate monitor',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
    stock: 12,
    badge: 'Hot'
  },
  
  // Smartphones & Tablets
  {
    id: 6,
    name: 'Ultra Premium Tablet',
    category: 'Tablets',
    description: '12.9-inch display with M2 chip',
    price: 799.99,
    originalPrice: 999.99,
    rating: 4.9,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    stock: 6,
    badge: 'Sale'
  },
  {
    id: 7,
    name: 'Smartphone Stand Pro',
    category: 'Accessories',
    description: 'Adjustable stand for all devices',
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 178,
    image: 'https://i5.walmartimages.com/asr/20acfdae-299a-4356-b7ad-afc2eeb72be9.4c0f92658315f347f2a42be295b77a11.jpeg',
    stock: 40,
    badge: ''
  },
  
  // Accessories
  {
    id: 8,
    name: 'USB-C Fast Charging Cable',
    category: 'Accessories',
    description: 'Durable cable with fast data transfer',
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.5,
    reviews: 542,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    stock: 50,
    badge: ''
  },
  {
    id: 9,
    name: 'Premium Screen Protector 2-Pack',
    category: 'Accessories',
    description: 'Tempered glass with crystal clarity',
    price: 9.99,
    originalPrice: 19.99,
    rating: 4.3,
    reviews: 389,
    image: 'https://m.media-amazon.com/images/I/51DSxLA6uSL._AC_.jpg',
    stock: 100,
    badge: ''
  },
  
  // Power
  {
    id: 10,
    name: 'Portable Power Bank 30000mAh',
    category: 'Power',
    description: 'Ultra-fast charging, multiple device support',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.6,
    reviews: 415,
    image: 'https://m.media-amazon.com/images/I/71GM+xZ+ROL._AC_SX679_.jpg',
    stock: 22,
    badge: 'Hot'
  },
  {
    id: 11,
    name: 'Desktop Charger Dock',
    category: 'Power',
    description: 'Multi-device charging station',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    stock: 15,
    badge: ''
  },
  
  // Video & Cameras
  {
    id: 12,
    name: 'Full HD Webcam 1080p',
    category: 'Video',
    description: 'Crystal clear video for calls and streaming',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.4,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop',
    stock: 12,
    badge: ''
  },
  {
    id: 13,
    name: '4K Action Camera',
    category: 'Video',
    description: 'Waterproof 4K video recording',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 312,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6546/6546634_rd.jpg',
    stock: 8,
    badge: 'Sale'
  },
  
  // Peripherals
  {
    id: 14,
    name: 'RGB Mechanical Keyboard',
    category: 'Peripherals',
    description: 'Gaming keyboard with mechanical switches',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.7,
    reviews: 356,
    image: 'https://images.unsplash.com/photo-1587829191301-4a71490f0444?w=500&h=500&fit=crop',
    stock: 18,
    badge: 'Sale'
  },
  {
    id: 15,
    name: 'Wireless Mouse Pro',
    category: 'Peripherals',
    description: 'Ergonomic design with precision tracking',
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
    stock: 30,
    badge: ''
  },
  {
    id: 16,
    name: 'Gaming Mousepad XL',
    category: 'Peripherals',
    description: 'Non-slip surface with RGB lighting',
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1587554801871-640219a08b0f?w=500&h=500&fit=crop',
    stock: 35,
    badge: ''
  },
  
  // Displays
  {
    id: 17,
    name: '4K Gaming Monitor 32"',
    category: 'Displays',
    description: '4K display with 144Hz refresh rate',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 201,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    stock: 5,
    badge: 'Sale'
  },
  {
    id: 18,
    name: 'Portable Monitor 15.6"',
    category: 'Displays',
    description: 'Ultra-thin portable display',
    price: 179.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviews: 234,
    image: 'https://m.media-amazon.com/images/I/71WdRXWl8fL._AC_.jpg',
    stock: 10,
    badge: 'Hot'
  },
  
  // Storage
  {
    id: 19,
    name: 'SSD 1TB Ultra Fast',
    category: 'Storage',
    description: 'NVMe SSD with 7000MB/s speed',
    price: 119.99,
    originalPrice: 169.99,
    rating: 4.7,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    stock: 20,
    badge: 'Sale'
  },
  {
    id: 20,
    name: 'External HDD 2TB',
    category: 'Storage',
    description: 'Portable storage with USB 3.0',
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1628864572803-9d0a099a1e25?w=500&h=500&fit=crop',
    stock: 25,
    badge: ''
  },
  
  // Networking
  {
    id: 21,
    name: 'WiFi 6 Router',
    category: 'Networking',
    description: 'High-speed WiFi 6 with mesh support',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 356,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    stock: 14,
    badge: 'Sale'
  },
  {
    id: 22,
    name: 'USB-C Hub Pro',
    category: 'Networking',
    description: 'Multi-port hub with HDMI and USB 3.0',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1621905251141-c1e62c5f7a0f?w=500&h=500&fit=crop',
    stock: 32,
    badge: ''
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Authentication handlers
  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAccount(false);
  };

  // Get unique categories
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  // Filter products based on search and category
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setShowCart(true)}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        currentUser={currentUser}
        onLoginClick={() => {
          if (!currentUser) setShowAuth(true);
        }}
        onAccountClick={() => setShowAccount(true)}
        onLogout={handleLogout}
      />
      <Hero />
      <main style={{ flex: 1 }}>
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <Cart
        show={showCart}
        onHide={() => setShowCart(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        currentUser={currentUser}
        onLoginNeeded={() => {
          setShowCart(false);
          setShowAuth(true);
        }}
      />
      <Auth
        show={showAuth}
        onLogin={handleLogin}
        onClose={() => setShowAuth(false)}
      />
      <UserAccount
        user={currentUser}
        onLogout={handleLogout}
        onClose={() => setShowAccount(false)}
        show={showAccount}
      />
    </div>
  );
}

export default App;
