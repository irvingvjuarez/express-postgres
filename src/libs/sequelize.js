const { Sequelize } = require('sequelize');
const Config = require('../config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(Config.dbName, Config.dbUser, Config.dbPassword, {
    host: Config.dbHost,
    dialect: 'postgresql'
})

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;