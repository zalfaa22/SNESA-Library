'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class returns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  returns.init({
    estimate_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
    status: DataTypes.ENUM('dipinjam','dikembailkan')
  }, {
    sequelize,
    modelName: 'return',
  });
  return returns;
};