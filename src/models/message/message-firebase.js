import DB from '../../containers/firebase.js'

export default class MessageFirebase extends DB {
  constructor() {
    super('messages')
  }
}