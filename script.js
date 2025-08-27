        // Menu data structure
        const menuData = {
            combo: [
                {
                    id: 'combo-1',
                    title: 'Kenkey Super Pack',
                    price: 55,
                    description: 'Two balls of Kenkey served with peppered chicken, fried fish, and a side of shito and pepper sauce.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                },
                {
                    id: 'combo-2',
                    title: 'Family Feast',
                    price: 120,
                    description: 'Four balls of Kenkey, whole peppered chicken, fried fish, jollof rice, and assorted sides. Perfect for sharing!',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                },
                {
                    id: 'combo-3',
                    title: 'Deluxe Combo',
                    price: 75,
                    description: 'Two balls of Kenkey, grilled tilapia, peppered chicken wings, fried plantains, and a choice of soft drink.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                },
                {
                    id: 'combo-4',
                    title: 'Vegetarian Delight',
                    price: 45,
                    description: 'Two balls of Kenkey with garden egg stew, fried plantains, avocado salad, and a side of shito.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                }
            ],
            rice: [
                {
                    id: 'rice-1',
                    title: 'Jollof Rice with Chicken',
                    price: 45,
                    description: 'Our famous party jollof rice served with a whole grilled chicken quarter and a side of coleslaw.',
                    image: 'images/IMG-20250810-WA0027.jpg'
                },
                {
                    id: 'rice-2',
                    title: 'Waakye with Beef',
                    price: 40,
                    description: 'Traditional rice and beans cooked with sorghum leaves, served with tender beef stew, spaghetti, and hard boiled egg.',
                    image: 'images/IMG-20250810-WA0027.jpg'
                },
                {
                    id: 'rice-3',
                    title: 'Fried Rice with Wings',
                    price: 35,
                    description: 'Special fried rice with mixed vegetables, served with four spicy chicken wings and a side salad.',
                    image: 'images/IMG-20250810-WA0027.jpg'
                },
                {
                    id: 'rice-4',
                    title: 'Plain Rice with Stew',
                    price: 35,
                    description: 'Steamed white rice served with your choice of chicken, beef, or fish in a rich tomato-based stew.',
                    image: 'images/IMG-20250810-WA0027.jpg'
                }
            ],
            chips: [
                {
                    id: 'chips-1',
                    title: 'Chips with Chicken',
                    price: 40,
                    description: 'Crispy golden fries served with grilled chicken quarter and a side of coleslaw.',
                    image: 'images/Whisk_b2e04402fc.jpg'
                },
                {
                    id: 'chips-2',
                    title: 'Chips with Wings',
                    price: 40,
                    description: 'Crispy golden fries served with four spicy chicken wings and your choice of dipping sauce.',
                    image: 'images/Whisk_b2e04402fc.jpg'
                },
                {
                    id: 'chips-3',
                    title: 'Loaded Chips',
                    price: 45,
                    description: 'Crispy fries topped with minced beef, cheese sauce, grilled vegetables, and a sprinkle of our special seasoning.',
                    image: 'images/Whisk_b2e04402fc.jpg'
                },
                {
                    id: 'chips-4',
                    title: 'Sweet Potato Fries',
                    price: 35,
                    description: 'Crispy sweet potato fries served with a side of garlic aioli and paprika seasoning.',
                    image: 'images/Whisk_b2e04402fc.jpg'
                }
            ],
            kenkey: [
                {
                    id: 'kenkey-1',
                    title: 'Ga Kenkey with Fish',
                    price: 40,
                    description: 'Two balls of traditional Ga Kenkey served with fried fish, pepper sauce, and shito.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                },
                {
                    id: 'kenkey-2',
                    title: 'Ga Kenkey with Chicken',
                    price: 40,
                    description: 'Two balls of traditional Ga Kenkey served with peppered chicken, pepper sauce, and shito.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                },
                {
                    id: 'kenkey-3',
                    title: 'Ga Kenkey with Wings',
                    price: 45,
                    description: 'Two balls of traditional Ga Kenkey served with four spicy chicken wings, pepper sauce, and shito.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                },
                {
                    id: 'kenkey-4',
                    title: 'Ga Kenkey Deluxe',
                    price: 65,
                    description: 'Three balls of traditional Ga Kenkey served with peppered chicken, fried fish, pepper sauce, shito, and fried plantains.',
                    image: 'images/f28a3402-f6ca-4811-b304-6a10ec5e8e7a-converted.png'
                }
            ],
            extras: [
                {
                    id: 'extras-1',
                    title: 'Extra Chicken',
                    price: 20,
                    description: 'Additional grilled chicken quarter.'
                },
                {
                    id: 'extras-2',
                    title: 'Extra Fish',
                    price: 25,
                    description: 'Additional fried tilapia.'
                },
                {
                    id: 'extras-3',
                    title: 'Extra Kenkey Ball',
                    price: 10,
                    description: 'Additional ball of Kenkey.'
                },
                {
                    id: 'extras-4',
                    title: 'Fried Plantains',
                    price: 15,
                    description: 'Sweet fried plantains, perfectly caramelized.'
                },
                {
                    id: 'extras-5',
                    title: 'Coleslaw',
                    price: 10,
                    description: 'Fresh and creamy coleslaw salad.'
                },
                {
                    id: 'extras-6',
                    title: 'Shito',
                    price: 10,
                    description: 'Traditional Ghanaian black pepper sauce.'
                },
                {
                    id: 'extras-7',
                    title: 'Pepper Sauce',
                    price: 10,
                    description: 'Spicy hot pepper sauce.'
                },
                {
                    id: 'extras-8',
                    title: 'Soft Drink',
                    price: 10,
                    description: 'Choice of Coca-Cola, Fanta, or Sprite.'
                },
                {
                    id: 'extras-9',
                    title: 'Bottled Water',
                    price: 5,
                    description: '500ml bottled water.'
                },
                {
                    id: 'extras-10',
                    title: 'Fruit Juice',
                    price: 15,
                    description: 'Choice of mango, pineapple, or orange juice.'
                },
                {
                    id: 'extras-11',
                    title: 'Extra Rice',
                    price: 15,
                    description: 'Additional serving of rice.'
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
            showMenuItems('combo');
            
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
            
            let message = "Hello! I'd like to place an order from YesChef Restaurant:\n\n";
            
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
        
        // Initialize the menu
        document.addEventListener('DOMContentLoaded', () => {
            initMenu();
        });