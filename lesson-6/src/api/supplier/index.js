import { Router } from 'express'

const router = new Router()
router.get('/', (req, res) => res.send('GET LIST SUPPLIER'))
router.get('/:id', (req, res) => res.send('GET SUPPLIER DETAIL'))
router.post('/',  (req, res) => res.send('GET SUPPLIER DETAIL'))
router.put('/', (req, res) => res.send('PUT SUPPLIER'))
router.delete('/', (req, res) => res.send('DELTE SUPPLIER'))

export default router
