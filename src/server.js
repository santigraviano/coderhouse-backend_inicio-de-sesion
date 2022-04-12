import http from 'http'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import flash from 'express-flash'
import store from './services/mongo.js'
import config from './config.js'
import { local as initializedPassport } from './services/passport.js'
import methodNotImplemented from './middlewares/methodNotImplemented.js'
import messageRoutes from './routes/message.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import authRoutes from './routes/auth.routes.js'
import mainRoutes from './routes/main.routes.js'

export const app = express()
export const server = http.createServer(app)

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    maxAge: config.session.maxAge,
  },
  store
}))

app.use(flash())

initializedPassport(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('src/public'))

app.use('/api/mensajes', messageRoutes)
app.use('/api/productos', productRoutes)
app.use('/api/carrito', cartRoutes)

app.use('/', authRoutes)
app.use('/', mainRoutes)

app.use(methodNotImplemented)

export default server