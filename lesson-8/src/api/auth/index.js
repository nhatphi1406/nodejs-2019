import { Router } from 'express'
import { sign } from './../../services/jwt'
import { password } from '../../services/passport'
const router = new Router()

router.post('/login', password() ,(req, res, next) => {
    const user = req.user
    sign(user.id).then(token => {
        res.status(200).json(token)
    }).catch(err => {
        res.status(401).json(err)
    })
})

export default router