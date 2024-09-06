const databases = require('../config/database');
const { DataTypes } = require('sequelize');

const Patient = databases.sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'patient',
    schema: 'Patient',
    timestamps: false 
  });
  
  module.exports = Patient;
