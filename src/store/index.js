import cart from './cart'
import productsStore from './products'
import * as products from '@/api/products'
import order from './order'

class RootStore {
	constructor() {
		this.api = {products}
		this.cart = new cart(this)
		this.products = new productsStore(this)
		this.order = new order(this)
	}
}

export default new RootStore()