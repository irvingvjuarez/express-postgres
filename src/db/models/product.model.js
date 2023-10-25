const { DataTypes, Model } = require("sequelize");
const { CATEGORY_TABLE_NAME } = require("./category.model");

const PRODUCT_TABLE_NAME = 'Products';

const ProductSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: true,
        type: DataTypes.TEXT
    },
    categoryId: {
        field: 'category_id',
        unique: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE_NAME,
            key: 'id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    }
}

class Product extends Model {
    static associate(models) {
        this.belongsTo(models.Category, { as: 'category' })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE_NAME,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = {
    Product, ProductSchema, PRODUCT_TABLE_NAME
}