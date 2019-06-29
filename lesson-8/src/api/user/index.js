import { Router } from 'express'
import { master, token } from '../../services/passport'
import { create } from './controller'
const router = new Router()
router.get('/', (req, res) => res.send('GET LIST USER'))
router.get('/:id', (req, res) => res.send('GET USER DETAIL'))
router.post('/', create)
router.put('/', (req, res) => res.send('PUT USER'))
router.delete('/', (req, res) => res.send('DELTE USER'))

export default router
