import { Router } from 'express'

import { password } from '../../services/passport'
import { login } from './controller'
const router = new Router()

router.post('/login', password(), login)

export default router