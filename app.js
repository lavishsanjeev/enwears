// Enhanced WEAVERS India E-commerce Application with UPI-First Payment Integration - FIXED

// Product data with Indian pricing
const products = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "men",
    price: 799,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    description: "Comfortable 100% cotton t-shirt perfect for everyday wear. Soft, breathable fabric with a relaxed fit that moves with you.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Navy"],
    rating: 4.5,
    reviews: 128,
    currency: "₹"
  },
  {
    id: 2,
    name: "Elegant Midi Dress",
    category: "women",
    price: 1999,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    description: "Sophisticated midi dress perfect for office or evening occasions. Features a flattering A-line silhouette and premium fabric blend.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    rating: 4.7,
    reviews: 94,
    currency: "₹"
  },
  {
    id: 3,
    name: "Premium Denim Jeans",
    category: "men",
    price: 2299,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    description: "High-quality denim with perfect fit and premium finishing. Durable construction with modern slim-fit design.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    rating: 4.6,
    reviews: 156,
    currency: "₹"
  },
  {
    id: 4,
    name: "Cozy Knit Sweater",
    category: "women",
    price: 1699,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    description: "Soft, warm knit sweater perfect for cooler days. Features a comfortable oversized fit and premium wool blend.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Pink", "Gray", "Brown"],
    rating: 4.8,
    reviews: 203,
    currency: "₹"
  },
  {
    id: 5,
    name: "Casual Hoodie",
    category: "men",
    price: 1399,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    description: "Comfortable cotton blend hoodie with kangaroo pocket. Perfect for casual wear with a relaxed, modern fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy", "White"],
    rating: 4.4,
    reviews: 87,
    currency: "₹"
  },
  {
    id: 6,
    name: "Leather Crossbody Bag",
    category: "accessories",
    price: 3299,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
    description: "Premium genuine leather crossbody bag with adjustable strap. Perfect size for daily essentials with elegant design.",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    rating: 4.9,
    reviews: 67,
    currency: "₹"
  },
  {
    id: 7,
    name: "Athletic Leggings",
    category: "women",
    price: 1199,
    originalPrice: 1699,
    image: "https://images.unsplash.com/photo-1506629905236-f4f21d2d5cd3?w=400&h=500&fit=crop",
    description: "High-performance leggings with moisture-wicking fabric. Perfect for workouts or casual wear with four-way stretch.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Purple"],
    rating: 4.6,
    reviews: 142,
    currency: "₹"
  },
  {
    id: 8,
    name: "Designer Sunglasses",
    category: "accessories",
    price: 2299,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
    description: "Stylish sunglasses with UV protection and premium frames. Classic design that complements any outfit.",
    sizes: ["One Size"],
    colors: ["Black", "Tortoise", "Gold"],
    rating: 4.5,
    reviews: 89,
    currency: "₹"
  },
  {
    id: 9,
    name: "Formal Blazer",
    category: "women",
    price: 2899,
    originalPrice: 4200,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    description: "Professional blazer perfect for business meetings or formal events. Tailored fit with premium fabric.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    rating: 4.7,
    reviews: 76,
    currency: "₹"
  },
  {
    id: 10,
    name: "Casual Chinos",
    category: "men",
    price: 1799,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    description: "Versatile chino pants suitable for casual and semi-formal occasions. Comfortable fit with modern styling.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
    rating: 4.3,
    reviews: 124,
    currency: "₹"
  },
  {
    id: 11,
    name: "Silk Scarf",
    category: "accessories",
    price: 999,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1601924377559-4e2e1c20bb29?w=400&h=500&fit=crop",
    description: "Luxurious silk scarf with beautiful patterns. Adds elegance to any outfit with soft, premium material.",
    sizes: ["One Size"],
    colors: ["Blue", "Red", "Pink", "Green"],
    rating: 4.8,
    reviews: 45,
    currency: "₹"
  },
  {
    id: 12,
    name: "Winter Coat",
    category: "women",
    price: 3799,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
    description: "Warm winter coat with insulation and water-resistant fabric. Stylish design keeps you cozy in cold weather.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Camel"],
    rating: 4.9,
    reviews: 92,
    currency: "₹"
  }
];

