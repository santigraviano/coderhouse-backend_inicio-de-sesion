import DB from '../../containers/sql.js'

export default class UserSQL extends DB {
  constructor() {
    super('users')
  }
}