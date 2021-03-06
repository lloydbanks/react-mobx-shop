import { configure } from 'mobx'
import cartStore from './cart'
import productsStore from './products'
import * as products from '@/api/products'
import * as cart from '@/api/cart'
import order from './order'
import notifications from './notifications'

configure({ enforceActions: 'observed' })

class RootStore {
  constructor() {
    this.api = { products, cart }
    this.cart = new cartStore(this)
    this.products = new productsStore(this)
    this.order = new order(this)
    this.notifications = new notifications(this)
  }
}

export default new RootStore()