// UPI apps configuration
const upiApps = {
  phonepe: {
    name: "PhonePe",
    icon: "fas fa-mobile-alt",
    color: "#5f259f",
    deepLink: "phonepe://pay"
  },
  gpay: {
    name: "Google Pay",
    icon: "fab fa-google-pay", 
    color: "#4285f4",
    deepLink: "tez://pay"
  },
  paytm: {
    name: "Paytm",
    icon: "fas fa-wallet",
    color: "#00baf2",
    deepLink: "paytmmp://pay"
  },
  bhim: {
    name: "BHIM UPI",
    icon: "fas fa-university",
    color: "#ff6600",
    deepLink: "bhim://pay"
  }
};

// Application state
let cart = [];
let filteredProducts = [...products];
let currentCategory = 'all';
let currentSort = 'default';
let selectedUpiApp = null;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const newsletterForm = document.getElementById('newsletterForm');

// Modal elements
const productModal = document.getElementById('productModal');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎉 WEAVERS India UPI-First App Loading...');
  renderProducts();
  setupEventListeners();
  updateCartCount();
  setupCategoryNavigation();
  setupWhatsAppIntegration();
  setupUPIIntegration();
  console.log('✅ UPI-First App Initialized Successfully!');
});

// Setup UPI Integration
function setupUPIIntegration() {
  console.log('🔥 Setting up UPI-first payment experience...');
  setupUPIAppsDisplay();
}

// Setup UPI apps display
function setupUPIAppsDisplay() {
  const upiAppsElements = document.querySelectorAll('.upi-app');
  upiAppsElements.forEach((element, index) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const apps = Object.keys(upiApps);
      if (apps[index]) {
        selectUPIApp(apps[index]);
        showSuccessMessage(`${upiApps[apps[index]].name} selected for payment! 📱`);
      }
    });
  });
}

// Select UPI app
function selectUPIApp(appKey) {
  selectedUpiApp = appKey;
  const app = upiApps[appKey];
  
  // Visual feedback
  const allUpiButtons = document.querySelectorAll('.upi-app-btn');
  allUpiButtons.forEach(btn => {
    btn.style.borderColor = 'var(--color-border)';
    btn.style.background = 'var(--color-surface)';
  });
  
  const selectedBtn = document.querySelector(`[data-app="${appKey}"]`);
  if (selectedBtn) {
    selectedBtn.style.borderColor = 'var(--color-primary)';
    selectedBtn.style.background = 'var(--color-bg-1)';
  }
  
  console.log(`✅ UPI App Selected: ${app.name}`);
}

