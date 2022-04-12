import DB from '../../containers/file.js'

export default class UserFile extends DB {
  constructor() {
    super('users')
  }
}