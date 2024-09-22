'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role,{foreignKey:'role_code',targetKey:'code',as:'roleData'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar:DataTypes.BLOB,
    role_code:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};