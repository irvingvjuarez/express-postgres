const { Model, DataTypes } = require("sequelize");
const { CUSTOMER_TABLE_NAME } = require("./customers.model");

const ORDER_TABLE_NAME = 'Orders';

const OrderSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CUSTOMER_TABLE_NAME,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Order extends Model {
    static associate(models) {
        this.belongsTo(models.Customer, {
            as: 'customer'
        })
        this.belongsToMany(models.Product, {
            as: 'items',
            through: models.OrderProduct,
            foreignKey: 'orderId',
            otherKey: 'productId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE_NAME,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = { Order, OrderSchema, ORDER_TABLE_NAME }