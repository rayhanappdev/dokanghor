/**
 * Modern E-Commerce Application State & Engine
 */

let PRODUCTS = JSON.parse(localStorage.getItem('bd_store_products')) || [
  {
    id: 1,
    name: "ওয়্যারলেস অ্যাক্টিভ নয়েজ ক্যানসেলিং হেডফোন",
    category: "gadgets",
    categoryName: "গ্যাজেটস",
    price: 2450,
    oldPrice: 3200,
    rating: 4.9,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    description: "উচ্চমানের ব্যাস ও অ্যাক্টিভ নয়েজ ক্যান্সেলেশন সমৃদ্ধ প্রিমিয়াম হেডফোন। টানা ৩০ ঘণ্টার ব্যাটারি ব্যাকআপ।",
    badge: "হট ডিল"
  },
  {
    id: 2,
    name: "স্মার্ট ফিটনেস ওয়াচ Pro 7 AMOLED",
    category: "gadgets",
    categoryName: "গ্যাজেটস",
    price: 1850,
    oldPrice: 2600,
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    description: "হার্টরেট মনিটর, স্লিপ ট্র্যাকিং এবং ব্লুটুথ কলিং সুবিধাযুক্ত প্রিমিয়াম অ্যামোলেড ডিসপ্লে ওয়াচ।",
    badge: "২০% ছাড়"
  },
  {
    id: 3,
    name: "প্রিমিয়াম ফরমাল অ্যান্ড ক্যাজুয়াল শার্ট",
    category: "fashion",
    categoryName: "ফ্যাশন",
    price: 990,
    oldPrice: 1500,
    rating: 4.7,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    description: "১০০% পিওর কটন ফেব্রিক দিয়ে তৈরি, আরামদায়ক ও নিখুঁত ফিনিশিং। যেকোনো পার্টি বা অফিসের জন্য মানানসই।",
    badge: "নতুন"
  },
  {
    id: 4,
    name: "মেকানিক্যাল আরজিবি গেমিং কীবোর্ড",
    category: "electronics",
    categoryName: "ইলেকট্রনিক্স",
    price: 3200,
    oldPrice: 3900,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    description: "কাস্টম ব্লু সুইচ এবং ১৮টি কাস্টমাইজেবল আরজিবি লাইটিং ইফেক্ট সহ হেভি ডিউটি মেকানিক্যাল কীবোর্ড।",
    badge: "বেস্ট সেলার"
  },
  {
    id: 5,
    name: "ওয়াটারপ্রুফ অ্যান্টি-থেফ্ট ট্রাভেল ব্যাকপ্যাক",
    category: "fashion",
    categoryName: "ফ্যাশন",
    price: 1350,
    oldPrice: 1950,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    description: "ল্যাপটপ চেম্বার এবং বিল্ট-ইন ইউএসবি চার্জিং পোর্ট সহ অত্যন্ত টেকসই ও ওয়াটারপ্রুফ ট্রাভেল ব্যাকপ্যাক।",
    badge: "জনপ্রিয়"
  },
  {
    id: 6,
    name: "পোর্টেবল হাই-বেস ব্লুটুথ স্পিকার",
    category: "gadgets",
    categoryName: "গ্যাজেটস",
    price: 1150,
    oldPrice: 1650,
    rating: 4.7,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    description: "ওয়াটার রেজিস্ট্যান্ট এবং ১০ মিটার ওয়্যারলেস রেঞ্জ সহ স্পষ্ট ক্রিস্টাল সাউন্ড ও ডিপ বেস।",
    badge: "অফার"
  },
  {
    id: 7,
    name: "ফাস্ট চার্জিং পাওয়ার ব্যাংক 20,000 mAh (22.5W)",
    category: "electronics",
    categoryName: "ইলেকট্রনিক্স",
    price: 1750,
    oldPrice: 2300,
    rating: 4.8,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
    description: "PD + QC 3.0 ফাস্ট চার্জিং সমর্থন করে। একসাথে ৩টি ডিভাইস চার্জ করার চমৎকার সুবিধা।",
    badge: "বেস্ট সেলার"
  },
  {
    id: 8,
    name: "আল্ট্রা-লাইট ব্রিদেবল রানিং স্নিকার্স",
    category: "fashion",
    categoryName: "ফ্যাশন",
    price: 1650,
    oldPrice: 2450,
    rating: 4.6,
    reviews: 90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    description: "হালকা ও নরম সোলের আরামদায়ক রানিং স্নিকার্স। প্রতিদিনের হাঁটাচলা ও শরীরচর্চার জন্য আদর্শ।",
    badge: "স্পেশাল"
  }
];

