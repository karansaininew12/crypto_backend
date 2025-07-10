require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cryptoRoutes = require('./routes/cryptoRoutes');
const dbConfig = require('./config/db');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use('/api', cryptoRoutes);

// Database connection
// dbConfig()

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});