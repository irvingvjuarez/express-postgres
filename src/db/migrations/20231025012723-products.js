'use strict';
const { PRODUCT_TABLE_NAME, ProductSchema } = require('../models/product.model');
const { CATEGORY_TABLE_NAME, CategorySchema } = require('../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE_NAME, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE_NAME, ProductSchema);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE_NAME);
    await queryInterface.dropTable(PRODUCT_TABLE_NAME);
  }
};
