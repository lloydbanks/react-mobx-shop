import {observable, computed, action} from 'mobx'

class Products {
	@observable products = getProducts()
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

export default new Products