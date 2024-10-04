const { DataTypes } = require('sequelize');  // Import DataTypes
const { sequelize } = require('../config/database');  // Correctly import sequelize instance from your config

const Upload = sequelize.define('Upload', {
  projectTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

module.exports = Upload;
