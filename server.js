const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const ordersFilePath = path.join(__dirname, 'orders.json');

// Load existing orders from file
let orders = [];
if (fs.existsSync(ordersFilePath)) {
  const data = fs.readFileSync(ordersFilePath);
  orders = JSON.parse(data);
}

// Save orders to file
function saveOrders() {
  fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
}

// Place an order
app.post('/place-order', (req, res) => {
  const order = req.body;
  order.date = new Date().toISOString();
  orders.push(order);
  saveOrders();
  res.json({ message: 'Order placed successfully', order });
});

// Get order history
app.get('/order-history', (req, res) => {
  res.json(orders);
});

// Get total sales and profits
app.get('/total-sales', (req, res) => {
  let totalSales = 0;
  let totalQuantity = 0;
  orders.forEach(order => {
    for (const [productName, productDetails] of Object.entries(order)) {
      totalSales += productDetails.total;
      totalQuantity += productDetails.quantity;
    }
  });
  res.json({ totalSales, totalQuantity });
});

// Get profits by date
app.get('/profits-by-date', (req, res) => {
  const { date } = req.query;
  let totalSales = 0;
  orders.forEach(order => {
    if (order.date.startsWith(date)) {
      for (const [productName, productDetails] of Object.entries(order)) {
        totalSales += productDetails.total;
      }
    }
  });
  res.json({ date, totalSales });
});

// Get profits by month
app.get('/profits-by-month', (req, res) => {
  const { month } = req.query;
  let totalSales = 0;
  orders.forEach(order => {
    if (order.date.startsWith(month)) {
      for (const [productName, productDetails] of Object.entries(order)) {
        totalSales += productDetails.total;
      }
    }
  });
  res.json({ month, totalSales });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
