const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Define Amenities model
const Amenities = sequelize.define('Amenities', {
  tittle: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Projects', // Refers to the Project model
      key: 'tittle',
    },
    onDelete: 'CASCADE', // Deletes amenities if the project is deleted
  },
  petArea: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  restaurant: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  
  security: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  tennisCourt: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  squashCourt: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  atms: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  cctv: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  centralWifi: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  multiplex: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  // Add remaining fields here as needed
  greenArea: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  barbequeArea: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  golfCourse: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  intercom: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  balcony: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

  jacuzzi: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  fireFightingSystems: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Sync model with the database
Amenities.sync();

module.exports = Amenities;