// Render products to grid
function renderProducts() {
  if (!productsGrid) return;
  
  productsGrid.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--color-text-secondary); grid-column: 1 / -1;">No products found</p>';
    return;
  }
  
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-product-id', product.id);
  
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500/f5f5f5/333333?text=Image+Not+Available'">
      ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price">
        <span class="price-current">₹${formatIndianNumber(product.price)}</span>
        ${product.originalPrice > product.price ? `<span class="price-original">₹${formatIndianNumber(product.originalPrice)}</span>` : ''}
      </div>
      <div class="product-rating">
        <div class="stars">
          ${generateStars(product.rating)}
        </div>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <button class="add-to-cart" data-product-id="${product.id}">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  `;
  
  // Add click event for product details (excluding the button)
  card.addEventListener('click', (e) => {
    // Prevent opening modal when clicking on add to cart button
    if (e.target.classList.contains('add-to-cart') || 
        e.target.closest('.add-to-cart') ||
        e.target.classList.contains('upi-app') ||
        e.target.closest('.upi-app')) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    showProductModal(product);
  });
  
  return card;
}

// Format numbers in Indian style (with commas)
function formatIndianNumber(number) {
  return number.toLocaleString('en-IN');
}

// Generate star rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }
  
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }
  
  return starsHTML;
}

// Show product modal with details
function showProductModal(product) {
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <div class="product-modal-content">
      <div class="product-modal-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x500/f5f5f5/333333?text=Image+Not+Available'">
      </div>
      <div class="product-modal-info">
        <h2>${product.name}</h2>
        <div class="product-modal-price">
          <span class="price-current">₹${formatIndianNumber(product.price)}</span>
          ${product.originalPrice > product.price ? `<span class="price-original">₹${formatIndianNumber(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-rating">
          <div class="stars">
            ${generateStars(product.rating)}
          </div>
          <span class="rating-count">(${product.reviews} reviews)</span>
        </div>
        <p>${product.description}</p>
        
        <div class="size-selector">
          <label>Size:</label>
          <div class="size-options">
            ${product.sizes.map(size => `<div class="size-option" data-size="${size}">${size}</div>`).join('')}
          </div>
        </div>
        
        <div class="color-selector">
          <label>Color:</label>
          <div class="color-options">
            ${product.colors.map(color => `<div class="color-option" data-color="${color}">${color}</div>`).join('')}
          </div>
        </div>
        
        <div class="quantity-selector">
          <label>Quantity:</label>
          <button class="quantity-btn" id="decreaseQty">-</button>
          <input type="number" class="quantity-input" id="quantityInput" value="1" min="1" max="10">
          <button class="quantity-btn" id="increaseQty">+</button>
        </div>
        
        <button class="btn btn--primary btn--full-width" id="addToCartModal" data-product-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
        
        <div class="product-benefits" style="margin-top: 16px; padding: 12px; background: var(--color-bg-3); border-radius: var(--radius-base);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: var(--font-size-sm);">
            <i class="fas fa-mobile-alt" style="color: var(--color-primary);"></i>
            <span><strong>Pay instantly with UPI</strong> - PhonePe, GPay, Paytm</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: var(--font-size-sm);">
            <i class="fas fa-shipping-fast" style="color: var(--color-success);"></i>
            <span>Free delivery on orders above ₹1500</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; font-size: var(--font-size-sm);">
            <i class="fas fa-undo" style="color: var(--color-success);"></i>
            <span>7-day easy returns & exchanges</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  setupProductModalInteractions();
  showModal(productModal);
}

// Setup product modal interactions
function setupProductModalInteractions() {
  // Size selection
  const sizeOptions = document.querySelectorAll('.size-option');
  sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
      sizeOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
  
  if (sizeOptions.length > 0) {
    sizeOptions[0].classList.add('selected');
  }
  
  // Color selection
  const colorOptions = document.querySelectorAll('.color-option');
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      colorOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
  
  if (colorOptions.length > 0) {
    colorOptions[0].classList.add('selected');
  }
  
  // Quantity controls
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  const quantityInput = document.getElementById('quantityInput');
  
  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      const current = parseInt(quantityInput.value);
      if (current > 1) {
        quantityInput.value = current - 1;
      }
    });
  }
  
  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      const current = parseInt(quantityInput.value);
      if (current < 10) {
        quantityInput.value = current + 1;
      }
    });
  }
  
  // Add to cart from modal
  const addToCartBtn = document.getElementById('addToCartModal');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = parseInt(addToCartBtn.dataset.productId);
      const selectedSize = document.querySelector('.size-option.selected')?.dataset.size;
      const selectedColor = document.querySelector('.color-option.selected')?.dataset.color;
      const quantity = parseInt(quantityInput.value) || 1;
      
      console.log('Adding to cart from modal:', { productId, quantity, selectedSize, selectedColor });
      
      if (addToCart(productId, quantity, selectedSize, selectedColor)) {
        hideModal(productModal);
        showSuccessMessage('Product added to cart! Ready for UPI payment 🎉');
      }
    });
  }
}

