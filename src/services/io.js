import { Server } from 'socket.io'

let io
export const connectIO = (server) => {
  io = new Server(server)

  io.on('connection', socket => {

  })
}

export const broadcast = (event, data) => {
  io.emit(event, data)
}