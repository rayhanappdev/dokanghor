/**
 * Modern E-Commerce Application State & Engine
 * With Complete Customer Auth, Profile & Order Tracking
 */

// Products Storage Initialization
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
    description: "১০০% পিওর কটন ফেব্রিক দিয়ে তৈরি, আরামদায়ক ও নিখুঁত ফিনিশিং।",
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
    description: "কাস্টম ব্লু সুইচ এবং ১৮টি আরজিবি লাইটিং ইফেক্ট সহ হেভি ডিউটি মেকানিক্যাল কীবোর্ড।",
    badge: "বেস্ট সেলার"
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

const STORE_CONFIG = {
  name: 'দোকানঘর',
  description: 'বাংলাদেশের অনলাইন শপ: গ্যাজেট, ফ্যাশন ও ইলেকট্রনিক্স পণ্য, দ্রুত ডেলিভারি, ক্যাশ অন ডেলিভারি ও WhatsApp অর্ডার।',
  url: 'https://www.dokanghor.com/',
  telephone: '+8801780230719',
  logo: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80'
};

function injectSeoStructuredData() {
  const storeScript = document.getElementById('storeSeoJson');
  const faqScript = document.getElementById('faqSeoJson');

  const productList = (JSON.parse(localStorage.getItem('bd_store_products')) || PRODUCTS).slice(0, 8).map((product) => ({
    '@type': 'ListItem',
    position: 1,
    name: product.name,
    url: `${STORE_CONFIG.url}#${product.id}`,
    image: product.image,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BDT',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition'
    }
  }));

  if (storeScript) {
    storeScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Store',
      name: STORE_CONFIG.name,
      description: STORE_CONFIG.description,
      url: STORE_CONFIG.url,
      telephone: STORE_CONFIG.telephone,
      logo: STORE_CONFIG.logo,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BD',
        addressLocality: 'Dhaka',
        streetAddress: 'Dhaka, Bangladesh'
      },
      sameAs: ['https://wa.me/8801780230719'],
      itemListElement: productList
    });
  }

  if (faqScript) {
    faqScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ডেলিভারি সময় কত?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'সাধারণত ২৪-৭২ ঘণ্টার মধ্যে ঢাকার ভেতরে ও সারা দেশে দ্রুত ডেলিভারি দেওয়া হয়।'
          }
        },
        {
          '@type': 'Question',
          name: 'ক্যাশ অন ডেলিভারি আছে?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'হ্যাঁ, আপনি পণ্য দেখে টাকা দিতে পারেন। সঠিক ডেলিভারি ঠিকানা নিশ্চিত করুন।'
          }
        },
        {
          '@type': 'Question',
          name: 'আমি কীভাবে অর্ডার করব?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'পণ্য নির্বাচন করে কার্টে রাখুন, তারপর অর্ডার সম্পন্ন করুন অথবা WhatsApp-এ সরাসরি অর্ডার করতে পারেন।'
          }
        }
      ]
    });
  }
}

// App State
let cart = JSON.parse(localStorage.getItem('bd_shop_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bd_shop_wishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('bd_current_user')) || null;
let users = JSON.parse(localStorage.getItem('bd_registered_users')) || [];

let selectedCategory = "all";
let searchQuery = "";
let sortBy = "default";
let deliveryFee = 60;
let discountAmount = 0;
let appliedCouponCode = "";

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  injectSeoStructuredData();
  renderAuthHeader();
  renderCategories();
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEvents();
});

