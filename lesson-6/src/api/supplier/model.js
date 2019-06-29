module.exports = (sequelize, DataTypes) => {
    var Supplier = sequelize.define('Supplier', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        contactId: DataTypes.STRING
    });
    return Supplier
}