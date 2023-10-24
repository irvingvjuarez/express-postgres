const { DataTypes, Model } = require("sequelize");
const { USERS_TABLE_NAME } = require("./users.model");

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
    },
    userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USERS_TABLE_NAME,
            key: 'id'
        }
    }
}

class Customer extends Model {
    static associate(models) {
        this.belongsTo(models.User, { as: 'user' })
    }

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