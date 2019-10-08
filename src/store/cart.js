import {observable, computed, action} from 'mobx'

export default class {
	constructor(rootStore) {
		this.rootStore = rootStore
		this.api = rootStore.api.cart
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

	@action load() {
		this.api.load().then(data => {
			this.products = data
		})
	}

	@action add(id) {
		this.api.add(id).then(result => {
			this.products.push({id, count: 1})
		})
	}

	@action remove(id) {
		this.api.remove(id).then(result => {
			const index = this.products.findIndex(product => product.id === id)

			if(index !== -1) this.products.splice(index, 1)
		})
	}

	@action change(id, count) {
		const index = this.products.findIndex(product => product.id === id)

		if(index !== -1) this.products[index].count = count
	}
}