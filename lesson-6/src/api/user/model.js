'use strict'
import bcrypt from 'bcrypt'

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            set: function (val) {
                if (!val) {
                    return
                }
                const hash = bcrypt.hashSync(val, 9)
                this.setDataValue('password', hash)
            }
        },
        role: DataTypes.STRING,
        fullname: DataTypes.STRING,
        avatar: {
            type: DataTypes.STRING
        }

    });


    return User
}