'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SignUpRecruitment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SignUpRecruitment.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    position: DataTypes.STRING,
    isRecruitment:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'SignUpRecruitment',
  });
  return SignUpRecruitment;
};