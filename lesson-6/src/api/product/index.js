import { Router } from 'express'
import { create, findAll , update, findById, remove} from '../product/controller'

const router = new Router()
router.get('/', findAll)
router.get('/:id', findById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router