'use strict';
const uuid = require('uuid/4')

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Channels', [{
        id: uuid(),
        name: 'General',
        slug: 'general',
        createdAt:  new Date();
        upatedAt:  new Date();
      },
      {
        id: uuid(),
        name: 'General',
        slug: 'genpl',
        createdAt:  new Date();
        upatedAt:  new Date();
      },{
        id: uuid(),
        name: 'General',
        slug: 'general',
        createdAt:  new Date();
        upatedAt:  new Date();
      },{
        id: uuid(),
        name: 'General',
        slug: 'general',
        createdAt:  new Date();
        upatedAt:  new Date();
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
