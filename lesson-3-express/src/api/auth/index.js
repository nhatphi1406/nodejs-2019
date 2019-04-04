import { Router } from 'express'
import { sign } from '../../services/jwt'
import { passportAuth } from '../../services/passport'
import { stringify } from 'querystring';

const router = new Router()

router.get('/', (req, res) => res.send('GET LIST USER'))
router.post('/login', passportAuth() ,(req, res) => {
    const user = req.user
    console.log(stringify(user) + "hjhh")
    sign(user.id).then(token => {
        res.status(200).json(token)
    }).catch(err => {
        res.status(401).json(err)
    })
})


export default router