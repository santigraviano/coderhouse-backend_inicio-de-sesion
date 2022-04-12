import DB from '../../containers/file.js'

export default class MessageFile extends DB {
  constructor() {
    super('messages')
  }
}