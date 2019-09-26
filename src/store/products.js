import {observable, computed, action} from 'mobx'

class Products {
	@observable products = getProducts()

	@computed get productsMap() {
		const map = {}	

		this.products.forEach((product, index) => {
			map[product.id] = index
		})

		return map
	}

	getById(id) {
		const index = this.productsMap[id]

		if(index === undefined) return null

		return this.products[index]
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