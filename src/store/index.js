import cart from './cart'
import products from './products'
import order from './order'

class RootStore {
	constructor() {
		this.cart = new cart(this)
		this.products = new products(this)
		this.order = new order(this)
	}
}

export default new RootStore()