function setupEvents() {
  document.getElementById('searchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });
  document.getElementById('mobileSearchInput')?.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  document.getElementById('sortSelect')?.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });

  // Cart Drawer
  document.getElementById('cartToggleBtn')?.addEventListener('click', openCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartBackdrop')?.addEventListener('click', closeCart);

  // Wishlist
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

  // Auth Modals
  document.getElementById('authCloseBtn')?.addEventListener('click', closeAuthModal);
  document.getElementById('authBackdrop')?.addEventListener('click', closeAuthModal);
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('signupForm')?.addEventListener('submit', handleSignup);

  // Profile Modal
  document.getElementById('profileCloseBtn')?.addEventListener('click', closeProfileModal);
  document.getElementById('profileBackdrop')?.addEventListener('click', closeProfileModal);
  document.getElementById('updateProfileForm')?.addEventListener('submit', handleProfileUpdate);

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

// -------------------------------------------------------------
// USER AUTHENTICATION & PROFILE LOGIC
// -------------------------------------------------------------

function renderAuthHeader() {
  const container = document.getElementById('userNavContainer');
  if (!container) return;

  if (currentUser) {
    // Logged in UI
    const firstLetter = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U';
    container.innerHTML = `
      <button onclick="openProfileModal()" class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full border border-slate-200 transition">
        <div class="w-7 h-7 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
          ${firstLetter}
        </div>
        <span class="text-xs font-bold hidden sm:inline max-w-[100px] truncate">${currentUser.name}</span>
      </button>
    `;
  } else {
    // Logged out UI
    container.innerHTML = `
      <button onclick="openAuthModal('login')" class="flex items-center gap-1.5 bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-600 px-3.5 py-2 rounded-full border border-slate-200 font-bold text-xs transition">
        <i class="fa-regular fa-user"></i>
        <span>লগইন</span>
      </button>
    `;
  }
}

function handleMobileProfileClick() {
  if (currentUser) {
    openProfileModal();
  } else {
    openAuthModal('login');
  }
}

function openAuthModal(tab = 'login') {
  switchAuthTab(tab);
  document.getElementById('authModal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('authModal')?.classList.add('hidden');
  document.body.style.overflow = 'auto';
}
// যদি কার্টে পণ্য থাকে, লগইন সফল হওয়া মাত্রই চেকআউট ওপেন হবে
  if (cart.length > 0) {
    openCheckout();
  }

function switchAuthTab(tab) {
  const isLogin = tab === 'login';
  document.getElementById('loginForm')?.classList.toggle('hidden', !isLogin);
  document.getElementById('signupForm')?.classList.toggle('hidden', isLogin);

  const tabLogin = document.getElementById('authTabLogin');
  const tabSignup = document.getElementById('authTabSignup');

  if (tabLogin && tabSignup) {
    tabLogin.className = isLogin 
      ? "flex-1 py-3 text-sm font-bold text-brand-600 border-b-2 border-brand-600 transition" 
      : "flex-1 py-3 text-sm font-bold text-slate-400 hover:text-slate-700 transition";

    tabSignup.className = !isLogin 
      ? "flex-1 py-3 text-sm font-bold text-brand-600 border-b-2 border-brand-600 transition" 
      : "flex-1 py-3 text-sm font-bold text-slate-400 hover:text-slate-700 transition";
  }
}

// ১. ক্লাউডে সাইন-আপ ও ইউজার সংরক্ষণ
async function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const address = document.getElementById('signupAddress').value.trim();
  const password = document.getElementById('signupPassword').value;

  try {
    // চেক করা এই নম্বরে আগে থেকে একাউন্ট আছে কিনা (Firebase Firestore)
    const userDoc = await db.collection("users").doc(phone).get();
    if (userDoc.exists) {
      showToast("এই নম্বরে ইতিমধ্যে অ্যাকাউন্ট রয়েছে! দয়া করে লগইন করুন।");
      switchAuthTab('login');
      return;
    }

    const newUser = {
      id: 'USR_' + Date.now(),
      name,
      phone,
      address,
      password,
      joinedAt: new Date().toLocaleString('bn-BD')
    };

    // Firebase ক্লাউড ডাটাবেজে ইউজার সেভ করা
    await db.collection("users").doc(phone).set(newUser);

    // লোকালি লগইন সেশন রাখা
    currentUser = newUser;
    localStorage.setItem('bd_current_user', JSON.stringify(currentUser));

    closeAuthModal();
    renderAuthHeader();
    showToast(`স্বাগতম, ${name}! অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে।`);

    // কার্টে পণ্য থাকলে সরাসরি চেকআউট ওপেন হবে
    if (cart.length > 0) {
      openCheckout();
    }
  } catch (error) {
    console.error("Signup error:", error);
    showToast("অ্যাকাউন্ট তৈরিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
}

// ২. ক্লাউড ডাটাবেজ থেকে লগইন ভেরিফিকেশন
async function handleLogin(e) {
  e.preventDefault();
  const phone = document.getElementById('loginPhone').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    // Firebase থেকে কাস্টমারের তথ্য যাচাই করা
    const userDoc = await db.collection("users").doc(phone).get();
    
    if (!userDoc.exists) {
      showToast("এই নম্বরে কোনো অ্যাকাউন্ট পাওয়া যায়নি! সাইন-আপ করুন।");
      return;
    }

    const userData = userDoc.data();

    // পাসওয়ার্ড চেক
    if (userData.password !== password) {
      showToast("ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।");
      return;
    }

    currentUser = userData;
    localStorage.setItem('bd_current_user', JSON.stringify(currentUser));

    closeAuthModal();
    renderAuthHeader();
    showToast(`স্বাগতম ফিরে আসার জন্য, ${userData.name}!`);

    // কার্টে পণ্য থাকলে সরাসরি চেকআউটে নিয়ে যাবে
    if (cart.length > 0) {
      openCheckout();
    }
  } catch (error) {
    console.error("Login error:", error);
    showToast("লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
}

// ক্লাউড ডাটাবেজ থেকে কাস্টমার লগইন ভেরিফিকেশন
async function handleLogin(e) {
  e.preventDefault();
  const phone = document.getElementById('loginPhone').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    // Firebase থেকে কাস্টমারের তথ্য যাচাই করা
    const userDoc = await db.collection("users").doc(phone).get();

    if (!userDoc.exists) {
      showToast("এই নম্বরে কোনো অ্যাকাউন্ট পাওয়া যায়নি! সাইন-আপ করুন।");
      return;
    }

    const userData = userDoc.data();

    // পাসওয়ার্ড চেক
    if (userData.password !== password) {
      showToast("ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।");
      return;
    }

    currentUser = userData;
    localStorage.setItem('bd_current_user', JSON.stringify(currentUser));

    closeAuthModal();
    renderAuthHeader();
    showToast(`স্বাগতম ফিরে আসার জন্য, ${userData.name}!`);

    // কার্টে পণ্য থাকলে সরাসরি চেকআউটে নিয়ে যাবে
    if (cart.length > 0) {
      openCheckout();
    }
  } catch (error) {
    console.error("Login error:", error);
    showToast("লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
  }
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('bd_current_user');
  closeProfileModal();
  renderAuthHeader();
  showToast("সফলভাবে লগআউট করা হয়েছে");
}

function openProfileModal() {
  if (!currentUser) return;

  document.getElementById('userAvatarText').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('profileDisplayName').textContent = currentUser.name;
  document.getElementById('profileDisplayPhone').textContent = currentUser.phone;

  document.getElementById('editName').value = currentUser.name;
  document.getElementById('editPhone').value = currentUser.phone;
  document.getElementById('editAddress').value = currentUser.address || '';

  renderUserOrders();
  switchProfileSection('orders');

  document.getElementById('profileModal')?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
  document.getElementById('profileModal')?.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function switchProfileSection(sec) {
  const isOrders = sec === 'orders';
  document.getElementById('userOrdersSection')?.classList.toggle('hidden', !isOrders);
  document.getElementById('userInfoSection')?.classList.toggle('hidden', isOrders);

  const tabOrders = document.getElementById('pTabOrders');
  const tabInfo = document.getElementById('pTabInfo');

  if (tabOrders && tabInfo) {
    tabOrders.className = isOrders 
      ? "px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white transition flex items-center gap-1.5"
      : "px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5";

    tabInfo.className = !isOrders 
      ? "px-4 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white transition flex items-center gap-1.5"
      : "px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5";
  }
}

function renderUserOrders() {
  const container = document.getElementById('userOrdersSection');
  if (!container || !currentUser) return;

  const allOrders = JSON.parse(localStorage.getItem('bd_store_orders')) || [];
  // Filter orders matching current user's phone
  const userOrders = allOrders.filter(o => o.phone === currentUser.phone);

  if (userOrders.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-400 text-xs">
        <i class="fa-solid fa-box-open text-3xl mb-2 text-slate-300"></i>
        <p>আপনার কোনো পূর্ববর্তী অর্ডার নেই</p>
      </div>
    `;
    return;
  }

  container.innerHTML = userOrders.map(order => `
    <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
      <div class="flex justify-between items-center border-b border-slate-200 pb-2">
        <div>
          <span class="font-extrabold text-brand-700">${order.orderId}</span>
          <p class="text-[10px] text-slate-400">${order.date}</p>
        </div>
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${
          order.status === 'delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
        }">
          ${order.status === 'delivered' ? 'ডেলিভারড' : 'পেন্ডিং প্রসেসিং'}
        </span>
      </div>

      <div class="flex justify-between items-center pt-1 text-slate-700">
        <div>
          <p class="text-[11px] text-slate-500">পেমেন্ট: <strong>${order.paymentMethod}</strong></p>
          <p class="text-[11px] text-slate-500">ঠিকানা: ${order.address}</p>
        </div>
        <div class="text-right">
          <p class="text-sm font-extrabold text-slate-900">৳${Number(order.total).toLocaleString('bn-BD')}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function handleProfileUpdate(e) {
  e.preventDefault();
  if (!currentUser) return;

  const newName = document.getElementById('editName').value.trim();
  const newAddress = document.getElementById('editAddress').value.trim();

  currentUser.name = newName;
  currentUser.address = newAddress;

  // Update in users array
  const idx = users.findIndex(u => u.phone === currentUser.phone);
  if (idx !== -1) {
    users[idx] = currentUser;
    localStorage.setItem('bd_registered_users', JSON.stringify(users));
  }

  localStorage.setItem('bd_current_user', JSON.stringify(currentUser));
  renderAuthHeader();
  document.getElementById('profileDisplayName').textContent = newName;
  showToast("প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!");
}

// -------------------------------------------------------------
// SHOPPING, CART & CHECKOUT LOGIC
// -------------------------------------------------------------

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
  PRODUCTS = JSON.parse(localStorage.getItem('bd_store_products')) || PRODUCTS;

  let list = PRODUCTS.filter(p => {
    const matchCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchQuery = p.name.toLowerCase().includes(searchQuery);
    return matchCat && matchQuery;
  });

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
        <button 
          onclick="toggleWishlist(${p.id})" 
          class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-rose-600 shadow-sm transition"
        >
          <i class="${inWishlist ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart text-sm"></i>
        </button>

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

// Buy Now with Strict Login Protection
function buyNow(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const existing = cart.find(item => item.id === productId);
  if (!existing) {
    cart.push({ ...p, quantity: 1 });
    saveCart();
    updateCartUI();
  }

  // [লগইন চেক]
  if (!currentUser) {
    showToast("অর্ডার করতে অনুগ্রহ করে প্রথমে লগইন করুন!");
    openAuthModal('login');
    return;
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

// Checkout with Strict Login Protection
function openCheckout() {
  // [লগইন চেক]: লগইন না থাকলে চেকআউট ব্লক করে লগইন মডাল খুলবে
  if (!currentUser) {
    showToast("অর্ডার সম্পন্ন করতে অনুগ্রহ করে প্রথমে লগইন করুন!");
    openAuthModal('login');
    return;
  }

  if (cart.length === 0) {
    showToast("আপনার কার্ট খালি!");
    return;
  }

  // লগইন করা থাকলে গ্রাহকের তথ্য স্বয়ংক্রিয়ভাবে ফর্মে বসে যাবে
  const custName = document.getElementById('custName');
  const custPhone = document.getElementById('custPhone');
  const custAddress = document.getElementById('custAddress');

  if (custName) custName.value = currentUser.name || '';
  if (custPhone) custPhone.value = currentUser.phone || '';
  if (custAddress) custAddress.value = currentUser.address || '';

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
      if (num) num.textContent = "01780230719";
      box.className = "p-4 rounded-2xl border border-pink-200 bg-pink-50/40 space-y-3";
    } else {
      if (label) label.textContent = "নগদ পার্সোনাল নম্বর (Send Money):";
      if (num) num.textContent = "01780230719";
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

  // Save order to central storage for admin & customer
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

  // Reset Cart
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

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-item bg-slate-900 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-700';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-brand-400"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}