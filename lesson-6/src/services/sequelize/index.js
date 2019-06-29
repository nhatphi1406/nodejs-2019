import Sequelize from 'sequelize'
import { mysql } from './../../config'


const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
  dialect: 'mysql'
})

var userModel = sequelize['import']('../../api/user/model')
var productModel = sequelize['import']('../../api/product/model')
var supplierModel = sequelize['import']('../../api/supplier/model')

const db = {
  User: userModel,
  Product: productModel,
  Supplier: supplierModel
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

db.sequelize = sequelize
db.sequelize = sequelize

module.exports = db