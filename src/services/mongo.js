import MongoStore from 'connect-mongo'
import config from '../config.js'

const { protocol, user, pass, host, database, params } = config.mongo
const mongoUrl = `${protocol}://${user}:${pass}@${host}/${database}?${params}`

const store = new MongoStore({
  mongoUrl
})

export default store