'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDiscussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Discussion.belongsToMany(models.User, {
        through: models.UserDiscussion, 
        foreignKey: 'discussionId',
      });

      models.User.belongsToMany(models.Discussion, {
        through: models.UserDiscussion,
        foreignKey: 'userId',
      });
    }
  }
  UserDiscussion.init({
    
  }, {
    sequelize,
    modelName: 'UserDiscussion',
  });
  return UserDiscussion;
};