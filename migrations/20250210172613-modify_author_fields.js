'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('Authors', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }),
    queryInterface.changeColumn('Authors', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Authors')
  }
};
