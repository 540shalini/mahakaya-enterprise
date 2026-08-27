// Compatibility export for older imports. New backend code imports models from backend/src/models.js.
export { User as default, User } from './backend/src/models.js';
const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  mobile: { type: DataTypes.STRING(15), unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  address: { type: DataTypes.TEXT },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  timestamps: true,
});

module.exports = User;
