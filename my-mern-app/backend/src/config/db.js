const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("MONGO_URI not found in environment variables");
    process.exit(1);
  }

  try {
    mongoose.set('strictQuery', true);
    mongoose.set('autoIndex', true);

    await mongoose.connect(uri);

    //console.log("MongoDB connected successfully");

    mongoose.connection.on('disconnected', () => {
      console.warn("MongoDB disconnected — retrying in 5 seconds...");
      setTimeout(connectDB, 5000);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
