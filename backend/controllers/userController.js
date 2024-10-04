const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' }); // Token expires in 30 days
};

// Signup Controller
const signupUser = async (req, res) => {
  const { name, email, phone, password, role, address } = req.body;

  try {
    // Check if the user already exists by email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user without hashing the password
    const user = await User.create({
      name,
      email,
      phone,
      password, // Store the plain password directly
      role,
      address,
    });

    // Generate JWT token
    const token = generateToken(user.id);

    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }, // Return only safe data
      token,
    });
  } catch (error) {
    console.error('Signup Error: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Login Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email } });

    // If user doesn't exist, send error response
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Log the stored password for debugging
    console.log('Stored Password:', user.password); // Log the plain password for debugging

    // Compare the passwords directly
    const isMatch = password.trim() === user.password; // Compare plain passwords directly

    // Log the comparison result for debugging
    console.log('Password Match:', isMatch);

    // If passwords do not match, send error response
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    res.status(200).json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, email: user.email, role: user.role }, // Return only safe data
      token,
    });
  } catch (error) {
    console.error('Login Error: ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signupUser, loginUser };
