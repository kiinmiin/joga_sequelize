'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Articles', [{
      name: 'Introduction to Ashtanga',
      slug: 'introduction-to-ashtanga',
      image: 'ashtanga.jpg',
      body: '<p>Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal.</p>',
      published: '2020-01-08 15:02:30',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Articles', [{
      name: 'Morning vinyasa flow routine',
      slug: 'morning-vinyasa-flow-routine',
      image: 'morning.jpg',
      body: '<p>Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal.</p>',
      published: '2020-04-14 15:02:42',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Articles', [{
      name: 'Secrets of a yoga teacher',
      slug: 'secrets-of-a-yoga-teacher',
      image: 'yoga-teacher.jpg',
      body: '<p>Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal. Mati Maasikas korjas maasikaid maal.<p>',
      published: '2060-05-28 15:02:58',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
