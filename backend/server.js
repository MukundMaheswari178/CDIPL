const express = require('express');
const cors = require('cors');
const path = require('path');

const { connectDB } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes'); // Updated route for projects
const amenitiesRoutes = require('./routes/amenitiesRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use('/api', userRoutes);
// Routes
app.use('/api', projectRoutes); // Using the project routes

app.use('/api' , amenitiesRoutes);


// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use the upload routes
app.use('/api', uploadRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
