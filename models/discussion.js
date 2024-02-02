'use strict';
const {
  Model
} = require('sequelize');
const message = require('./message');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Discussion.hasMany(models.Message)
    }
  }
  Discussion.init({
    
  }, {
    sequelize,
    modelName: 'Discussion',
  });
  return Discussion;
};