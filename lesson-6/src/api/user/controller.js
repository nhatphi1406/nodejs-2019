import db from '../../services/sequelize'
const User = db.User

export const create = (req, res, next) => {
    const body = req.body
    const file = req.file
    console.log(file)
    User.create(body).then((data)=> {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