// Add product to cart
function addToCart(productId, quantity = 1, size = null, color = null) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error('Product not found:', productId);
    return false;
  }
  
  const cartItem = {
    id: Date.now() + Math.random(),
    productId: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: quantity,
    size: size || product.sizes[0],
    color: color || product.colors[0]
  };
  
  cart.push(cartItem);
  updateCartCount();
  updateCartButtonText();
  console.log('Cart updated:', cart);
  return true;
}

// Update cart count display
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
  console.log('Cart count updated:', totalItems);
}

// Update cart button text to show UPI payment
function updateCartButtonText() {
  const checkoutAmount = document.getElementById('checkoutAmount');
  const upiCheckoutAmount = document.getElementById('upiCheckoutAmount');
  const subtotalAmount = document.getElementById('subtotalAmount');
  const finalAmount = document.getElementById('finalAmount');
  const payBtnAmount = document.getElementById('payBtnAmount');
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (checkoutAmount) checkoutAmount.textContent = formatIndianNumber(total);
  if (upiCheckoutAmount) upiCheckoutAmount.textContent = formatIndianNumber(total);
  if (subtotalAmount) subtotalAmount.textContent = formatIndianNumber(total);
  if (finalAmount) finalAmount.textContent = formatIndianNumber(total);
  if (payBtnAmount) payBtnAmount.textContent = formatIndianNumber(total);
}

