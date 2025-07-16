const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

app.use(express.json()); // body json formatda bo'lishi uchun
app.use('/api', userRoutes); // route prefix uchun

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await connectDB();
    const server = app.listen(PORT, () => {
      console.log(`Server http://localhost:${PORT} da ishga tushdi ✅`);
    });
    server.on('error', (err) => {
      console.error('Serverni ishga tushirishda xatolik:', err.message);
    });
  } catch (err) {
    console.error('MongoDB ulanishda xatolik:', err);
  }
}

startServer();