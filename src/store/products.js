import {observable, computed, action} from 'mobx'

export default class {
	constructor(rootStore) {
		this.api = rootStore.api.products
		this.rootStore = rootStore
	}

	@observable data = []

	@computed get productsMap() {
		const obj = {}

		this.data.forEach((product, index) => {
			obj[product.id] = index
		})

		return obj
	}

	@action load() {
		return new Promise((resolve, reject) => {
			this.api.all().then(products => {
				this.data = products
				
				resolve(true)
			})	
		})
	}

	getById(id) {
		const index = this.productsMap[id]

		return (index !== undefined) ? this.data[index] : null
	}
}