const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'USERS';

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
        field: 'email'
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLE_NAME,
            modelName: 'User',
            timestamps: true
        }
    }
}

module.exports = { User, UserSchema }