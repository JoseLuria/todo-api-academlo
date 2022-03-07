const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Todos = sequelize.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  //If the task is completed or not completed
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  //To make soft delete of the todo
  status: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

module.exports = { Todos };
