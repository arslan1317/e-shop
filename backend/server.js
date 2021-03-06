const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const middleWare = require('./middleware/errorMiddleware'); 

dotenv.config()

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
  res.send('API is running...')
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes)

app.use(middleWare.notFound)

app.use(middleWare.errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`));