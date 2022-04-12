import { createClient } from 'redis'
import connect from 'connect-redis'
import session from 'express-session'

const client = createClient({
  url: `redis://default@redis`,
  legacyMode: true
})

try {
  await client.connect()
  console.log('Redis client connected')
}
catch (err) {
  console.error(err)
}

const RedisStore = connect(session)

const store = new RedisStore({
  client
})

export default store