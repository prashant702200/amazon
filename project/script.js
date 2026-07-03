/* ====================================================
   FoodVerse - Premium Food Delivery Application
   JavaScript Module
   Designed & Developed by Prashant Singh
   ==================================================== */
// ---- Restaurant Data ----
const restaurantsData = [
  {
    id: 1, name: "Spice Garden", cuisine: "North Indian, Mughlai, Biryani", rating: 4.5, deliveryTime: "30-35 min", distance: "2.1 km",
    offer: "50% OFF up to ₹100", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["north-indian", "top-rated"],
    locations: ["Delhi", "Noida", "Lucknow", "Kanpur"],
    menu: [
      { id: 101, name: "Butter Chicken", desc: "Creamy tomato-based curry with tender chicken pieces", price: 299, rating: 4.6, isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop" },
      { id: 102, name: "Paneer Tikka", desc: "Grilled cottage cheese with aromatic spices", price: 249, rating: 4.4, isVeg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" },
      { id: 103, name: "Hyderabadi Biryani", desc: "Fragrant basmati rice cooked with tender meat and spices", price: 349, rating: 4.7, isVeg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=200&fit=crop" },
      { id: 104, name: "Dal Makhani", desc: "Slow-cooked black lentils in rich buttery gravy", price: 199, rating: 4.3, isVeg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop" },
      { id: 105, name: "Garlic Naan", desc: "Soft bread topped with garlic and butter", price: 59, rating: 4.2, isVeg: true, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 2, name: "Pizza Paradise", cuisine: "Italian, Pizza, Pasta", rating: 4.3, deliveryTime: "25-30 min", distance: "1.5 km",
    offer: "Buy 1 Get 1 Free", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["italian", "fast-food"],
    locations: ["Delhi", "Noida", "Mumbai", "Bangalore", "Pune"],
    menu: [
      { id: 201, name: "Margherita Pizza", desc: "Classic pizza with mozzarella, tomato sauce and basil", price: 299, rating: 4.5, isVeg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop" },
      { id: 202, name: "Pepperoni Pizza", desc: "Loaded with spicy pepperoni and extra cheese", price: 399, rating: 4.6, isVeg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop" },
      { id: 203, name: "Pasta Alfredo", desc: "Creamy white sauce pasta with herbs", price: 249, rating: 4.3, isVeg: true, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&h=200&fit=crop" },
      { id: 204, name: "Garlic Bread", desc: "Crispy bread with garlic butter and herbs", price: 149, rating: 4.2, isVeg: true, image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 3, name: "Dragon Wok", cuisine: "Chinese, Thai, Asian", rating: 4.1, deliveryTime: "35-40 min", distance: "3.2 km",
    offer: "30% OFF on orders above ₹500", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["chinese"],
    locations: ["Delhi", "Ghaziabad", "Mumbai", "Hyderabad"],
    menu: [
      { id: 301, name: "Kung Pao Chicken", desc: "Stir-fried chicken with peanuts and chili peppers", price: 279, rating: 4.3, isVeg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" },
      { id: 302, name: "Veg Fried Rice", desc: "Wok-tossed rice with fresh vegetables and soy", price: 179, rating: 4.1, isVeg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop" },
      { id: 303, name: "Spring Rolls", desc: "Crispy rolls filled with seasoned vegetables", price: 149, rating: 4.0, isVeg: true, image: "https://images.unsplash.com/photo-1548507200-3233fd2e6606?w=300&h=200&fit=crop" },
      { id: 304, name: "Chilli Paneer", desc: "Spicy paneer tossed with bell peppers", price: 229, rating: 4.2, isVeg: true, image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 4, name: "The Green Bowl", cuisine: "Salads, Healthy, Vegan", rating: 4.6, deliveryTime: "20-25 min", distance: "1.0 km",
    offer: "Free Delivery", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    isOpen: true, isVeg: true, category: ["cafe", "top-rated"],
    locations: ["Delhi", "Noida", "Bangalore", "Pune", "Mumbai"],
    menu: [
      { id: 401, name: "Caesar Salad", desc: "Crisp romaine lettuce with parmesan and croutons", price: 229, rating: 4.5, isVeg: true, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop" },
      { id: 402, name: "Quinoa Bowl", desc: "Protein-rich quinoa with grilled vegetables", price: 299, rating: 4.6, isVeg: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop" },
      { id: 403, name: "Smoothie Bowl", desc: "Blended acai with granola and fresh fruits", price: 249, rating: 4.4, isVeg: true, image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 5, name: "Burger Hub", cuisine: "Burgers, American, Fries", rating: 4.2, deliveryTime: "15-20 min", distance: "0.8 km",
    offer: "₹99 Meal Deal", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["fast-food", "fast-delivery"],
    locations: ["Delhi", "Noida", "Ghaziabad", "Mumbai", "Bangalore", "Hyderabad", "Pune"],
    menu: [
      { id: 501, name: "Classic Smash Burger", desc: "Juicy beef patty with cheese, lettuce and special sauce", price: 199, rating: 4.3, isVeg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop" },
      { id: 502, name: "Veggie Burger", desc: "Plant-based patty with fresh toppings", price: 179, rating: 4.1, isVeg: true, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop" },
      { id: 503, name: "Loaded Fries", desc: "Crispy fries topped with cheese and jalapeños", price: 149, rating: 4.2, isVeg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop" },
      { id: 504, name: "Chicken Wings", desc: "Spicy buffalo wings with ranch dip", price: 249, rating: 4.4, isVeg: false, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 6, name: "Dosa Factory", cuisine: "South Indian, Dosa, Idli", rating: 4.4, deliveryTime: "25-30 min", distance: "1.8 km",
    offer: "20% OFF on first order", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&h=400&fit=crop",
    isOpen: true, isVeg: true, category: ["south-indian", "top-rated"],
    locations: ["Bangalore", "Hyderabad", "Delhi", "Mumbai", "Pune"],
    menu: [
      { id: 601, name: "Masala Dosa", desc: "Crispy crepe filled with spiced potato filling", price: 129, rating: 4.5, isVeg: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300&h=200&fit=crop" },
      { id: 602, name: "Idli Sambar", desc: "Steamed rice cakes with lentil soup", price: 99, rating: 4.3, isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop" },
      { id: 603, name: "Uttapam", desc: "Thick pancake with onion and tomato topping", price: 119, rating: 4.2, isVeg: true, image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&h=200&fit=crop" },
      { id: 604, name: "Filter Coffee", desc: "Authentic South Indian filter coffee", price: 49, rating: 4.7, isVeg: true, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 7, name: "Sweet Bliss", cuisine: "Desserts, Ice Cream, Cakes", rating: 4.7, deliveryTime: "20-25 min", distance: "1.3 km",
    offer: "Free dessert on ₹300+", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop",
    isOpen: true, isVeg: true, category: ["desserts", "bakery", "top-rated"],
    locations: ["Delhi", "Noida", "Mumbai", "Bangalore", "Lucknow", "Kanpur"],
    menu: [
      { id: 701, name: "Chocolate Lava Cake", desc: "Warm chocolate cake with molten center", price: 199, rating: 4.8, isVeg: true, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=200&fit=crop" },
      { id: 702, name: "Cheesecake", desc: "New York style creamy cheesecake", price: 249, rating: 4.6, isVeg: true, image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=300&h=200&fit=crop" },
      { id: 703, name: "Gelato", desc: "Italian artisan gelato - choice of flavors", price: 149, rating: 4.5, isVeg: true, image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 8, name: "Chai & Snacks", cuisine: "Cafe, Tea, Snacks", rating: 4.0, deliveryTime: "15-20 min", distance: "0.5 km",
    offer: "Combo at ₹149", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
    isOpen: false, isVeg: true, category: ["cafe", "fast-delivery"],
    locations: ["Lucknow", "Kanpur", "Delhi", "Noida", "Ghaziabad"],
    menu: [
      { id: 801, name: "Masala Chai", desc: "Authentic Indian spiced tea", price: 39, rating: 4.3, isVeg: true, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop" },
      { id: 802, name: "Samosa", desc: "Crispy pastry filled with spiced potatoes", price: 29, rating: 4.1, isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=200&fit=crop" },
      { id: 803, name: "Pakora Platter", desc: "Assorted crispy fritters with chutneys", price: 99, rating: 4.0, isVeg: true, image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 9, name: "Royal Tandoor", cuisine: "Tandoori, Kebabs, Grills", rating: 4.3, deliveryTime: "35-40 min", distance: "2.8 km",
    offer: "40% OFF up to ₹150", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["north-indian"],
    locations: ["Delhi", "Lucknow", "Kanpur", "Hyderabad"],
    menu: [
      { id: 901, name: "Tandoori Chicken", desc: "Marinated chicken roasted in clay oven", price: 349, rating: 4.5, isVeg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop" },
      { id: 902, name: "Seekh Kebab", desc: "Minced meat kebabs with aromatic spices", price: 279, rating: 4.3, isVeg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop" },
      { id: 903, name: "Paneer Tikka Platter", desc: "Grilled paneer with mint chutney", price: 249, rating: 4.4, isVeg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 10, name: "Wok & Roll", cuisine: "Chinese, Momos, Noodles", rating: 4.2, deliveryTime: "20-25 min", distance: "1.6 km",
    offer: "Free Momos on ₹400+", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["chinese", "fast-food"],
    locations: ["Noida", "Ghaziabad", "Delhi", "Bangalore"],
    menu: [
      { id: 1001, name: "Steamed Momos", desc: "Juicy dumplings with spicy chutney", price: 129, rating: 4.4, isVeg: false, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop" },
      { id: 1002, name: "Hakka Noodles", desc: "Stir-fried noodles with vegetables and soy", price: 169, rating: 4.2, isVeg: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop" },
      { id: 1003, name: "Manchurian", desc: "Deep-fried veggie balls in tangy sauce", price: 189, rating: 4.1, isVeg: true, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 11, name: "La Piazza", cuisine: "Italian, Continental, Pasta", rating: 4.5, deliveryTime: "30-35 min", distance: "2.4 km",
    offer: "Flat ₹120 OFF", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    isOpen: true, isVeg: false, category: ["italian", "top-rated"],
    locations: ["Mumbai", "Pune", "Bangalore", "Delhi"],
    menu: [
      { id: 1101, name: "Mushroom Risotto", desc: "Creamy Italian rice with wild mushrooms", price: 349, rating: 4.6, isVeg: true, image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=300&h=200&fit=crop" },
      { id: 1102, name: "Lasagna", desc: "Layered pasta with meat sauce and béchamel", price: 399, rating: 4.5, isVeg: false, image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop" },
      { id: 1103, name: "Tiramisu", desc: "Classic Italian coffee-flavored dessert", price: 279, rating: 4.7, isVeg: true, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop" }
    ]
  },
  {
    id: 12, name: "Bake House", cuisine: "Bakery, Breads, Pastries", rating: 4.4, deliveryTime: "20-25 min", distance: "1.1 km",
    offer: "25% OFF on cakes", image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    isOpen: true, isVeg: true, category: ["bakery", "cafe"],
    locations: ["Delhi", "Noida", "Mumbai", "Bangalore", "Pune", "Lucknow"],
    menu: [
      { id: 1201, name: "Croissant", desc: "Buttery flaky French pastry", price: 99, rating: 4.4, isVeg: true, image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=200&fit=crop" },
      { id: 1202, name: "Red Velvet Cake", desc: "Rich red velvet with cream cheese frosting", price: 449, rating: 4.7, isVeg: true, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=300&h=200&fit=crop" },
      { id: 1203, name: "Blueberry Muffin", desc: "Soft muffin loaded with fresh blueberries", price: 79, rating: 4.3, isVeg: true, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop" }
    ]
  }
];
// ---- Categories Data ----
const categoriesData = [
  { id: "all", name: "All", icon: "🍽️" },
  { id: "north-indian", name: "North Indian", icon: "🍛" },
  { id: "south-indian", name: "South Indian", icon: "🥘" },
  { id: "chinese", name: "Chinese", icon: "🥡" },
  { id: "italian", name: "Italian", icon: "🍕" },
  { id: "fast-food", name: "Fast Food", icon: "🍔" },
  { id: "desserts", name: "Desserts", icon: "🍰" },
  { id: "bakery", name: "Bakery", icon: "🥐" },
  { id: "cafe", name: "Cafe", icon: "☕" },
  { id: "top-rated", name: "Top Rated", icon: "⭐" }
];
// ---- Locations ----
const locations = ["Delhi", "Noida", "Ghaziabad", "Lucknow", "Kanpur", "Mumbai", "Bangalore", "Hyderabad", "Pune"];
// ---- Filters ----
const filters = [
  { id: "veg", label: "Veg" },
  { id: "nonveg", label: "Non Veg" },
  { id: "fast-food", label: "Fast Food" },
  { id: "cafe", label: "Cafe" },
  { id: "bakery", label: "Bakery" },
  { id: "desserts", label: "Desserts" },
  { id: "chinese", label: "Chinese" },
  { id: "italian", label: "Italian" },
  { id: "south-indian", label: "South Indian" },
  { id: "north-indian", label: "North Indian" },
  { id: "top-rated", label: "Top Rated" },
  { id: "fast-delivery", label: "Fast Delivery" },
  { id: "open-now", label: "Open Now" }
];
// ---- State ----
let currentLocation = localStorage.getItem('fv_location') || "Delhi";
let currentCategory = "all";
let activeFilters = [];
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem('fv_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('fv_favorites')) || [];
let isDarkMode = localStorage.getItem('fv_dark') === 'true';
let currentSection = 'home';
// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
function initApp() {
  // Loading Screen
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
  }, 2000);
  // Dark Mode
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
  // Render all sections
  renderLocationDropdown();
  renderCategories();
  renderFilters();
  renderOffers();
  renderRestaurants();
  updateCartBadge();
  updateFavBadge();
  animateCounters();
  // Event Listeners
  setupEventListeners();
  setupScrollAnimations();
}
// ---- Event Listeners ----
function setupEventListeners() {
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  // Back to top
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  // Dark Mode Toggle
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  const sidebarDark = document.getElementById('sidebarDarkToggle');
  if (sidebarDark) sidebarDark.addEventListener('click', toggleDarkMode);
  // Location dropdown
  document.getElementById('locationBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('locationDropdown').classList.toggle('show');
  });
  document.addEventListener('click', () => {
    document.getElementById('locationDropdown').classList.remove('show');
  });
  // Search
  const navSearchInput = document.getElementById('navSearchInput');
  const heroSearchInput = document.getElementById('heroSearchInput');
  navSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    heroSearchInput.value = e.target.value;
    renderRestaurants();
  });
  heroSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    navSearchInput.value = e.target.value;
    renderRestaurants();
  });
  // Hamburger menu
  document.getElementById('hamburgerBtn').addEventListener('click', openSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
  document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
  // Cart
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  // Modal close
  document.getElementById('menuModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeMenuModal();
  });
  document.getElementById('checkoutModalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCheckoutModal();
  });
  // Checkout
  document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
  // Navigation links
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.nav;
      navigateToSection(section);
      closeSidebar();
    });
  });
  // Contact form
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully!', 'success');
    e.target.reset();
  });
  // Ripple effect on buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.ripple');
    if (btn) {
      const circle = document.createElement('span');
      circle.classList.add('ripple-effect');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    }
  });
}
// ---- Navigation ----
function navigateToSection(section) {
  currentSection = section;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll(`[data-nav="${section}"]`).forEach(l => l.classList.add('active'));
  // Show/hide sections
  const allSections = document.querySelectorAll('.page-section');
  allSections.forEach(s => s.style.display = 'none');
  switch(section) {
    case 'home':
      document.getElementById('heroSection').style.display = '';
      document.getElementById('categoriesSection').style.display = '';
      document.getElementById('offersSection').style.display = '';
      document.getElementById('restaurantsSection').style.display = '';
      document.getElementById('trendingSection').style.display = '';
      break;
    case 'restaurants':
      document.getElementById('restaurantsSection').style.display = '';
      break;
    case 'offers':
      document.getElementById('offersSection').style.display = '';
      break;
    case 'categories':
      document.getElementById('categoriesSection').style.display = '';
      document.getElementById('restaurantsSection').style.display = '';
      break;
    case 'orders':
      document.getElementById('ordersSection').style.display = '';
      break;
    case 'favorites':
      document.getElementById('favoritesSection').style.display = '';
      renderFavorites();
      break;
    case 'about':
      document.getElementById('aboutSection').style.display = '';
      break;
    case 'contact':
      document.getElementById('contactSection').style.display = '';
      break;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ---- Dark Mode ----
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('fv_dark', isDarkMode);
  const icon = document.querySelector('#darkModeToggle i');
  icon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}
// ---- Location ----
function renderLocationDropdown() {
  const dropdown = document.getElementById('locationDropdown');
  const locText = document.getElementById('locationText');
  locText.textContent = currentLocation;
  dropdown.innerHTML = locations.map(loc => `
    <li class="${loc === currentLocation ? 'active' : ''}" onclick="selectLocation('${loc}')">
      <i class="fas fa-map-marker-alt"></i> ${loc}
    </li>
  `).join('');
}
function selectLocation(loc) {
  currentLocation = loc;
  localStorage.setItem('fv_location', loc);
  document.getElementById('locationText').textContent = loc;
  document.getElementById('locationDropdown').classList.remove('show');
  renderLocationDropdown();
  renderRestaurants();
  showToast(`Location changed to ${loc}`, 'success');
}
// ---- Categories ----
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = categoriesData.map(cat => `
    <div class="category-card ${currentCategory === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
    </div>
  `).join('');
}
function selectCategory(catId) {
  currentCategory = catId;
  renderCategories();
  renderRestaurants();
}
// ---- Filters ----
function renderFilters() {
  const bar = document.getElementById('filtersBar');
  bar.innerHTML = filters.map(f => `
    <div class="filter-chip ${activeFilters.includes(f.id) ? 'active' : ''}" onclick="toggleFilter('${f.id}')">${f.label}</div>
  `).join('');
}
function toggleFilter(filterId) {
  const idx = activeFilters.indexOf(filterId);
  if (idx > -1) {
    activeFilters.splice(idx, 1);
  } else {
    activeFilters.push(filterId);
  }
  renderFilters();
  renderRestaurants();
}
// ---- Offers ----
function renderOffers() {
  const container = document.getElementById('offersScroll');
  const offersArr = [
    { title: "50% OFF", desc: "On your first order", code: "WELCOME50", gradient: "gradient-1" },
    { title: "Free Delivery", desc: "Orders above ₹199", code: "FREEDEL", gradient: "gradient-2" },
    { title: "Buy 1 Get 1", desc: "On selected restaurants", code: "BOGO", gradient: "gradient-3" },
    { title: "₹150 Cashback", desc: "Pay using UPI", code: "UPIBACK", gradient: "gradient-4" },
    { title: "Flat 30% OFF", desc: "Weekend special offer", code: "WEEKEND30", gradient: "gradient-5" }
  ];
  container.innerHTML = offersArr.map(o => `
    <div class="offer-card ${o.gradient}">
      <h3>${o.title}</h3>
      <p>${o.desc}</p>
      <div class="offer-code">Use: ${o.code}</div>
    </div>
  `).join('');
}
// ---- Restaurants ----
function getFilteredRestaurants() {
  let filtered = [...restaurantsData];
  // Location filter
  filtered = filtered.filter(r => r.locations.includes(currentLocation));
  // Category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(r => r.category.includes(currentCategory));
  }
  // Active filters
  activeFilters.forEach(f => {
    switch(f) {
      case 'veg': filtered = filtered.filter(r => r.isVeg); break;
      case 'nonveg': filtered = filtered.filter(r => !r.isVeg); break;
      case 'open-now': filtered = filtered.filter(r => r.isOpen); break;
      case 'top-rated': filtered = filtered.filter(r => r.rating >= 4.4); break;
      case 'fast-delivery': filtered = filtered.filter(r => r.category.includes('fast-delivery')); break;
      default: filtered = filtered.filter(r => r.category.includes(f)); break;
    }
  });
  // Search filter
  if (searchQuery) {
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(searchQuery) ||
      r.cuisine.toLowerCase().includes(searchQuery) ||
      r.menu.some(m => m.name.toLowerCase().includes(searchQuery))
    );
  }
  return filtered;
}
function renderRestaurants() {
  const filtered = getFilteredRestaurants();
  // Main restaurants grid
  const grid = document.getElementById('restaurantsGrid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h4>No restaurants found</h4>
        <p>Try changing your location or filters</p>
      </div>
    `;
  } else {
    grid.innerHTML = filtered.map(r => createRestaurantCard(r)).join('');
  }
  // Trending section
  const trendingGrid = document.getElementById('trendingGrid');
  if (trendingGrid) {
    const trending = filtered.filter(r => r.rating >= 4.3).slice(0, 4);
    trendingGrid.innerHTML = trending.map(r => createRestaurantCard(r)).join('');
  }
}
function createRestaurantCard(r) {
  const isFav = favorites.includes(r.id);
  return `
    <div class="restaurant-card" onclick="openRestaurant(${r.id})">
      <div class="restaurant-img">
        <img src="${r.image}" alt="${r.name}" loading="lazy">
        <span class="status-badge ${r.isOpen ? 'open' : 'closed'}">${r.isOpen ? 'Open' : 'Closed'}</span>
        ${r.offer ? `<span class="offer-badge">${r.offer}</span>` : ''}
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${r.id})">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="restaurant-info">
        <h3 class="restaurant-name">${r.name}</h3>
        <p class="restaurant-cuisine">${r.cuisine}</p>
        <div class="restaurant-meta">
          <span class="restaurant-rating"><i class="fas fa-star"></i> ${r.rating}</span>
          <span class="restaurant-time"><i class="far fa-clock"></i> ${r.deliveryTime}</span>
          <span class="restaurant-distance"><i class="fas fa-map-marker-alt"></i> ${r.distance}</span>
        </div>
      </div>
    </div>
  `;
}
// ---- Menu Modal ----
function openRestaurant(id) {
  const restaurant = restaurantsData.find(r => r.id === id);
  if (!restaurant) return;
  const modal = document.getElementById('menuModal');
  const overlay = document.getElementById('menuModalOverlay');
  document.getElementById('modalRestImg').src = restaurant.image;
  document.getElementById('modalRestName').textContent = restaurant.name;
  document.getElementById('modalRestCuisine').textContent = restaurant.cuisine;
  const menuList = document.getElementById('menuList');
  menuList.innerHTML = restaurant.menu.map(item => {
    const cartItem = cart.find(c => c.id === item.id);
    const qty = cartItem ? cartItem.qty : 0;
    return `
      <div class="menu-item">
        <div class="menu-item-info">
          <span class="veg-badge ${item.isVeg ? 'veg' : 'nonveg'}">
            <i class="fas fa-circle" style="font-size:0.5rem"></i> ${item.isVeg ? 'VEG' : 'NON-VEG'}
          </span>
          <h4>${item.name}</h4>
          <p class="menu-desc">${item.desc}</p>
          <span class="menu-price">₹${item.price}</span>
          <span class="menu-rating"><i class="fas fa-star"></i> ${item.rating}</span>
        </div>
        <div class="menu-item-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${qty > 0 ? `
            <div class="qty-control">
              <button onclick="event.stopPropagation(); updateCartFromMenu(${item.id}, ${restaurant.id}, -1)">−</button>
              <span>${qty}</span>
              <button onclick="event.stopPropagation(); updateCartFromMenu(${item.id}, ${restaurant.id}, 1)">+</button>
            </div>
          ` : `
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${item.id}, ${restaurant.id})">ADD</button>
          `}
        </div>
      </div>
    `;
  }).join('');
  overlay.classList.add('show');
}
function closeMenuModal() {
  document.getElementById('menuModalOverlay').classList.remove('show');
}
// ---- Cart ----
function addToCart(itemId, restId) {
  const restaurant = restaurantsData.find(r => r.id === restId);
  const item = restaurant.menu.find(m => m.id === itemId);
  if (!item) return;
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: 1,
      restId: restId,
      restName: restaurant.name,
      isVeg: item.isVeg
    });
  }
  saveCart();
  updateCartBadge();
  showToast(`${item.name} added to cart`, 'success');
  // Refresh menu modal if open
  if (document.getElementById('menuModalOverlay').classList.contains('show')) {
    openRestaurant(restId);
  }
}
function updateCartFromMenu(itemId, restId, change) {
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += change;
    if (existing.qty <= 0) {
      cart = cart.filter(c => c.id !== itemId);
    }
  }
  saveCart();
  updateCartBadge();
  // Refresh menu modal
  if (document.getElementById('menuModalOverlay').classList.contains('show')) {
    openRestaurant(restId);
  }
}
function updateCartQty(itemId, change) {
  const item = cart.find(c => c.id === itemId);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      cart = cart.filter(c => c.id !== itemId);
    }
  }
  saveCart();
  updateCartBadge();
  renderCart();
}
function removeCartItem(itemId) {
  const item = cart.find(c => c.id === itemId);
  cart = cart.filter(c => c.id !== itemId);
  saveCart();
  updateCartBadge();
  renderCart();
  if (item) showToast(`${item.name} removed from cart`, 'error');
}
function saveCart() {
  localStorage.setItem('fv_cart', JSON.stringify(cart));
}
function updateCartBadge() {
  const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = totalItems;
  badge.style.display = totalItems > 0 ? 'flex' : 'none';
}
function openCart() {
  renderCart();
  document.getElementById('cartOverlay').classList.add('show');
  document.getElementById('cartPanel').classList.add('show');
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('show');
  document.getElementById('cartPanel').classList.remove('show');
}
function renderCart() {
  const cartBody = document.getElementById('cartBody');
  const cartFooter = document.getElementById('cartFooter');
  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-cart"></i>
        <h4>Your cart is empty</h4>
        <p>Add items from a restaurant to get started</p>
      </div>
    `;
    cartFooter.style.display = 'none';
    return;
  }
  cartFooter.style.display = 'block';
  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</p>
      </div>
      <div class="cart-item-qty">
        <button onclick="updateCartQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${item.id})">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');
  // Calculate totals
  const subtotal = cart.reduce((sum, c) => sum + (c.price * c.qty), 0);
  const delivery = subtotal > 500 ? 0 : 40;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + gst;
  document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('cartDelivery').textContent = delivery === 0 ? 'FREE' : `₹${delivery}`;
  document.getElementById('cartGST').textContent = `₹${gst}`;
  document.getElementById('cartTotal').textContent = `₹${total}`;
}
// ---- Favorites ----
function toggleFavorite(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) {
    favorites.splice(idx, 1);
    showToast('Removed from favorites', 'error');
  } else {
    favorites.push(id);
    showToast('Added to favorites!', 'success');
  }
  localStorage.setItem('fv_favorites', JSON.stringify(favorites));
  updateFavBadge();
  renderRestaurants();
  if (currentSection === 'favorites') renderFavorites();
}
function updateFavBadge() {
  const badge = document.getElementById('favBadge');
  if (badge) {
    badge.textContent = favorites.length;
    badge.style.display = favorites.length > 0 ? 'flex' : 'none';
  }
}
function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const favRestaurants = restaurantsData.filter(r => favorites.includes(r.id));
  if (favRestaurants.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-heart"></i>
        <h4>No favorites yet</h4>
        <p>Tap the heart icon on restaurants to save them here</p>
      </div>
    `;
  } else {
    grid.innerHTML = favRestaurants.map(r => createRestaurantCard(r)).join('');
  }
}
// ---- Checkout ----
function openCheckoutModal() {
  if (cart.length === 0) return;
  closeCart();
  const subtotal = cart.reduce((sum, c) => sum + (c.price * c.qty), 0);
  const delivery = subtotal > 500 ? 0 : 40;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + gst;
  const summaryHTML = `
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="cart-summary-row"><span>Delivery Fee</span><span>${delivery === 0 ? 'FREE' : '₹' + delivery}</span></div>
      <div class="cart-summary-row"><span>GST (5%)</span><span>₹${gst}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span>₹${total}</span></div>
    </div>
  `;
  document.getElementById('checkoutSummary').innerHTML = summaryHTML;
  document.getElementById('checkoutModalOverlay').classList.add('show');
}
function closeCheckoutModal() {
  document.getElementById('checkoutModalOverlay').classList.remove('show');
}
function selectPayment(el) {
  document.querySelectorAll('.payment-option').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
}
function placeOrder() {
  const name = document.getElementById('checkoutName').value;
  const phone = document.getElementById('checkoutPhone').value;
  const address = document.getElementById('checkoutAddress').value;
  if (!name || !phone || !address) {
    showToast('Please fill all required fields', 'error');
    return;
  }
  const orderId = 'FV' + Date.now().toString().slice(-6);
  document.getElementById('orderIdDisplay').textContent = `Order ID: #${orderId}`;
  closeCheckoutModal();
  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();
  // Show success
  document.getElementById('successPopup').classList.add('show');
}
function closeSuccessPopup() {
  document.getElementById('successPopup').classList.remove('show');
  navigateToSection('home');
}
// ---- Sidebar ----
function openSidebar() {
  document.getElementById('sidebarOverlay').classList.add('show');
  document.getElementById('sidebar').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebarOverlay').classList.remove('show');
  document.getElementById('sidebar').classList.remove('show');
}
// ---- Toast Notifications ----
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
// ---- Animated Counters ----
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = current + (counter.dataset.suffix || '');
    }, 30);
  });
}
// ---- Scroll Reveal ----
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}