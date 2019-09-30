import {observable, computed, action} from 'mobx'

export default class {
	constructor(rootStore) {
		this.rootStore = rootStore
	}

	@observable products = []

	@computed get detailProducts() {
		return this.products.map(product => {
			const productById = this.rootStore.products.getById(product.id)

			return {...productById, count: product.count}
		})
	}

	@computed get total() {
		return this.detailProducts.reduce((total, product) => {
			return total + product.price * product.count
		}, 0)
	}

	@computed get contains() {
		return (id) => {
			return this.products.some(product => product.id === id)
		}
	}

	@action add(id) {
		this.products.push({id, count: 1})
	}

	@action change(id, count) {
		const index = this.products.findIndex(product => product.id === id)

		if(index !== -1) this.products[index].count = count
	}

	@action remove(id) {
		const index = this.products.findIndex(product => product.id === id)

		if(index !== -1) this.products.splice(index, 1)
	}
}