// Show cart modal with UPI focus
function showCartModal() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
        <p>Your cart is empty</p>
        <p style="font-size: var(--font-size-sm);">Add some products and pay instantly with UPI!</p>
      </div>
    `;
    if (cartTotal) cartTotal.textContent = '0';
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80/f5f5f5/333333?text=No+Image'">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-details">Size: ${item.size}, Color: ${item.color}</div>
          <div class="cart-item-price">₹${formatIndianNumber(item.price)}</div>
        </div>
        <div class="cart-item-actions">
          <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
          <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove item">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.textContent = formatIndianNumber(total);
  }
  
  updateCartButtonText();
  showModal(cartModal);
}

// Update cart item quantity
window.updateCartItemQuantity = function(itemId, change) {
  const item = cart.find(item => item.id === itemId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartCount();
      updateCartButtonText();
      showCartModal();
    }
  }
};

// Remove item from cart
window.removeFromCart = function(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartCount();
  updateCartButtonText();
  showCartModal();
  showSuccessMessage('Item removed from cart');
};

// Show enhanced UPI checkout modal
function showCheckoutModal() {
  updateCartButtonText();
  hideModal(cartModal);
  showModal(checkoutModal);
  
  // Set up shipping calculation
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingAmount = document.getElementById('shippingAmount');
  if (shippingAmount) {
    shippingAmount.textContent = total >= 1500 ? 'FREE' : '₹50';
  }
}

// Filter and sort products
function filterAndSortProducts() {
  let filtered = [...products];
  
  // Filter by category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(product => product.category === currentCategory);
  }
  
  // Filter by search
  const searchTerm = searchInput?.value.toLowerCase().trim();
  if (searchTerm) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    );
  }
  
  // Sort products
  switch (currentSort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  
  filteredProducts = filtered;
  renderProducts();
}

// Setup WhatsApp integration
function setupWhatsAppIntegration() {
  // WhatsApp floating button
  const whatsappFloat = document.querySelector('.whatsapp-float-btn');
  if (whatsappFloat) {
    whatsappFloat.addEventListener('click', (e) => {
      e.preventDefault();
      const message = encodeURIComponent('Hi! I need help with my WEAVERS order. I prefer UPI payments.');
      const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
      window.open(whatsappUrl, '_blank');
      console.log('WhatsApp support clicked');
    });
  }
  
  // Header WhatsApp button
  const headerWhatsapp = document.querySelector('.whatsapp-btn');
  if (headerWhatsapp) {
    headerWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const message = encodeURIComponent('Hi! I need support from WEAVERS regarding UPI payments');
      const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
      window.open(whatsappUrl, '_blank');
    });
  }
}

// Setup event listeners
function setupEventListeners() {
  // Add to cart buttons (event delegation with improved specificity)
  document.addEventListener('click', (e) => {
    if (e.target.matches('.add-to-cart') || e.target.closest('.add-to-cart')) {
      e.preventDefault();
      e.stopPropagation();
      const btn = e.target.matches('.add-to-cart') ? e.target : e.target.closest('.add-to-cart');
      const productId = parseInt(btn.dataset.productId);
      console.log('Add to cart clicked for product:', productId);
      
      if (addToCart(productId)) {
        showSuccessMessage('Added to cart! Pay instantly with UPI 🛒📱');
      }
      return;
    }
    
    // UPI app selection in checkout (specific event handling)
    if (e.target.matches('.upi-app-btn') || e.target.closest('.upi-app-btn')) {
      e.preventDefault();
      e.stopPropagation();
      const btn = e.target.matches('.upi-app-btn') ? e.target : e.target.closest('.upi-app-btn');
      const app = btn.dataset.app;
      if (app) {
        selectUPIApp(app);
      }
      return;
    }
  });
  
  // Cart button - Fixed event listener
  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Cart button clicked, cart items:', cart.length);
      showCartModal();
    });
  }
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    });
  }
  
  // Close mobile menu when clicking outside
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
  
  // Category filter
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      console.log('Category filter changed to:', currentCategory);
      filterAndSortProducts();
    });
  }
  
  // Sort filter
  if (sortFilter) {
    sortFilter.addEventListener('change', (e) => {
      currentSort = e.target.value;
      console.log('Sort filter changed to:', currentSort);
      filterAndSortProducts();
    });
  }
  
  // Search input
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        filterAndSortProducts();
      }, 300);
    });
    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(searchTimeout);
        filterAndSortProducts();
      }
    });
  }
  
  // Modal close buttons and overlays
  setupModalEventListeners();
  
  // Newsletter form
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      showSuccessMessage('Thank you for subscribing! Get UPI payment updates 📧');
      e.target.reset();
    });
  }
  
  // Checkout form
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'checkoutForm') {
      e.preventDefault();
      processCheckout();
    }
  });
  
  // Hero shop now button
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const productsSection = document.querySelector('.products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Checkout button in cart modal - Fixed delegation
  document.addEventListener('click', (e) => {
    if (e.target.matches('#checkoutBtn') || e.target.closest('#checkoutBtn')) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Checkout button clicked');
      if (cart.length === 0) {
        showSuccessMessage('Please add items to cart first');
        return;
      }
      showCheckoutModal();
    }
    
    // UPI QR code button
    if (e.target.matches('.upi-qr-btn') || e.target.closest('.upi-qr-btn')) {
      e.preventDefault();
      e.stopPropagation();
      showUPIQRCode();
    }
  });
}

// Setup modal event listeners
function setupModalEventListeners() {
  // Product modal
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal(productModal);
    });
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal(productModal);
    });
  }
  
  // Cart modal
  const cartModalClose = document.getElementById('cartModalClose');
  const cartModalOverlay = document.getElementById('cartModalOverlay');
  
  if (cartModalClose) {
    cartModalClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal(cartModal);
    });
  }
  if (cartModalOverlay) {
    cartModalOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal(cartModal);
    });
  }
  
  // Checkout modal
  const checkoutModalClose = document.getElementById('checkoutModalClose');
  const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
  
  if (checkoutModalClose) {
    checkoutModalClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal(checkoutModal);
    });
  }
  if (checkoutModalOverlay) {
    checkoutModalOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      hideModal(checkoutModal);
    });
  }
}

// Setup category navigation - Fixed
function setupCategoryNavigation() {
  // Category cards
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const category = card.dataset.category;
      console.log('Category card clicked:', category);
      navigateToCategory(category);
    });
  });
  
  // Navigation links - Fixed event handling
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      console.log('Nav link clicked:', href);
      
      if (href === '#mens') {
        e.preventDefault();
        e.stopPropagation();
        navigateToCategory('men');
        updateActiveNavLink(link);
        closeMobileMenu();
      } else if (href === '#womens') {
        e.preventDefault();
        e.stopPropagation();
        navigateToCategory('women');
        updateActiveNavLink(link);
        closeMobileMenu();
      } else if (href === '#accessories') {
        e.preventDefault();
        e.stopPropagation();
        navigateToCategory('accessories');
        updateActiveNavLink(link);
        closeMobileMenu();
      } else if (href === '#sale') {
        e.preventDefault();
        e.stopPropagation();
        showSaleProducts();
        updateActiveNavLink(link);
        closeMobileMenu();
      } else if (href.startsWith('#')) {
        e.preventDefault();
        e.stopPropagation();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        updateActiveNavLink(link);
        closeMobileMenu();
      }
    });
  });
}

// Show sale products
function showSaleProducts() {
  currentCategory = 'all';
  if (categoryFilter) {
    categoryFilter.value = 'all';
  }
  filteredProducts = products.filter(product => product.originalPrice > product.price);
  renderProducts();
  
  const productsSection = document.querySelector('.products');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  const sectionTitle = document.querySelector('.products .section-title');
  if (sectionTitle) {
    const originalTitle = sectionTitle.textContent;
    sectionTitle.textContent = 'Festival Sale Products - Pay with UPI!';
    
    setTimeout(() => {
      sectionTitle.textContent = originalTitle;
    }, 5000);
  }
}

// Navigate to category
function navigateToCategory(category) {
  console.log('Navigating to category:', category);
  currentCategory = category;
  if (categoryFilter) {
    categoryFilter.value = category;
  }
  filterAndSortProducts();
  
  const productsSection = document.querySelector('.products');
  if (productsSection) {
    productsSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

// Close mobile menu
function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
}

// Modal utilities
function showModal(modal) {
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modal) {
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Process checkout with enhanced UPI flow
function processCheckout() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked')?.value;
  const paymentMethod = selectedUpiApp ? `UPI (${upiApps[selectedUpiApp].name})` : (selectedPayment || 'UPI');
  
  const checkoutModal = document.getElementById('checkoutModal');
  const modalBody = checkoutModal.querySelector('.modal-body');
  
  // Show processing with UPI focus
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 3rem;">
      <div style="color: var(--color-primary); font-size: 4rem; margin-bottom: 1rem;">
        <i class="fas fa-mobile-alt"></i>
      </div>
      <div class="spinner"></div>
      <h3 style="color: var(--color-primary); margin: 1rem 0;">Processing UPI Payment...</h3>
      <p>Redirecting to ${paymentMethod} gateway</p>
      <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Please complete the payment on your device</p>
      <div style="background: var(--color-bg-3); padding: 1rem; border-radius: var(--radius-base); margin-top: 1rem;">
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-success);">
          <i class="fas fa-shield-alt"></i> Secured by Razorpay | No extra charges
        </p>
      </div>
    </div>
  `;
  
  // Simulate payment processing
  setTimeout(() => {
    if (selectedUpiApp || (!selectedPayment || selectedPayment === 'upi')) {
      showUPIPaymentFlow();
    } else if (selectedPayment === 'cod') {
      showCODConfirmation();
    } else {
      showPaymentSuccess(paymentMethod);
    }
  }, 2500);
}