if (!localStorage.getItem('bd_store_products')) {
  localStorage.setItem('bd_store_products', JSON.stringify(PRODUCTS));
}

const CATEGORIES = [
  { id: "all", name: "সব পণ্য" },
  { id: "gadgets", name: "গ্যাজেটস" },
  { id: "electronics", name: "ইলেকট্রনিক্স" },
  { id: "fashion", name: "ফ্যাশন" }
];

// App State
let cart = JSON.parse(localStorage.getItem('bd_shop_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bd_shop_wishlist')) || [];
let selectedCategory = "all";
let searchQuery = "";
let sortBy = "default";
let deliveryFee = 60;
let discountAmount = 0;
let appliedCouponCode = "";

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.body.classList.toggle('dark-mode', isDark);

  const icon = document.getElementById('darkModeIcon');
  if (icon) {
    icon.classList.toggle('fa-moon', !isDark);
    icon.classList.toggle('fa-sun', isDark);
    icon.classList.toggle('text-amber-400', isDark);
    icon.classList.toggle('text-slate-600', !isDark);
  }

  localStorage.setItem('bd_shop_theme', theme);
}

function toggleTheme() {
  const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
  applyTheme(nextTheme);
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('bd_shop_theme') || 'light';
  applyTheme(savedTheme);

  renderCategories();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEvents();
});

function setupEvents() {
  document.getElementById('darkModeToggle')?.addEventListener('click', toggleTheme);

  // Navigation & Search
  document.getElementById('searchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });
  document.getElementById('mobileSearchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  // Sort
  document.getElementById('sortSelect')?.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });

  // Cart Drawer
  document.getElementById('cartToggleBtn')?.addEventListener('click', openCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartBackdrop')?.addEventListener('click', closeCart);

  // Wishlist Modal
  document.getElementById('wishlistToggleBtn')?.addEventListener('click', openWishlist);
  document.getElementById('wishlistCloseBtn')?.addEventListener('click', closeWishlist);
  document.getElementById('wishlistBackdrop')?.addEventListener('click', closeWishlist);

  // Quick View
  document.getElementById('quickViewCloseBtn')?.addEventListener('click', closeQuickView);
  document.getElementById('quickViewBackdrop')?.addEventListener('click', closeQuickView);

  // Checkout
  document.getElementById('proceedToCheckoutBtn')?.addEventListener('click', () => {
    closeCart();
    openCheckout();
  });
  document.getElementById('checkoutCloseBtn')?.addEventListener('click', closeCheckout);
  document.getElementById('checkoutBackdrop')?.addEventListener('click', closeCheckout);

  // Delivery selection
  document.querySelectorAll('input[name="deliveryArea"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      deliveryFee = e.target.value === 'inside' ? 60 : 120;
      updateDeliveryStyles();
      updateCheckoutSummary();
    });
  });

  // Checkout submit
  document.getElementById('checkoutForm')?.addEventListener('submit', handleCheckoutSubmit);

  // Success modal OK
  document.getElementById('successOkBtn')?.addEventListener('click', () => {
    document.getElementById('successModal')?.classList.add('hidden');
  });
}

function renderCategories() {
  const container = document.getElementById('categoryTabs');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(cat => `
    <button 
      onclick="filterCategory('${cat.id}')"
      class="px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
        selectedCategory === cat.id 
          ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20' 
          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
      }"
    >
      ${cat.name}
    </button>
  `).join('');
}

function filterCategory(id) {
  selectedCategory = id;
  renderCategories();
  renderProducts();
}

