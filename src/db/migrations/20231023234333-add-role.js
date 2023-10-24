'use strict';

const { USERS_TABLE_NAME, UserSchema } = require('../models/users.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.addColumn(USERS_TABLE_NAME, 'role', UserSchema.role);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn(USERS_TABLE_NAME, 'role');
  }
};
