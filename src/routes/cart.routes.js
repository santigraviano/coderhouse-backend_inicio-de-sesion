import { Router } from "express"
import controller from '../controllers/cart.controller.js'

const router = new Router()

router.post('/', controller.create)
router.delete('/:id', controller.delete)
router.get('/:id/productos', controller.show)
router.post('/:id/productos/:productId', controller.addProduct)
router.delete('/:id/productos/:productId', controller.deleteProduct)

export default router