// Menu data structure
const menuData = {
    burgers: [
        {
            id: 'egg-burger',
            name: 'Egg Burger',
            price: 55,
            description: 'Delicious egg burger with fresh ingredients',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'bacon-egg-burger',
            name: 'Bacon Egg Burger',
            price: 70,
            description: 'Egg burger with crispy bacon',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'chicken-egg-burger',
            name: 'Chicken Egg Burger',
            price: 75,
            description: 'Egg burger with grilled chicken',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'beef-burger',
            name: 'Beef Burger',
            price: 80,
            description: 'Juicy beef burger with fresh toppings',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ],
    'loaded-fries': [
        {
            id: 'loaded-fries-1',
            name: 'Fries, Chicken tenders, cheese, gravy, eggs',
            price: 75,
            description: 'Crispy fries loaded with chicken tenders, cheese, gravy and eggs',
            image: 'https://images.unsplash.com/photo-1576107616104-496e48092fac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'loaded-fries-2',
            name: 'Fries, Beef, cheese, gravy, eggs',
            price: 70,
            description: 'Crispy fries loaded with beef, cheese, gravy and eggs',
            image: 'https://images.unsplash.com/photo-1576107616104-496e48092fac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'loaded-fries-3',
            name: 'Fries, Chicken, Beef, Bacon Sausage, cheese, gravy, eggs',
            price: 85,
            description: 'The ultimate loaded fries with all your favorites',
            image: 'https://images.unsplash.com/photo-1576107616104-496e48092fac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ],
    rice: [
        {
            id: 'assorted-jollof',
            name: 'Assorted Jollof Rice',
            price: 55,
            description: 'Delicious jollof rice with assorted toppings',
            image: 'https://images.unsplash.com/photo-1633918273905-eca1a9b0b4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'assorted-fried',
            name: 'Assorted Fried Rice',
            price: 55,
            description: 'Fried rice with assorted vegetables and proteins',
            image: 'https://images.unsplash.com/photo-1633918273905-eca1a9b0b4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'jollof-chicken',
            name: 'Jollof Rice with Chicken',
            price: 70,
            description: 'Jollof rice served with grilled chicken',
            image: 'https://images.unsplash.com/photo-1633918273905-eca1a9b0b4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ],
    milkshakes: [
        {
            id: 'vanilla-milkshake',
            name: 'Vanilla Milk Shake',
            price: 40,
            description: 'Creamy vanilla milk shake',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'chocolate-milkshake',
            name: 'Chocolate Milk Shake',
            price: 40,
            description: 'Rich chocolate milk shake',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'strawberry-milkshake',
            name: 'Strawberry Milk Shake',
            price: 40,
            description: 'Fresh strawberry milk shake',
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ],
    beverages: [
        {
            id: 'las-vegas-tower',
            name: 'Las Vegas Tower (Slushie)',
            price: 65,
            description: 'Refreshing slushie drink',
            image: 'https://images.unsplash.com/photo-1527127486564-47d05297f42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'frozen-coffee',
            name: 'Frozen Coffee',
            price: 40,
            description: 'Iced frozen coffee drink',
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ],
    extras: [
        {
            id: 'fries',
            name: 'Fries',
            price: 20,
            description: 'Crispy golden fries',
            image: 'https://images.unsplash.com/photo-1576107616104-496e48092fac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'tequila',
            name: 'Tequila',
            price: 50,
            description: 'Premium tequila',
            image: 'https://images.unsplash.com/photo-1514362535861-d265044206dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 'vodka',
            name: 'Vodka',
            price: 50,
            description: 'Premium vodka',
            image: 'https://images.unsplash.com/photo-1514362535861-d265044206dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ],
    specials: [
        {
            id: 'student-pack',
            name: 'Student Pack Loaded Fries',
            price: 80,
            description: 'Fries, Chicken tenders, cheese, gravy, eggs',
            image: 'https://images.unsplash.com/photo-1576107616104-496e48092fac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ]
};

// Cart functionality
let cart = [];

// DOM elements
const menuItemsContainer = document.getElementById('menu-items');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.querySelector('.cart-count');
const overlay = document.getElementById('overlay');
const notification = document.getElementById('notification');
const distanceInfo = document.getElementById('distance-info');

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'index'; // Default to 'index' if path is '/'
}

// Initialize the menu if we're on the menu page
if (getCurrentPage() === 'menu') {
    initMenu();
}

// Initialize the menu
function initMenu() {
    // Show all combo items by default
    showMenuItems('burgers');
    
    // Add event listeners to category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show menu items for selected category
            const category = button.getAttribute('data-category');
            showMenuItems(category);
        });
    });
}

// Show menu items for a specific category
function showMenuItems(category) {
    if (!menuItemsContainer) return;
    
    menuItemsContainer.innerHTML = '';
    
    const items = menuData[category];
    items.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        menuItemsContainer.appendChild(menuItemElement);
    });
}

// Create menu item element
function createMenuItemElement(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    
    // Create menu item image
    const imageHtml = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
    `;
    
    menuItem.innerHTML = `
        ${imageHtml}
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-footer">
                <span class="menu-item-price">₵${item.price}</span>
                <button class="add-to-cart-btn" data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    // Add event listener to the Add to Cart button
    const addToCartBtn = menuItem.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCart(item.id);
    });
    
    return menuItem;
}

// Add item to cart
function addToCart(itemId) {
    // Check if restaurant is open
    if (!isRestaurantOpen()) {
        showNotification('Sorry, we are currently closed. Please order during our opening hours (10:00 AM - 9:00 PM).');
        return;
    }
    
    const item = findMenuItemById(itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${item.name} added to cart!`);
}

// Find menu item by ID
function findMenuItemById(id) {
    for (const category in menuData) {
        const item = menuData[category].find(item => item.id === id);
        if (item) return item;
    }
    return null;
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) cartCountElement.textContent = totalItems;
    
    // Update cart items
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemElement = createCartItemElement(item);
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotalElement) cartTotalElement.textContent = `₵${total.toFixed(2)}`;
}

// Create cart item element
function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    const imageHtml = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
    `;
    
    cartItem.innerHTML = `
        ${imageHtml}
        <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">₵${item.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease-quantity" data-id="${item.id}">
                    <i class="fas fa-minus"></i>
                </button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn increase-quantity" data-id="${item.id}">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners to quantity buttons
    const decreaseBtn = cartItem.querySelector('.decrease-quantity');
    const increaseBtn = cartItem.querySelector('.increase-quantity');
    
    decreaseBtn.addEventListener('click', () => {
        decreaseQuantity(item.id);
    });
    
    increaseBtn.addEventListener('click', () => {
        increaseQuantity(item.id);
    });
    
    return cartItem;
}

// Increase item quantity
function increaseQuantity(itemId) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += 1;
        updateCartUI();
    }
}

// Decrease item quantity
function decreaseQuantity(itemId) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // Remove item from cart if quantity is 1
            cart = cart.filter(cartItem => cartItem.id !== itemId);
        }
        updateCartUI();
    }
}

// Clear cart
function clearCart() {
    cart = [];
    updateCartUI();
    showNotification('Cart cleared!');
}

// Order via WhatsApp
function orderViaWhatsApp() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    let message = "Hello! I'd like to place an order from Eggstacy:\n\n";
    
    cart.forEach(item => {
        message += `${item.quantity}x ${item.name} (₵${item.price} each)\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: ₵${total.toFixed(2)}\n\n`;
    message += "Please confirm my order. Thank you!";
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "233594681767"; // Updated WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    
    // Clear cart after ordering
    cart = [];
    updateCartUI();
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    
    showNotification('Order sent via WhatsApp!');
}

// Show notification
function showNotification(message) {
    if (!notification) return;
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
    });
});

// Cart sidebar toggle
const cartIcon = document.querySelector('.cart-icon');
const closeCartBtn = document.getElementById('close-cart');

if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        if (cartSidebar) cartSidebar.classList.add('active');
        if (overlay) overlay.classList.add('active');
    });
}

if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
        if (cartSidebar) cartSidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        if (cartSidebar) cartSidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
}

// Clear cart button
const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
}

// Order via WhatsApp button
const orderWhatsAppBtn = document.getElementById('order-whatsapp');
if (orderWhatsAppBtn) {
    orderWhatsAppBtn.addEventListener('click', orderViaWhatsApp);
}

// Add to cart buttons on home page
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id');
        addToCart(itemId);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Restaurant opening hours
const openingHours = {
    Monday: { open: 10, close: 21 },    // 10 AM - 9 PM
    Tuesday: { open: 10, close: 21 },
    Wednesday: { open: 10, close: 21 },
    Thursday: { open: 10, close: 21 },
    Friday: { open: 10, close: 21 },
    Saturday: { open: 10, close: 21 },
    Sunday: { open: 10, close: 21 }
};

// Check if restaurant is currently open
function isRestaurantOpen() {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const hours = now.getHours();
    
    const todayHours = openingHours[day];
    return hours >= todayHours.open && hours < todayHours.close;
}

// Check restaurant status and update UI
function checkRestaurantStatus() {
    const isOpen = isRestaurantOpen();
    const statusElement = document.getElementById('restaurant-status');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    if (statusElement) {
        statusElement.innerHTML = isOpen 
            ? '<div class="status-open"><i class="fas fa-check-circle"></i> We\'re currently open for orders!</div>'
            : '<div class="status-closed"><i class="fas fa-times-circle"></i> We\'re currently closed. Please check our opening hours (10:00 AM - 9:00 PM).</div>';
    }
    
    // Disable ordering buttons if restaurant is closed
    if (!isOpen) {
        addToCartButtons.forEach(button => {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-lock"></i> Currently Closed';
            button.classList.add('disabled');
        });
    }
}

// Initialize location and status checks
document.addEventListener('DOMContentLoaded', () => {
    checkRestaurantStatus();
    
    // Update status every minute
    setInterval(checkRestaurantStatus, 60000);
    
    // Get user location for distance calculation if on home or about page
    const currentPage = getCurrentPage();
    if (currentPage === 'index' || currentPage === 'about') {
        getUserLocation();
    }
    
    // Display branch info in cart (on all pages)
    displayBranchInfoInCart();
});

// Branch Location (Osu, Ghana)
const branchLocation = {
    lat: 5.5583903999999995,
    lng: -0.1824141
};

// Get user location
function getUserLocation() {
    if (!distanceInfo) return;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                
                calculateDistance(userLocation, branchLocation);
            },
            error => {
                distanceInfo.innerHTML = '<p>Unable to get your location. Please enable location services.</p>';
            }
        );
    } else {
        distanceInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }
}

// Calculate distance between two points
function calculateDistance(userLoc, branchLoc) {
    // Using Haversine formula to calculate distance
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (branchLoc.lat - userLoc.lat) * Math.PI / 180;
    const dLng = (branchLoc.lng - userLoc.lng) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(userLoc.lat * Math.PI / 180) * Math.cos(branchLoc.lat * Math.PI / 180) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in kilometers
    
    // Convert to meters if less than 1km
    let distanceText;
    if (distance < 1) {
        distanceText = `${Math.round(distance * 1000)} meters`;
    } else {
        distanceText = `${distance.toFixed(2)} kilometers`;
    }
    
    if (distanceInfo) {
        distanceInfo.innerHTML = `<p>You are approximately <strong>${distanceText}</strong> away from our Osu branch.</p>`;
    }
}

// Display branch info in cart
function displayBranchInfoInCart() {
    const nearestBranchElement = document.getElementById('nearest-branch');
    if (nearestBranchElement) {
        nearestBranchElement.innerHTML = `
            <div class="branch-info">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <strong>Eggstacy Osu</strong><br>
                    <small>+233 59 468 1767</small>
                </div>
            </div>
        `;
    }
}