function renderProducts() {
  // [যুক্ত করা অংশ ১]: অ্যাডমিন প্যানেল থেকে লেটেস্ট প্রোডাক্ট লোড করা
  PRODUCTS = JSON.parse(localStorage.getItem('bd_store_products')) || PRODUCTS;

  let list = PRODUCTS.filter(p => {
    const matchCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchQuery = p.name.toLowerCase().includes(searchQuery);
    return matchCat && matchQuery;
  });

  // Sort logic
  if (sortBy === 'price-low') list.sort((a, b) => Number(a.price) - Number(b.price));
  else if (sortBy === 'price-high') list.sort((a, b) => Number(b.price) - Number(a.price));
  else if (sortBy === 'rating') list.sort((a, b) => Number(b.rating) - Number(a.rating));

  const badge = document.getElementById('productCountBadge');
  if (badge) badge.textContent = `${list.length} টি পণ্য`;

  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '';
    emptyState?.classList.remove('hidden');
    return;
  }

  emptyState?.classList.add('hidden');
  grid.innerHTML = list.map(p => {
    const inWishlist = wishlist.includes(p.id);
    return `
      <div class="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative">
        
        <!-- Wishlist Button -->
        <button 
          onclick="toggleWishlist(${p.id})" 
          class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-rose-600 shadow-sm transition"
        >
          <i class="${inWishlist ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart text-sm"></i>
        </button>

        <!-- Product Image -->
        <div class="relative pt-[85%] overflow-hidden bg-slate-50 cursor-pointer" onclick="openQuickView(${p.id})">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          >
          ${p.badge ? `
            <span class="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg shadow">
              ${p.badge}
            </span>
          ` : ''}
        </div>

        <!-- Content -->
        <div class="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[10px] font-bold text-brand-600 uppercase tracking-wider">${p.categoryName || p.category}</span>
            <h3 onclick="openQuickView(${p.id})" class="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 mt-1 mb-1.5 hover:text-brand-600 cursor-pointer transition">
              ${p.name}
            </h3>
            
            <div class="flex items-center gap-1 text-amber-400 text-xs mb-2">
              <i class="fa-solid fa-star"></i>
              <span class="font-bold text-slate-700 ml-1">${p.rating || '5.0'}</span>
              <span class="text-[11px] text-slate-400">(${p.reviews || 1})</span>
            </div>
          </div>

          <!-- Price & Actions -->
          <div>
            <div class="flex items-baseline gap-2 mb-3">
              <span class="text-base sm:text-lg font-extrabold text-slate-900">৳${Number(p.price).toLocaleString('bn-BD')}</span>
              ${p.oldPrice ? `<span class="text-xs text-slate-400 line-through">৳${Number(p.oldPrice).toLocaleString('bn-BD')}</span>` : ''}
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button 
                onclick="addToCart(${p.id})"
                class="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded-xl text-xs transition flex items-center justify-center gap-1.5"
              >
                <i class="fa-solid fa-cart-plus"></i>
                <span class="hidden sm:inline">কার্ট</span>
              </button>

              <button 
                onclick="buyNow(${p.id})"
                class="bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 rounded-xl text-xs transition shadow-md shadow-brand-600/20 flex items-center justify-center gap-1"
              >
                <span>অর্ডার</span>
                <i class="fa-solid fa-bolt text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Cart Functions
function addToCart(productId, qty = 1) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({ ...p, quantity: qty });
  }

  saveCart();
  updateCartUI();
  showToast(`"${p.name}" কার্টে যোগ করা হয়েছে`);
}

function buyNow(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const existing = cart.find(item => item.id === productId);
  if (!existing) {
    cart.push({ ...p, quantity: 1 });
    saveCart();
    updateCartUI();
  }
  openCheckout();
}

function updateQuantity(productId, delta) {
  const item = cart.find(x => x.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(x => x.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(x => x.id !== productId);
  saveCart();
  updateCartUI();
  showToast("পণ্য সরানো হয়েছে");
}

function saveCart() {
  localStorage.setItem('bd_shop_cart', JSON.stringify(cart));
}

function getSubtotal() {
  return cart.reduce((sum, i) => sum + (Number(i.price) * i.quantity), 0);
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartBadge = document.getElementById('cartCountBadge');
  const mobBadge = document.getElementById('mobileCartBadge');
  if (cartBadge) cartBadge.textContent = totalCount;
  if (mobBadge) mobBadge.textContent = totalCount;

  const subtotal = getSubtotal();
  const subtotalText = document.getElementById('cartSubtotalText');
  if (subtotalText) subtotalText.textContent = `৳${subtotal.toLocaleString('bn-BD')}`;

  const list = document.getElementById('cartItemsList');
  const empty = document.getElementById('emptyCartView');
  const footer = document.getElementById('cartFooter');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = '';
    empty?.classList.remove('hidden');
    footer?.classList.add('hidden');
    return;
  }

  empty?.classList.add('hidden');
  footer?.classList.remove('hidden');

  list.innerHTML = cart.map(item => `
    <div class="flex items-center gap-3 p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl">
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-bold text-slate-800 truncate">${item.name}</h4>
        <p class="text-xs text-brand-600 font-bold mt-0.5">৳${Number(item.price).toLocaleString('bn-BD')}</p>
        
        <div class="flex items-center gap-2 mt-1.5">
          <div class="flex items-center border border-slate-200 rounded-lg bg-white">
            <button onclick="updateQuantity(${item.id}, -1)" class="px-2 text-slate-600 hover:bg-slate-100 rounded-l">-</button>
            <span class="px-2 text-xs font-bold text-slate-800">${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)" class="px-2 text-slate-600 hover:bg-slate-100 rounded-r">+</button>
          </div>
        </div>
      </div>
      <button onclick="removeFromCart(${item.id})" class="text-slate-400 hover:text-rose-500 p-2">
        <i class="fa-solid fa-trash-can text-sm"></i>
      </button>
    </div>
  `).join('');
}

// Coupon Logic
function applyCoupon() {
  const code = document.getElementById('couponInput')?.value.trim().toUpperCase();
  const msg = document.getElementById('couponMessage');
  const discountRow = document.getElementById('discountRow');
  const discountText = document.getElementById('cartDiscountText');

  if (code === 'EID2026') {
    const subtotal = getSubtotal();
    discountAmount = Math.round(subtotal * 0.10);
    appliedCouponCode = code;

    if (msg) {
      msg.textContent = "১০% ডিসকাউন্ট কার্যকর হয়েছে!";
      msg.className = "text-[11px] text-brand-600 font-semibold block";
    }
    discountRow?.classList.remove('hidden');
    if (discountText) discountText.textContent = `-৳${discountAmount.toLocaleString('bn-BD')}`;
    showToast("কুপন সফলভাবে যোগ হয়েছে!");
  } else if (code === 'DOKAN50') {
    discountAmount = 50;
    appliedCouponCode = code;
    if (msg) {
      msg.textContent = "৳৫০ ডিসকাউন্ট কার্যকর হয়েছে!";
      msg.className = "text-[11px] text-brand-600 font-semibold block";
    }
    discountRow?.classList.remove('hidden');
    if (discountText) discountText.textContent = `-৳${discountAmount.toLocaleString('bn-BD')}`;
    showToast("কুপন সফলভাবে যোগ হয়েছে!");
  } else {
    discountAmount = 0;
    appliedCouponCode = "";
    if (msg) {
      msg.textContent = "অবৈধ কুপন কোড!";
      msg.className = "text-[11px] text-rose-500 font-semibold block";
    }
    discountRow?.classList.add('hidden');
  }
}

// Wishlist Logic
function toggleWishlist(productId) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter(id => id !== productId);
    showToast("উইশলিস্ট থেকে সরানো হয়েছে");
  } else {
    wishlist.push(productId);
    showToast("উইশলিস্টে যুক্ত করা হয়েছে");
  }
  localStorage.setItem('bd_shop_wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const count = wishlist.length;
  const wishBadge = document.getElementById('wishlistCountBadge');
  const mobWishBadge = document.getElementById('mobileWishBadge');
  if (wishBadge) wishBadge.textContent = count;
  if (mobWishBadge) mobWishBadge.textContent = count;

  const list = document.getElementById('wishlistItemsList');
  if (!list) return;

  if (wishlist.length === 0) {
    list.innerHTML = `<p class="text-center text-xs text-slate-400 py-10">কোনো সংরক্ষিত পণ্য নেই</p>`;
    return;
  }

  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  list.innerHTML = items.map(item => `
    <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
      <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl">
      <div class="flex-1 min-w-0">
        <h4 class="text-xs font-bold text-slate-800 truncate">${item.name}</h4>
        <p class="text-xs text-brand-600 font-bold mt-0.5">৳${Number(item.price).toLocaleString('bn-BD')}</p>
      </div>
      <button onclick="addToCart(${item.id}); toggleWishlist(${item.id});" class="bg-brand-600 text-white p-2 rounded-xl text-xs hover:bg-brand-700" title="কার্টে নিন">
        <i class="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  `).join('');
}

// Quick View Modal
function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const content = document.getElementById('quickViewContent');
  if (!content) return;

  content.innerHTML = `
    <div class="rounded-2xl overflow-hidden bg-slate-100">
      <img src="${p.image}" alt="${p.name}" class="w-full h-72 object-cover">
    </div>
    <div class="flex flex-col justify-between">
      <div>
        <span class="text-xs font-bold text-brand-600 uppercase tracking-wider">${p.categoryName || p.category}</span>
        <h2 class="text-lg font-bold text-slate-900 mt-1 mb-2">${p.name}</h2>
        <div class="flex items-center gap-1 text-amber-400 text-xs mb-3">
          <i class="fa-solid fa-star"></i>
          <span class="font-bold text-slate-700 ml-1">${p.rating || '5.0'} (${p.reviews || 1} টি রিভিউ)</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed mb-4">${p.description}</p>
        <div class="flex items-baseline gap-2 mb-6">
          <span class="text-2xl font-extrabold text-slate-900">৳${Number(p.price).toLocaleString('bn-BD')}</span>
          ${p.oldPrice ? `<span class="text-sm text-slate-400 line-through">৳${Number(p.oldPrice).toLocaleString('bn-BD')}</span>` : ''}
        </div>
      </div>
      <div class="flex gap-3">
        <button onclick="addToCart(${p.id}); closeQuickView();" class="flex-1 bg-slate-900 hover:bg-black text-white font-bold py-3 rounded-xl text-xs transition flex items-center justify-center gap-2">
          <i class="fa-solid fa-cart-plus"></i> কার্টে যোগ করুন
        </button>
        <button onclick="buyNow(${p.id}); closeQuickView();" class="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-md flex items-center justify-center gap-2">
          <i class="fa-solid fa-bolt"></i> এখনই কিনুন
        </button>
      </div>
    </div>
  `;
  document.getElementById('quickViewModal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('quickViewModal')?.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Drawer Open/Close Handlers
function openCart() {
  document.getElementById('cartDrawer')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer')?.classList.add('hidden');
  document.body.style.overflow = 'auto';
}
function openWishlist() {
  document.getElementById('wishlistModal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wishlistModal')?.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function openCheckout() {
  if (cart.length === 0) {
    showToast("আপনার কার্ট খালি!");
    return;
  }
  updateCheckoutSummary();
  document.getElementById('checkoutModal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeCheckout() {
  document.getElementById('checkoutModal')?.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function updateDeliveryStyles() {
  document.querySelectorAll('.delivery-radio-label').forEach(label => {
    const input = label.querySelector('input');
    if (input.checked) {
      label.classList.add('border-brand-500', 'bg-brand-50/40');
      label.classList.remove('border-slate-200');
    } else {
      label.classList.remove('border-brand-500', 'bg-brand-50/40');
      label.classList.add('border-slate-200');
    }
  });
}

function updateCheckoutSummary() {
  const subtotal = getSubtotal();
  const total = Math.max(0, subtotal - discountAmount) + deliveryFee;

  const checkoutSub = document.getElementById('checkoutSubtotal');
  const checkoutDel = document.getElementById('checkoutDelivery');
  const checkoutTot = document.getElementById('checkoutTotal');
  const discountRow = document.getElementById('checkoutDiscountRow');
  const discountTxt = document.getElementById('checkoutDiscount');

  if (checkoutSub) checkoutSub.textContent = `৳${subtotal.toLocaleString('bn-BD')}`;
  if (checkoutDel) checkoutDel.textContent = `৳${deliveryFee.toLocaleString('bn-BD')}`;

  if (discountAmount > 0) {
    discountRow?.classList.remove('hidden');
    if (discountTxt) discountTxt.textContent = `-৳${discountAmount.toLocaleString('bn-BD')}`;
  } else {
    discountRow?.classList.add('hidden');
  }

  if (checkoutTot) checkoutTot.textContent = `৳${total.toLocaleString('bn-BD')}`;
}

function togglePaymentBox() {
  const method = document.querySelector('input[name="paymentMethod"]:checked')?.value;
  const box = document.getElementById('manualPaymentBox');
  const label = document.getElementById('merchantLabel');
  const num = document.getElementById('merchantNumber');
  const senderPhone = document.getElementById('senderPhone');
  const trxId = document.getElementById('transactionId');

  if (!box) return;

  if (method === 'bkash' || method === 'nagad') {
    box.classList.remove('hidden');
    if (senderPhone) senderPhone.required = true;
    if (trxId) trxId.required = true;

    if (method === 'bkash') {
      if (label) label.textContent = "বিকাশ পার্সোনাল নম্বর (Send Money):";
      if (num) num.textContent = "01700000000";
      box.className = "p-4 rounded-2xl border border-pink-200 bg-pink-50/40 space-y-3";
    } else {
      if (label) label.textContent = "নগদ পার্সোনাল নম্বর (Send Money):";
      if (num) num.textContent = "01800000000";
      box.className = "p-4 rounded-2xl border border-orange-200 bg-orange-50/40 space-y-3";
    }
  } else {
    box.classList.add('hidden');
    if (senderPhone) senderPhone.required = false;
    if (trxId) trxId.required = false;
  }
}

function copyNumber() {
  const num = document.getElementById('merchantNumber')?.textContent;
  if (num) {
    navigator.clipboard.writeText(num).then(() => {
      showToast("নম্বর কপি করা হয়েছে!");
    });
  }
}

// Checkout Submit Handler & Send to Admin Panel
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const method = document.querySelector('input[name="paymentMethod"]:checked').value;
  
  const subtotal = getSubtotal();
  const total = Math.max(0, subtotal - discountAmount) + deliveryFee;
  const orderId = "BD" + Math.floor(100000 + Math.random() * 900000);

  const paymentNames = {
    cod: "ক্যাশ অন ডেলিভারি",
    bkash: "বিকাশ (TrxID সহ)",
    nagad: "নগদ (TrxID সহ)"
  };

  // [যুক্ত করা অংশ ২]: গ্রাহকের নতুন অর্ডারটি অ্যাডমিন প্যানেলে স্বয়ংক্রিয়ভাবে সেভ করা
  const existingOrders = JSON.parse(localStorage.getItem('bd_store_orders')) || [];
  existingOrders.unshift({
    orderId: `#${orderId}`,
    name: name,
    phone: phone,
    address: address,
    paymentMethod: paymentNames[method],
    trxId: document.getElementById('transactionId')?.value || '',
    total: total,
    status: 'pending',
    date: new Date().toLocaleString('bn-BD')
  });
  localStorage.setItem('bd_store_orders', JSON.stringify(existingOrders));

  // Populate Invoice
  const invOrder = document.getElementById('invoiceOrderId');
  const invName = document.getElementById('invoiceName');
  const invPhone = document.getElementById('invoicePhone');
  const invAddress = document.getElementById('invoiceAddress');
  const invPayment = document.getElementById('invoicePayment');
  const invTotal = document.getElementById('invoiceTotal');

  if (invOrder) invOrder.textContent = `#${orderId}`;
  if (invName) invName.textContent = name;
  if (invPhone) invPhone.textContent = phone;
  if (invAddress) invAddress.textContent = address;
  if (invPayment) invPayment.textContent = paymentNames[method];
  if (invTotal) invTotal.textContent = `৳${total.toLocaleString('bn-BD')}`;

  // Clear Cart & Reset Form
  cart = [];
  discountAmount = 0;
  appliedCouponCode = "";
  saveCart();
  updateCartUI();
  document.getElementById('checkoutForm')?.reset();
  closeCheckout();

  // Show Success Modal
  document.getElementById('successModal')?.classList.remove('hidden');
}

// Toast Utility
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-item bg-slate-900 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-700';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-brand-400"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}