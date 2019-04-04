import { Router } from 'express'
import user from '../api/user'
import auth from '../api/auth'

const router = new Router()
router.use('/users', user)
router.use('/auth',auth)


export default router