import {observable, computed, action} from 'mobx'

class Cart {
	@observable products = getProducts()

	@computed get total() {
		return this.products.reduce((total, product) => {
			return total + product.price * product.count
		}, 0)
	}

	@computed get changeCount() {
		return this.products.map((product, i) => {
			return (count) => this.products[i].count = count
		})
	}

	@action remove(i) {
		this.products.splice(i, 1)
	}
}

// server api
function getProducts() {
	return [
		{
			id: 100,
			title: 'iPhone 10',
			price: 60000,
			rest: 10,
			count: 1
		},
		{
			id: 101,
			title: 'Samsung 10',
			price: 50000,
			rest: 5,
			count: 1
		}
	]
}

export default new Cart