// Show UPI payment flow
function showUPIPaymentFlow() {
  const checkoutModal = document.getElementById('checkoutModal');
  const modalBody = checkoutModal.querySelector('.modal-body');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const appName = selectedUpiApp ? upiApps[selectedUpiApp].name : 'UPI App';
  
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <div style="color: var(--color-primary); font-size: 3rem; margin-bottom: 1rem;">
        <i class="fas fa-mobile-alt"></i>
      </div>
      <h2 style="color: var(--color-primary); margin-bottom: 1rem;">UPI Payment Processing</h2>
      <div style="background: var(--color-surface); padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 2rem; border: 2px solid var(--color-primary);">
        <div style="font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold); color: var(--color-primary); margin-bottom: 0.5rem;">
          Pay ₹${formatIndianNumber(total)}
        </div>
        <p style="margin: 0; color: var(--color-text-secondary);">via ${appName}</p>
      </div>
      
      <div class="spinner" style="margin: 2rem auto;"></div>
      
      <p style="font-size: var(--font-size-lg); margin-bottom: 1rem;">
        ${selectedUpiApp ? `Opening ${appName}...` : 'Choose your UPI app to complete payment'}
      </p>
      <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">
        Complete the payment on your UPI app and return to this page
      </p>
      
      <div style="background: var(--color-bg-3); padding: 1rem; border-radius: var(--radius-base); margin: 1.5rem 0;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: var(--font-size-sm);">
            <i class="fas fa-bolt" style="color: var(--color-success);"></i>
            <span>Instant</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: var(--font-size-sm);">
            <i class="fas fa-shield-alt" style="color: var(--color-success);"></i>
            <span>100% Secure</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: var(--font-size-sm);">
            <i class="fas fa-rupee-sign" style="color: var(--color-success);"></i>
            <span>No Extra Charges</span>
          </div>
        </div>
      </div>
      
      <button class="btn btn--secondary" onclick="showCheckoutModal()" style="margin-top: 1rem;">
        <i class="fas fa-arrow-left"></i> Back to Payment Options
      </button>
    </div>
  `;
  
  // Simulate UPI app redirect
  setTimeout(() => {
    if (selectedUpiApp) {
      console.log(`Opening ${upiApps[selectedUpiApp].name}...`);
    }
    
    // Show payment success after simulation
    setTimeout(() => {
      showPaymentSuccess('UPI');
    }, 3000);
  }, 1500);
}

// Show UPI QR code
function showUPIQRCode() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  showSuccessMessage('UPI QR Code feature will redirect to payment gateway 📱');
  
  setTimeout(() => {
    showUPIPaymentFlow();
  }, 1000);
}

// Show COD confirmation
function showCODConfirmation() {
  const checkoutModal = document.getElementById('checkoutModal');
  const modalBody = checkoutModal.querySelector('.modal-body');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <div style="color: var(--color-success); font-size: 4rem; margin-bottom: 1rem;">
        <i class="fas fa-money-bill-wave"></i>
      </div>
      <h2 style="color: var(--color-success); margin-bottom: 1rem;">Order Confirmed!</h2>
      <p>Your Cash on Delivery order has been placed successfully.</p>
      <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); margin: 1.5rem 0; border: 1px solid var(--color-border);">
        <p><strong>Order #:</strong> WV${Date.now()}</p>
        <p><strong>Total Amount:</strong> ₹${formatIndianNumber(total)}</p>
        <p><strong>Payment Method:</strong> Cash on Delivery</p>
        <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
      </div>
      <div style="background: var(--color-bg-1); padding: 1rem; border-radius: var(--radius-base); margin: 1rem 0;">
        <p style="margin: 0; font-size: var(--font-size-sm);">
          <i class="fas fa-mobile-alt" style="color: var(--color-primary);"></i>
          <strong>Next time, try UPI for instant payment!</strong> PhonePe, GPay, Paytm available
        </p>
      </div>
      <div style="background: var(--color-bg-4); padding: 1rem; border-radius: var(--radius-base); margin: 1rem 0;">
        <p style="margin: 0; font-size: var(--font-size-sm);">
          <i class="fas fa-info-circle"></i>
          Please keep exact change ready. ₹${formatIndianNumber(total)} to be paid on delivery.
        </p>
      </div>
      <button class="btn btn--primary" onclick="completeOrder()">Continue Shopping</button>
    </div>
  `;
}

