// Menu data structure
const menuData = {
    rice: [
        {
            id: 'rice-1',
            title: 'Rice with 1 pc Chicken',
            price: 55,
            description: 'Jollof or Fried Rice with 1pc grilled chicken, kelewele & shito.',
            image: 'images/ricewith1pcchicken.jpg'
        },
        {
            id: 'rice-2',
            title: 'Rice with 2 pcs Chicken',
            price: 85,
            description: 'Your choice of Jollof Rice or Fried Rice served with two pieces of succulent chicken and a side of fried plantain.',
            image: 'images/ricewith2pcchicken.jpg'
        },
        {
            id: 'rice-3',
            title: 'Rice with Gizzard (1 Cup)',
            price: 60,
            description: 'Jollof Rice or Fried Rice served with a cup of flavorful gizzard and a side of fried plantain.',
            image: 'images/ricewithgizzard.jpg'
        },
        {
            id: 'rice-4',
            title: 'Rice with Gizzard (2 Cups)',
            price: 90,
            description: 'Jollof Rice or Fried Rice served with two cups of delicious gizzard and a side of fried plantain.',
            image: 'images/ricewithgizzard.jpg'
        },
        {
            id: 'rice-5',
            title: 'Rice with 3 pcs Chicken Wings',
            price: 55,
            description: 'Jollof Rice or Fried Rice served with three crispy chicken wings and a side of fried plantain.',
            image: 'images/ricewith4wings.jpg'
        },
        {
            id: 'rice-6',
            title: 'Rice with 6 pcs Chicken Wings',
            price: 85,
            description: 'Jollof Rice or Fried Rice served with six crispy chicken wings and a side of fried plantain.',
            image: 'images/ricewith6wings.jpg'
        },
        {
            id: 'rice-7',
            title: 'All-in-One',
            price: 65,
            description: 'Jollof Rice served with one piece of chicken, coleslaw, and a refreshing Coke, plus a side of fried plantain.',
            image: 'images/allinone.jpg'
        },
        {
            id: 'rice-8',
            title: 'Executive Pack',
            price: 105,
            description: 'Jollof Rice served with two pieces of chicken, sautéed vegetables, and a side of fried plantain.',
            image: 'images/executivepack.jpg'
        }
    ],
    kenkey: [
        {
            id: 'kenkey-1',
            title: 'Kenkey with 2 pcs Peppered Chicken',
            price: 65,
            description: 'Two balls of traditional Ga Kenkey served with two pieces of spicy peppered chicken.',
            image: 'images/kenkeywith2pcpreparedchicken.jpg'
        },
        {
            id: 'kenkey-2',
            title: 'Kenkey with Gizzard (1 Cup)',
            price: 65,
            description: 'Two balls of traditional Ga Kenkey served with a cup of flavorful gizzard.',
            image: 'images/kenkeywithgizzard.jpg'
        },
        {
            id: 'kenkey-3',
            title: 'Kenkey with 6 pcs Chicken Wings',
            price: 85,
            description: 'Two balls of traditional Ga Kenkey served with six crispy chicken wings.',
            image: 'images/kenkeywith6wings.jpg'
        }
    ],
    chips: [
        {
            id: 'chips-1',
            title: 'Chips with 2 pcs Chicken',
            price: 85,
            description: 'Crispy Sweet Potato or Yam Chips served with two pieces of tender chicken.',
            image: 'images/Whisk_b2e04402fc.jpg'
        },
        {
            id: 'chips-2',
            title: 'Chips with Gizzard (1 Cup)',
            price: 70,
            description: 'Crispy Sweet Potato or Yam Chips served with a cup of delicious gizzard.',
            image: 'images/Whisk_b2e04402fc.jpg'
        },
        {
            id: 'chips-3',
            title: 'Chips with 6 pcs Chicken Wings',
            price: 85,
            description: 'Crispy Sweet Potato or Yam Chips served with six crispy chicken wings.',
            image: 'images/yamwith6wings.jpg'
        }
    ],
    specials: [
        {
            id: 'special-offer-1',
            title: 'Jollof, chicken and a bottle of coke',
            price: 45,
            description: 'Enjoy our signature jollof with chicken, and a complimentary bottle of coke.',
            image: 'images/Back to School Promotion__Available from 25th August to 25th September.__Call for delivery or pick up at Labone Junction Branch.__057 - 608 - 6006(JPG).jpg'
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

// Initialize the menu
function initMenu() {
    // Show all combo items by default
    showMenuItems('rice');
    
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
    menuItem.className = 'menu-item card active';
    menuItem.setAttribute('data-category', getCategoryFromId(item.id));
    
    // Create menu item image if available
    let imageHtml = '';
    if (item.image) {
        imageHtml = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;
    }
    
    menuItem.innerHTML = `
        ${imageHtml}
        <div class="menu-item-content">
            <div class="menu-item-header">
                <h3 class="menu-item-title">${item.title}</h3>
                <span class="menu-item-price">₵${item.price}</span>
            </div>
            <p>${item.description}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    // Add event listener to the Add to Cart button
    const addToCartBtn = menuItem.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
        addToCart(item.id);
    });
    
    return menuItem;
}

// Get category from item ID
function getCategoryFromId(id) {
    return id.split('-')[0];
}

// Add item to cart
function addToCart(itemId) {
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
    showNotification(`${item.title} added to cart!`);
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
    cartCountElement.textContent = totalItems;
    
    // Update cart items
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
    cartTotalElement.textContent = `₵${total.toFixed(2)}`;
}

// Create cart item element
function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    let imageHtml = '';
    if (item.image) {
        imageHtml = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;
    }
    
    cartItem.innerHTML = `
        ${imageHtml}
        <div class="cart-item-details">
            <div class="cart-item-title">${item.title}</div>
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
    
    // Get nearest branch info
    const branchInfoElement = document.getElementById('nearest-branch');
    let branchInfo = "";
    if (branchInfoElement) {
        branchInfo = "\n\nPreferred Branch: " + branchInfoElement.querySelector('.branch-info > div > strong').nextSibling.textContent.trim();
    }
    
    let message = "Hello! I'd like to place an order from YesChef Restaurant:" + branchInfo + "\n\n";
    
    // Check if special offer is in cart
    const hasSpecialOffer = cart.some(item => item.id === 'special-offer-1');
    if (hasSpecialOffer) {
        message += "🎉 *SPECIAL OFFER* 🎉\n";
    }
    
    cart.forEach(item => {
        message += `${item.quantity}x ${item.title} - ₵${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: ₵${total.toFixed(2)}\n\n`;
    message += "Please confirm my order. Thank you!";
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "233576086006"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Cart sidebar toggle
const cartIcon = document.querySelector('.cart-icon');
const closeCartBtn = document.getElementById('close-cart');

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Clear cart button
const clearCartBtn = document.getElementById('clear-cart');
clearCartBtn.addEventListener('click', clearCart);

// Order via WhatsApp button
const orderWhatsAppBtn = document.getElementById('order-whatsapp');
orderWhatsAppBtn.addEventListener('click', orderViaWhatsApp);

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

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Restaurant opening hours
const openingHours = {
    Monday: { open: 8, close: 22 },    // 8 AM - 10 PM
    Tuesday: { open: 8, close: 22 },
    Wednesday: { open: 8, close: 22 },
    Thursday: { open: 8, close: 22 },
    Friday: { open: 8, close: 22 },
    Saturday: { open: 10, close: 22 },  // 10 AM - 10 PM
    Sunday: { open: 10, close: 22 }
};

// Restaurant branches
const branches = [
    {
        name: "Osu La Crescent",
        address: "Nyaniba Estates Park, Osu La Crescent, Accra",
        lat: 5.560923,
        lng: -0.1870
    },
    // Example for adding another branch:
    // {
    //     name: "Ofankor",
    //     address: "HQJR+86Q, Adjacent Empire prayer centre Ofankor, Accra",
    //     lat: 5.123456,
    //     lng: -0.123456
    // }
];

// Check if restaurant is currently open
function isRestaurantOpen() {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const hours = now.getHours();
    
    const todayHours = openingHours[day];
    return hours >= todayHours.open && hours < todayHours.close;
}

// Calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distance in km
}

// Find nearest branch to user
function findNearestBranch(userLat, userLng) {
    let nearestBranch = null;
    let minDistance = Infinity;
    
    branches.forEach(branch => {
        const distance = calculateDistance(userLat, userLng, branch.lat, branch.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestBranch = { ...branch, distance };
        }
    });
    
    return nearestBranch;
}

// Get user's location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                
                const nearestBranch = findNearestBranch(userLat, userLng);
                displayNearestBranch(nearestBranch);
            },
            error => {
                console.error("Error getting location:", error);
                // Display default branch if location access denied
                displayNearestBranch(branches[0]);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        // Display default branch if geolocation not supported
        displayNearestBranch(branches[0]);
    }
}

// Display nearest branch information
function displayNearestBranch(branch) {
    const branchInfo = document.getElementById('nearest-branch');
    if (branchInfo) {
        branchInfo.innerHTML = `
            <div class="branch-info">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <strong>Nearest Branch:</strong> ${branch.name}<br>
                    <small>${branch.address}</small>
                    ${branch.distance ? `<br><small>Distance: ${branch.distance.toFixed(2)} km</small>` : ''}
                </div>
            </div>
        `;
    }
}

// Check restaurant status and update UI
function checkRestaurantStatus() {
    const isOpen = isRestaurantOpen();
    const statusElement = document.getElementById('restaurant-status');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const orderButtons = document.querySelectorAll('#order-whatsapp, .btn-primary[href="#contact"]');
    
    if (statusElement) {
        statusElement.innerHTML = isOpen 
            ? '<div class="status-open"><i class="fas fa-check-circle"></i> We\'re currently open for orders!</div>'
            : '<div class="status-closed"><i class="fas fa-times-circle"></i> We\'re currently closed. Please check our opening hours.</div>';
    }
    
    // Disable ordering buttons if restaurant is closed
    if (!isOpen) {
        addToCartButtons.forEach(button => {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-lock"></i> Currently Closed';
            button.classList.add('disabled');
        });
        
        orderButtons.forEach(button => {
            button.disabled = true;
            button.classList.add('disabled');
        });
    }
}

// Initialize location and status checks
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    getUserLocation();
    checkRestaurantStatus();
    
    // Update status every minute
    setInterval(checkRestaurantStatus, 60000);
    
    // Add event listener for special offer button
    const specialOfferBtn = document.querySelector('.special-offer-btn');
    if (specialOfferBtn) {
        specialOfferBtn.addEventListener('click', () => {
            addToCart('special-offer-1');
        });
    }
});