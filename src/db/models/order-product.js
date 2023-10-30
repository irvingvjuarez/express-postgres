const { Model, DataTypes } = require("sequelize");
const { PRODUCT_TABLE_NAME } = require("./product.model");

const ORDER_PRODUCT_TABLE_NAME = 'orders_products';

const OrderProductSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    orderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_PRODUCT_TABLE_NAME,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCT_TABLE_NAME,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class OrderProduct extends Model {
    static associate(models) {
        //
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE_NAME,
            timestamps: false
        }
    }
}

module.exports = { OrderProduct, OrderProductSchema, ORDER_PRODUCT_TABLE_NAME }