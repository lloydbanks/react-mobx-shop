import {observable, computed, action, runInAction} from 'mobx'

export default class {
	constructor(rootStore) {
		this.rootStore = rootStore
		this.api = rootStore.api.cart
	}

	@observable products = []
	@observable processId = {}

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
			runInAction(() => this.products = data)
		})
	}

	@action add(id) {
		if(!this.contains(id) && !this.processId.hasOwnProperty(id)) {
			this.processId[id] = true

			this.api.add(id).then(() => {
				runInAction(() => {
					this.products.push({id, count: 1})
					delete this.processId[id]
				})
			})
		}
	}

	@action remove(id) {
		if(this.contains(id) && !this.processId.hasOwnProperty(id)) {
			const index = this.products.findIndex(product => product.id === id)

			if(index !== -1) {
				this.processId[id] = true

				this.api.remove(id).then(() => {
					runInAction(() => {
						this.products.splice(index, 1)
						delete this.processId[id]
					})
				})
			}
		}
	}

	@action clear() {
		const ids = this.products.map(product => product.id).toString()

		return new Promise(resolve => {
			this.api.remove(ids).then(() => {
				runInAction(() => {
					this.products = []
					resolve()
				})
			})
		})
	}

	@action change(id, count) {
		if(!this.processId.hasOwnProperty(id)) {
			const index = this.products.findIndex(product => product.id === id)

			if(index !== -1) {
				this.processId[id] = true

				this.api.change(id, count).then(() => {
					runInAction(() => {
						delete this.processId[id]
						this.products[index].count = count
					})
				})
			}
		}
	}
}