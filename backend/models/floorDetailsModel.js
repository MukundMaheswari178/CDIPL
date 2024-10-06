const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define the FloorDetails model
const FloorDetails = sequelize.define('FloorDetails', {
  tittle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bhk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'floorDetails',
});

FloorDetails.sync();

module.exports = FloorDetails;
