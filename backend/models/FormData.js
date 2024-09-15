// models/FormData.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FormData = sequelize.define("FormData", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  formType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = FormData;
