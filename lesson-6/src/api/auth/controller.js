import { sign } from './../../services/jwt'

export const login = (req, res, next) => {
    const user = req.user
    sign(user.id).then(token => {
        res.status(200).json(token)
    }).catch(err => {
        res.status(401).json(err)
    })
}