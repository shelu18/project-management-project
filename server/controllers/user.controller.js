const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  // Register new user
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      console.log("data cpmming ",req.body)

      // Check if user already exists
      const existingUser = await User.findOne({ $or: [{ email }, { username:name }] });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const user = new User({
        username:name,
        email,
        password: hashedPassword,
       
      });

      await user.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Login user
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = userController;