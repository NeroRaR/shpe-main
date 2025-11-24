require('dotenv').config();
const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('./config/db');

const app = express();
//const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to MongoDB
connectDB();

// Database connection
/*mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
*/

app.get('/', (req, res) => {
  res.send('Welcome to SHPE Backend API');
});

// Routes
app.use('/api', routes);
//console.log('Routes loaded at /api');

// Start the server
/*app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/

module.exports = app;

