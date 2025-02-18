require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const userRoutes = require('./routes/user.routes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});