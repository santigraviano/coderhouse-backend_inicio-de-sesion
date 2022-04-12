import server from './server.js'
import { connectIO } from './services/io.js'

const PORT = process.env.PORT || 8080

connectIO(server)

server.listen(PORT, () => {
  console.log(`Listening to port ${ PORT }`)
})