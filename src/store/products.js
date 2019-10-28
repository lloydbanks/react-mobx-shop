import {observable, computed, action} from 'mobx'
import 'regenerator-runtime/runtime'

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
		return new Promise(async (resolve) => {
			this.data = await this.api.all()

			resolve(true)
		})
	}

	getById(id) {
		const index = this.productsMap[id]

		return (index !== undefined) ? this.data[index] : null
	}
}