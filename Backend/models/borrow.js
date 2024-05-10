'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  borrow.init({
    code: DataTypes.STRING,
    student_name: DataTypes.STRING,
    class: DataTypes.STRING,
    absen: DataTypes.INTEGER,
    date_of_borrow: DataTypes.DATE,
    date_of_return: DataTypes.DATE,
    return_date: DataTypes.DATE,
    status: DataTypes.ENUM('dipinjam','dikembailkan'),
    penalty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'borrow',
  });
  return borrow;
};