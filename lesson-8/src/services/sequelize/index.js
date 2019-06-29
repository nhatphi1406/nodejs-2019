import Sequelize from 'sequelize'
import { mysql } from '../../config'
// import UserModel from '../../api/user/model'

var sequelize = new Sequelize(
  mysql.database,
  mysql.username,
  mysql.password,
  mysql
)

// const db = {
//   User: UserModel.init(sequelize, Sequelize)
// }
// // Object.values(models)
// //   .filter(model => typeof model.associate === 'function')
// //   .forEach(model => model.associate(models))


// sequelize.sync().then((err) => {
//   if (err) console.error('An error occured %j', err);
//   else console.info('Database synchronized');
// });

// export default db
const db        = {};

var model = sequelize['import']('../../api/user/model');
db[model.name] = model;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;