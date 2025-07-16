const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu email allaqachon mavjud!' });
    }
    const user = new User({ name, email });
    await user.save();
    res.status(201).json({ message: 'Foydalanuvchi muvaffaqiyatli qo‘shildi!', user });
  } catch (err) {
    res.status(500).json({ message: 'Xatolik yuz berdi', error: err.message });
  }
};