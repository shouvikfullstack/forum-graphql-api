"use strict";
const uuid = require("uuid/v4");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuid(),
          username: 'shouvik',
          email: 'shouvik@gmail.com',
          password: await bcrypt.hash('password', 10),
          role: 'Admin',
          createdAt: new Date();
          updatedAt: new Date();
          
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Users', null, {});
  }
};
