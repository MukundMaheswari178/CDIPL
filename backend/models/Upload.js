// models/Upload.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a configured sequelize instance

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
});

module.exports = Upload;
