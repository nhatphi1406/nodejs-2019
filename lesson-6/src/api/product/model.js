'use strict'

module.exports = (sequelize, Datatypes) => {
    var Product = sequelize.define('Product', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false  
        },
        quantity: Datatypes.INTEGER,
        cover: Datatypes.STRING,
        price: Datatypes.FLOAT,
        category: Datatypes.STRING

    })

    Product.associate = function (models) {
        models.Product.belongsTo(models.User, {
            as: 'createdBy'
        });
    };
    
    return Product
}