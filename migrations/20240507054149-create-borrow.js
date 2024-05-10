'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('borrows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      student_name: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      absen: {
        type: Sequelize.INTEGER
      },
      date_of_borrow: {
        type: Sequelize.DATE
      },
      date_of_return: {
        type: Sequelize.DATE
      },
      return_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('dipinjam','dikembalikan')
      },
      penalty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('borrows');
  }
};