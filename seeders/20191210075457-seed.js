'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Contacts', [{
        name: 'John Doe',
        email: 'johndoe@mastermail.com',
        phone: '085999888777',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
