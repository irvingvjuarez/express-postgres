const { DataTypes, Model } = require("sequelize");

const CUSTOMER_TABLE_NAME = 'customers';

const CustomerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        field: 'last_name',
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
}

class Customer extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE_NAME,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE_NAME }