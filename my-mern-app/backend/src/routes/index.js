const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Debug logs to confirm it loads
// console.log("index.js router loaded");

// Use userRoutes for /api routes
router.use('/', userRoutes);

module.exports = router;
