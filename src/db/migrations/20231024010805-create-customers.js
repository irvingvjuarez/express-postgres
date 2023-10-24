'use strict';

const { CUSTOMER_TABLE_NAME, CustomerSchema } = require('../models/customers.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable(CUSTOMER_TABLE_NAME, CustomerSchema);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable(CUSTOMER_TABLE_NAME);
  }
};
