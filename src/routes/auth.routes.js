import { Router } from 'express'
import passport from 'passport'
import controller from '../controllers/auth.controller.js'
import guestMiddleware from '../middlewares/guest.js'
import authMiddleware from '../middlewares/auth.js'

const router = new Router()

router.get('/signup', guestMiddleware, controller.signupForm)
router.post('/signup', passport.authenticate('signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true
}))
router.get('/login', guestMiddleware, controller.loginForm)
router.post('/login', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))
router.post('/logout', authMiddleware, controller.logout)

export default router