const { Model, DataTypes } = require('sequelize');

const USERS_TABLE_NAME = 'USERS';

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,

    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: 'customer'
    }
}

class User extends Model {
    static associate(models) {
        this.hasOne(models.Customer, { as: 'customer', foreignKey: 'userId' })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USERS_TABLE_NAME,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { User, UserSchema, USERS_TABLE_NAME }