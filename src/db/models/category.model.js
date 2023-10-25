const { DataTypes, Model } = require("sequelize");

const CATEGORY_TABLE_NAME = 'categories';

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

class Category extends Model {
    static associate(models) {
        this.hasMany(models.Product, {
            as: 'products', foreignKey: 'categoryId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE_NAME,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = { Category, CategorySchema, CATEGORY_TABLE_NAME }