'use strict';

const { USERS_TABLE_NAME, UserSchema } = require('../models/users.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable(USERS_TABLE_NAME, UserSchema);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable(USERS_TABLE_NAME);
  }
};
