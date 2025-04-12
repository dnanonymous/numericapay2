
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("URI:", process.env.MONGO_URI); // Debug: verifica que la URI se cargó
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
};

connectDB();

// Mantén el proceso abierto para ver los mensajes
setTimeout(() => {}, 5000);