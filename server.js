const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://xaayux:909090xd@cluster0.mojpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Order schema and model
const orderSchema = new mongoose.Schema({
  buyerName: String,
  cart: Object,
  totalValue: String,
  date: Date
});

const Order = mongoose.model('Order', orderSchema);

// Routes
app.post('/saveOrder', (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save()
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/getOrders', (req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/getOrdersByDate', (req, res) => {
  const date = new Date(req.query.date);
  const nextDate = new Date(date);
  nextDate.setDate(date.getDate() + 1);

  Order.find({ date: { $gte: date, $lt: nextDate } })
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.get('/getOrdersByMonth', (req, res) => {
  const [year, month] = req.query.month.split('-');
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);

  Order.find({ date: { $gte: startDate, $lt: endDate } })
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
