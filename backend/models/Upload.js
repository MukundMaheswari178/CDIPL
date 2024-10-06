const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database'); // Your Sequelize setup

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
  fileCategory: {
    type: DataTypes.STRING, // Store the category like Main Image, Floor, etc.
    allowNull: false,
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Upload.sync()

module.exports = Upload;
