import { Router } from 'express'
import controller from '../controllers/main.controller.js'
import authMiddleware from '../middlewares/auth.js'

const router = new Router()

router.get('/', authMiddleware, controller.index)

export default router