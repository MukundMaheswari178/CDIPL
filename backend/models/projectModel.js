const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Amenities = require('./Amenities'); // Import Amenities model

// Define Project model
const Project = sequelize.define('Project', {
    tittle: {
       type: DataTypes.STRING,
       allowNull: false,
       primaryKey: true,
    },

   name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  superArea: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  avgPrice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalArea: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  propertyType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  possession: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reraId: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  projectDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
},
proximity: {
    type: DataTypes.STRING,
    allowNull: true,
},
investmentPotential: {
    type: DataTypes.STRING,
    allowNull: true,
},
startingPrice: {
    type: DataTypes.STRING,
    allowNull: true,
},

});

Project.hasOne(Amenities, {
  foreignKey: 'tittle',
  onDelete: 'CASCADE', // Ensures amenities are deleted if the project is deleted
});


// Sync model with database
Project.sync();

module.exports = Project;
