import DB from '../../containers/firebase.js'

export default class UserFirebase extends DB {
  constructor() {
    super('users')
  }
}