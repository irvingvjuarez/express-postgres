'use strict';

const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE_NAME } = require('../models/customers.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.changeColumn(CUSTOMER_TABLE_NAME, 'user_id', {
      field: 'user_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.changeColumn(CUSTOMER_TABLE_NAME, 'user_id', {
      field: 'user_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    })
  }
};