// Show payment success
function showPaymentSuccess(method = 'UPI Payment') {
  const checkoutModal = document.getElementById('checkoutModal');
  const modalBody = checkoutModal.querySelector('.modal-body');
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderNumber = `WV${Date.now()}`;
  
  modalBody.innerHTML = `
    <div style="text-align: center; padding: 2rem;">
      <div style="color: var(--color-success); font-size: 4rem; margin-bottom: 1rem; animation: bounce 1s;">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="success-message" style="font-size: 1.2rem; margin-bottom: 1.5rem; display: block;">
        <i class="fas fa-mobile-alt"></i>
        ${method} successful! Order placed instantly 🎉
      </div>
      <h2 style="margin-bottom: 1rem;">Thank you for choosing WEAVERS!</h2>
      <p>Your order has been confirmed and will be processed immediately.</p>
      
      <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-lg); margin: 1.5rem 0; border: 1px solid var(--color-success);">
        <p><strong>Order #:</strong> ${orderNumber}</p>
        <p><strong>Total Amount:</strong> ₹${formatIndianNumber(total)}</p>
        <p><strong>Payment Method:</strong> ${method}</p>
        <p><strong>Payment Status:</strong> <span style="color: var(--color-success);">✅ Confirmed</span></p>
        <p><strong>Estimated Delivery:</strong> ${total >= 1500 ? '1-2 business days (Free Express)' : '3-5 business days'}</p>
      </div>
      
      <div style="background: var(--color-bg-3); padding: 1rem; border-radius: var(--radius-base); margin: 1rem 0;">
        <p style="margin: 0; font-size: var(--font-size-sm); color: var(--color-success);">
          <i class="fas fa-mobile-alt"></i>
          <strong>UPI Payment Benefits:</strong> Instant confirmation, no processing delays, secure transaction
        </p>
      </div>
      
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem;">
        <button class="btn btn--primary" onclick="completeOrder()">
          <i class="fas fa-shopping-bag"></i> Continue Shopping
        </button>
        <a href="https://wa.me/919876543210?text=Hi!%20My%20order%20number%20is%20${orderNumber}.%20I%20paid%20via%20UPI.%20Can%20you%20help%20me%20track%20it?" target="_blank" class="btn btn--outline" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none;">
          <i class="fab fa-whatsapp"></i> Track on WhatsApp
        </a>
      </div>
      
      <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: 1rem;">
        Order confirmation sent to your email and WhatsApp
      </p>
    </div>
  `;
}

