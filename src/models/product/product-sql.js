import DB from '../../containers/sql.js'

export default class ProductSQL extends DB {
  constructor() {
    super('products')
  }
}