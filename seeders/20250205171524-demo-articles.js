'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Articles', [{
      name: 'Introduction to Ashtanga',
      slug: 'introduction-to-ashtanga',
      image: 'ashtanga.jpg',
      body: '<p>Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal.</p>',
      published: '2020-01-08 15:02:30',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Morning vinyasa flow routine',
      slug: 'morning-vinyasa-flow-routine',
      image: 'morning.jpg',
      body: '<p>Morning vinyasa flow routine description...</p>',
      published: '2020-04-14 15:02:42',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Secrets of a yoga teacher',
      slug: 'secrets-of-a-yoga-teacher',
      image: 'yoga-teacher.jpg',
      body: '<p>Secrets of a yoga teacher description...</p>',
      published: '2020-05-28 15:02:58',
      author_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
