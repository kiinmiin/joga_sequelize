'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 40, // Introduction to Ashtanga
        tagId: 30, // yogapractice
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        articleId: 40, // Introduction to Ashtanga
        tagId: 31, // yogainspiration
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        articleId: 41, // Morning vinyasa flow routine
        tagId: 32, // wellness
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        articleId: 41, // Morning vinyasa flow routine
        tagId: 33, // nature
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        articleId: 42, // Secrets of a yoga teacher
        tagId: 34, // spiritual
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        articleId: 42, // Secrets of a yoga teacher
        tagId: 35, // sport
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        articleId: 42, // Secrets of a yoga teacher
        tagId: 36, // yogateacher
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags', null, {});
  }
};
