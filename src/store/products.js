import {observable, computed, action} from 'mobx'

class Products {
	@observable products = getProducts()

	@computed get productsMap() {
		const obj = {}

		this.products.forEach((product, index) => {
			obj[product.id] = index
		})

		return obj
	}

	getById(id) {
		const index = this.productsMap[id]

		return (index !== undefined) ? this.products[index] : null
	}
}

// server api
function getProducts() {
	return [
		{
			id: 100,
			title: 'iPhone 10',
			price: 60000,
			rest: 10
		},
		{
			id: 101,
			title: 'Samsung 10',
			price: 50000,
			rest: 5
		}
	]
}

export default new Products