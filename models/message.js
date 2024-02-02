'use strict';
const {
  Model
} = require('sequelize');
const discussion = require('./discussion');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Message.belongsTo(models.Discussion)
    }
  }
  Message.init({
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};