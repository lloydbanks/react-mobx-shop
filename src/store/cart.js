import {observable, computed, action} from 'mobx'
import products from './products'

class Cart {
	@observable products = [{id: 101, count: 3}]

	@computed get detailProducts() {
		return this.products.map((item) => {
			console.log(item)
			const product = products.getById(item.id)

			return {...product, count: item.count}
		})
	}

	@computed get total() {
		return this.detailProducts.reduce((total, product) => {
			return total + product.price * product.count
		}, 0)
	}

	@action add(id) {
		this.products.push({id, count: 1})
	}

	@action change(id, count) {
		const index = findIndex(this.products, {id})

		if(index !== -1) this.products[index].count = count
	}

	@action remove(id) {
		const index = findIndex(this.products, {id})

		if(index !== -1) this.products.splice(index, 1)
	}
}

function findIndex(arr, prop) {
	const key = Object.keys(prop)[0]
	const value = Object.values(prop)[0]

	return arr.findIndex(item => item[key] === value)
}

export default new Cart