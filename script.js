
const products = [
    {
        id: 1,
        name: "Pro Grade Cricket Bat",
        category: "Cricket",
        price: 15000,
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Grade 1 English Willow cricket bat for professional players."
    },
    {
        id: 2,
        name: "Premium Leather Cricket Ball",
        category: "Cricket",
        price: 1200,
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Alum tanned leather ball, 4-piece construction."
    },
    {
        id: 3,
        name: "Advanced Football (Size 5)",
        category: "Football",
        price: 3500,
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "FIFA quality match ball with high durability."
    },
    {
        id: 4,
        name: "Graphite Badminton Racket",
        category: "Badminton",
        price: 8500,
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Ultra lightweight carbon fiber frame for fast movements."
    },
    {
        id: 5,
        name: "Pro Tennis Racket",
        category: "Tennis",
        price: 12000,
        image: "https://images.unsplash.com/photo-1617083275226-62201e0ad831?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Balanced frame for power and control on all court types."
    },
    {
        id: 6,
        name: "Professional Boxing Gloves",
        category: "Boxing",
        price: 5500,
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "12oz leather gloves with multi-layer foam padding."
    },
    {
        id: 7,
        name: "Elite Running Shoes",
        category: "Footwear",
        price: 9500,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Responsive cushioning for long distance running."
    },
    {
        id: 8,
        name: "Performance Training Jersey",
        category: "Clothing",
        price: 2500,
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Moisture-wicking fabric for intense workouts."
    },
    {
        id: 9,
        name: "Cricket Pads - Elite",
        category: "Cricket",
        price: 4500,
        image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High-density foam for maximum protection and comfort."
    },
    {
        id: 10,
        name: "Goalkeeper Gloves",
        category: "Football",
        price: 3000,
        image: "https://images.unsplash.com/photo-1518737003272-da46994a91f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Latex palm for superior grip in all weather conditions."
    },
    {
        id: 11,
        name: "Nylon Shuttlecocks (Doz)",
        category: "Badminton",
        price: 1800,
        image: "https://images.unsplash.com/photo-1613918431703-909772863897?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Durable yellow nylon shuttles for club play."
    },
    {
        id: 12,
        name: "Tennis Balls (Can of 3)",
        category: "Tennis",
        price: 950,
        image: "https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "High-visibility optic yellow felt for championship play."
    },
    {
        id: 13,
        name: "Heavy Punching Bag",
        category: "Boxing",
        price: 11000,
        image: "https://images.unsplash.com/photo-1599058917232-d750c185967c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Synthetic leather bag pre-filled with shredded textile."
    },
    {
        id: 14,
        name: "Men's Basketball Shoes",
        category: "Footwear",
        price: 14500,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Superior ankle support and grip for indoor courts."
    },
    {
        id: 15,
        name: "Athletic Compression Shorts",
        category: "Clothing",
        price: 1800,
        image: "https://images.unsplash.com/photo-1516244061937-0402d608dfc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Quick-dry compression gear for muscle support."
    },
    {
        id: 16,
        name: "Cricket Helmet - Pro",
        category: "Cricket",
        price: 5200,
        image: "https://images.unsplash.com/photo-1604130386125-9c86950262b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Adjustable steel visor and high-impact shell."
    },
    {
        id: 17,
        name: "Football Boots (Studs)",
        category: "Football",
        price: 6800,
        image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Firm ground studs for explosive speed on grass."
    },
    {
        id: 18,
        name: "Badminton Court Shoes",
        category: "Footwear",
        price: 7500,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Non-marking rubber sole with excellent lateral support."
    },
    {
        id: 19,
        name: "Tennis Grip (Pack of 5)",
        category: "Tennis",
        price: 1500,
        image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e03a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Extra tacky overgrips for better sweat absorption."
    },
    {
        id: 20,
        name: "Speed Skipping Rope",
        category: "Athletics",
        price: 1200,
        image: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Adjustable length with ball bearings for high speed."
    },
    {
        id: 21,
        name: "Hand Wraps (Pair)",
        category: "Boxing",
        price: 800,
        image: "https://images.unsplash.com/photo-1591117207239-7ad59a0a79dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "4.5m stretch cotton wraps for wrist protection."
    },
    {
        id: 22,
        name: "Training Tracksuit",
        category: "Clothing",
        price: 6500,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Full zip jacket and slim fit pants for outdoor training."
    }
];

let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartCount = document.getElementById('cartCount');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const filterItems = document.querySelectorAll('.filter-item');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCart();
});

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badge">${product.category}</div>
            </div>
            <div class="product-info">
                <div class="product-cat">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-footer">
                    <span class="product-price">Rs. ${product.price.toLocaleString()}</span>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i>
                    </div>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Filtering
filterItems.forEach(item => {
    item.addEventListener('click', () => {
        // Update UI
        filterItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const category = item.getAttribute('data-category');
        if (category === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            renderProducts(filtered);
        }
    });
});

// Cart Functions
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    openCart();
};

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
};

function updateCart() {
    // Update count
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.innerText = totalItems;

    // Update items list
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">Rs. ${item.price.toLocaleString()} x ${item.quantity}</div>
            </div>
            <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    cartTotalElement.innerText = `Rs. ${total.toLocaleString()}`;
}

window.openCart = function() {
    cartOverlay.classList.add('active');
};

window.closeCart = function() {
    cartOverlay.classList.remove('active');
};

window.checkout = function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    // Construct WhatsApp message
    let message = "Hello Master Sports! I'd like to order:\n\n";
    cart.forEach(item => {
        message += `- ${item.name} (x${item.quantity}): Rs. ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\nTotal: ${cartTotalElement.innerText}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923347250000?text=${encodedMessage}`, '_blank');
};
