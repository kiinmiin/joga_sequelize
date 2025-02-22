'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tags', [
      { name: 'yogapractice', createdAt: new Date(), updatedAt: new Date() },
      { name: 'yogainspiration', createdAt: new Date(), updatedAt: new Date() },
      { name: 'wellness', createdAt: new Date(), updatedAt: new Date() },
      { name: 'nature', createdAt: new Date(), updatedAt: new Date() },
      { name: 'spiritual', createdAt: new Date(), updatedAt: new Date() },
      { name: 'sport', createdAt: new Date(), updatedAt: new Date() },
      { name: 'yogateacher', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
