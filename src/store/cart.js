class Cart {
	products = getProducts()

	get total() {
		return this.products.reduce((total, product) => {
			return total + product.price * product.count
		}, 0)
	}

	change(i, cnt) {
		this.products[i].count = cnt
	}

	remove() {
		this.products[i].splice(i, 1)
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