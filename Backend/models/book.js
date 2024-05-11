'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init({
    code: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahun_terbit: DataTypes.STRING,
    category: DataTypes.ENUM('referensi','novel','ensiklopedia','komik'),
    pict: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};