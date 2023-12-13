
const { DataTypes } = require('sequelize');
const sequelize = require('../Db');

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
      min: 1,
    },
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isForAdults: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Por defecto, la película no es para adultos
    validate: {
      isIn: [[true, false]], // Para este caso podmos usar un booleano
    },
  },

});

module.exports = Movie;