// Complete order
window.completeOrder = function() {
  cart = [];
  updateCartCount();
  updateCartButtonText();
  selectedUpiApp = null;
  hideModal(checkoutModal);
  showSuccessMessage('Thank you for shopping with WEAVERS! 🙏 UPI makes it so easy!');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Reset any form states
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.reset();
  }
};

// Show success message
function showSuccessMessage(message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message fade-in';
  successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  
  successDiv.style.position = 'fixed';
  successDiv.style.top = '20px';
  successDiv.style.right = '20px';
  successDiv.style.zIndex = '9999';
  successDiv.style.maxWidth = '320px';
  successDiv.style.boxShadow = 'var(--shadow-lg)';
  
  document.body.appendChild(successDiv);
  
  setTimeout(() => {
    if (successDiv.parentNode) {
      successDiv.parentNode.removeChild(successDiv);
    }
  }, 4000);
}

// Initialize cart
cart = [];

// Console messages for developers
console.log('🎉 WEAVERS India UPI-First E-commerce App Loaded!');
console.log('📱 UPI Payment Apps: PhonePe, Google Pay, Paytm, BHIM');
console.log('📦 Free Shipping on orders above ₹1500');
console.log('🔙 7-day easy returns');
console.log('💳 UPI Primary, Cards/COD/Net Banking Secondary');
console.log('🛡️ Secured by Razorpay SSL');