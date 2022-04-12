import DB from '../../containers/mongodb.js'

export default class MessageMongo extends DB {
  constructor() {
    super('messages', {
      author: String,
      text: String,
      timestamp: { type: Number, default: Date.now() }
    })
  }
}