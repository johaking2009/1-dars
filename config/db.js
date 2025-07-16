const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB bilan ulanish muvaffaqiyatli");
  } catch (err) {
    console.error("MongoDB ulanishda xatolik:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;