import db from './../../services/sequelize'

const User = db.User;

export const show = (req, res) => {
}

export const create = (req, res) => {
  const body = req.body
  User.build({
    username: body.username,
    password: body.password,
    role: body.role
  }).save().then((data) => {
    res.send(data)
  });
  // res.send(User)
}