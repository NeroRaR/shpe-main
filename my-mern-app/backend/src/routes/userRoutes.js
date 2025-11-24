const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//console.log("userRoutes file loaded");


// SIGNUP
router.post('/signup', async (req, res) => {
    //console.log("signup route hit!");
  try {
    const { firstName, lastName, email, password, memberId } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        memberId,
        role: 'member',
    });


    await newUser.save();
    res.status(201).json({ success: true, message: 'Signup successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials (no user)' });
    }

    const isMatch = await user.matchPassword(password);
    //console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials (wrong password)' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


module.exports = router;
