'use strict';

const { ORDER_PRODUCT_TABLE_NAME, OrderProductSchema } = require('../models/order-product');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE_NAME, OrderProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE_NAME);
  }
};
