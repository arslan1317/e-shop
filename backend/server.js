const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const products = require('./data/products');
const productRoutes = require('./routes/productRoutes');
const middleWare = require('./middleware/errorMiddleware'); 

dotenv.config()

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...')
});

app.use('/api/products', productRoutes);

app.use(middleWare.notFound)

app.use(middleWare.errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`));