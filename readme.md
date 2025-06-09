# 🌾 Gumasta Krishi Kendra - Agricultural Products Management System

<div align="center">

![Agricultural Banner](https://img.shields.io/badge/Agriculture-Management-green?style=for-the-badge&logo=leaf&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

*A modern, responsive web application for managing agricultural product orders with real-time price editing capabilities*

</div>

---

## 🚀 Features Overview

### 🛒 Core Functionality
- Multi-Category Product Management: Seeds, Fertilizers, Herbicides, and Pesticides
- Dynamic Product Loading: Products loaded from external text files
- Interactive Shopping Cart: Add, remove, and modify quantities
- Real-time Price Calculation: Automatic total calculation with live updates

### ✨ Advanced Features
- 🔧 Real-time Price Editing: Modify product prices for specific orders without affecting the database
- 📱 Responsive Design: Optimized for all device sizes
- 🎨 Modern UI/UX: Beautiful gradient backgrounds with smooth animations
- 📄 Receipt Generation: Download order receipts as PNG images
- ⚡ Session-based Changes: Price modifications are temporary and order-specific

---

## 🛠️ Technical Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| HTML5 | Structure & Markup | Latest |
| CSS3 | Styling & Animations | Latest |
| JavaScript (ES6+) | Dynamic Functionality | Latest |
| Tailwind CSS | Utility-first CSS Framework | CDN |
| Font Awesome | Icon Library | 5.15.3 |
| html2canvas | Receipt Generation | Latest |

---

## 📁 Project Structure

```
gkkweb/
├── 📄 index.html          # Main application file
├── 📄 adminkg.html        # Admin interface
├── 📄 indexx.html         # Alternative interface
├── 📊 Seeds.txt           # Seeds product data
├── 📊 Fertilizers.txt     # Fertilizers product data
├── 📊 Herbicides.txt      # Herbicides product data
├── 📊 Pesticides.txt      # Pesticides product data
├── ⚙️ config.txt          # Configuration file
├── 📋 requirements.txt    # Dependencies list
└── 📖 README.md           # Project documentation
```

---

## 🎯 Key Features Breakdown

### 1. 🏪 Product Management System
\```javascript
// Dynamic product loading from text files
function loadProducts(category) {
    fetch(`${category}.txt`)
        .then(response => response.text())
        .then(data => {
            // Parse and display products
        });
}
\```

Features:
- ✅ Four product categories (Seeds, Fertilizers, Herbicides, Pesticides)
- ✅ Dynamic product button generation
- ✅ Consistent grid layout with fixed heights
- ✅ Responsive 2-column grid design

### 2. 🔧 Real-time Price Editing
\```javascript
// Edit price functionality
editButton.addEventListener('click', function (e) {
    const newPrice = prompt(`Enter new price for ${name}:`, price);
    if (newPrice && !isNaN(newPrice) && parseFloat(newPrice) > 0) {
        // Update price for current session only
    }
});
\```

Benefits:
- 🎯 Order-specific pricing: Change prices for individual orders
- 🔒 Non-permanent changes: Original product data remains unchanged
- 🔄 Live cart updates: Automatic recalculation when prices are modified
- ⚡ Instant feedback: Real-time UI updates

### 3. 🛒 Smart Shopping Cart
\```javascript
// Cart management with real-time updates
function updateCart() {
    let cartDetailsHTML = '';
    let totalValue = 0;
    for (const [productName, productDetails] of Object.entries(cart)) {
        // Calculate and display cart items
    }
}
\```

Capabilities:
- ➕ Add products with custom quantities
- ✏️ Modify existing cart items
- 🗑️ Remove items (set quantity to 0)
- 💰 Real-time total calculation
- 🔄 Dynamic price updates

### 4. 📄 Receipt Generation System
\```javascript
// Generate downloadable receipt
html2canvas(cartBlockClone).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'cart-details.png';
    link.click();
});
\```

Receipt Features:
- 🏢 Company header with branding
- 👤 Customer name capture
- 📋 Detailed product list with "Products:" header
- 💵 Total amount calculation
- 📅 Date and time stamp
- 🖼️ PNG image download
- 📏 Proper spacing and formatting

---

## 🎨 Design Features

### Visual Elements
- 🌈 Animated Gradient Background: Smooth color transitions
- ⚪ White Border Styling: Clean, professional appearance
- 🟡 Yellow Edit Buttons: High visibility for price editing
- 📱 Mobile-first Design: Responsive across all devices

### User Experience
- 🎯 Intuitive Navigation: Clear category buttons
- ⚡ Fast Loading: Optimized performance
- 🔄 Real-time Feedback: Instant UI updates
- 📐 Consistent Layout: Fixed-height product blocks

---

## 🚀 Getting Started

### Prerequisites
- 🌐 Modern web browser (Chrome, Firefox, Safari, Edge)
- 📁 Local web server (optional, for file loading)

### Installation
1. Clone the repository
   \```bash
   git clone https://github.com/ikaayuxd/gkkweb.git
   cd gkkweb
   \```

2. Start local server (optional)
   \```bash
   python3 -m http.server 8000
   # or
   npx serve .
   \```

3. Open in browser
   \```
   http://localhost:8000
   # or directly open index.html
   \```

---

## 📖 Usage Guide

### For Customers
1. 🏪 Browse Products: Select category (Seeds, Fertilizers, etc.)
2. 🔧 Edit Prices: Click "Edit Price" to modify prices for your order
3. 🛒 Add to Cart: Click product button and enter quantity
4. 💰 Review Total: Check cart details and total amount
5. 📄 Place Order: Enter name and download receipt

### For Administrators
1. 📝 Update Products: Modify .txt files to add/remove products
2. 💲 Set Base Prices: Update default prices in product files
3. 📊 Monitor Orders: Track order history and patterns

---

## 🔧 Customization

### Adding New Products
\```
# Format in .txt files
🌱 Product Name, Price
🌾 Another Product, Price
\```

### Styling Modifications
\```css
/* Custom gradient colors */
background: linear-gradient(135deg, #1e3a8a, #3b82f6, #10b981, #f59e0b);

/* Product button styling */
.product-button {
    /* Custom styles here */
}
\```

---

## 🌟 Advanced Features

### Price Editing System
- Session-based: Changes apply only to current order
- Validation: Ensures positive numeric values
- Cart Integration: Automatic recalculation of totals
- Visual Feedback: Immediate UI updates

### Receipt System
- Professional Layout: Clean, business-ready format
- Comprehensive Details: All order information included
- Image Generation: High-quality PNG output
- Proper Spacing: Well-formatted sections

### Responsive Design
- Mobile Optimization: Touch-friendly interface
- Tablet Support: Optimized for medium screens
- Desktop Enhancement: Full-featured experience

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit changes (`git commit -m 'Add AmazingFeature'`)
4. 📤 Push to branch (`git push origin feature/AmazingFeature`)
5. 🔄 Open Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

- 🌐 Website: [gkkweb.vercel.app](https://gkkweb.vercel.app)
- 📧 Email: support@gkkweb.com
- 🐛 Issues: [GitHub Issues](https://github.com/ikaayuxd/gkkweb/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/ikaayuxd/gkkweb/discussions)

---

## 🙏 Acknowledgments

- 🎨 Tailwind CSS for the amazing utility-first framework
- 📷 html2canvas for receipt generation capabilities
- 🌾 Agricultural Community for inspiring this project
- 💻 Open Source Contributors for making this possible

---
