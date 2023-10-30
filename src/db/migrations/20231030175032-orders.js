'use strict';

const { ORDER_TABLE_NAME, OrderSchema } = require('../../db/models/order.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE_NAME, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE_NAME);
  }
};
