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
		return (id) => this.products.some(product => product.id === id)
	}

	@action load() {
		this.api.load().then(data => {
			runInAction(() => this.products = data)
		}).catch(err => {
			this.rootStore.notifications.add('Failed to load cart')
		})
	}

	@action add(id) {
		if(!this.contains(id) && !this.processId.hasOwnProperty(id)) {
			this.processId[id] = true

            this.api.add(id).then(() => {
                runInAction(() => {
                    this.products.push({id, count: 1})
                })
            }).catch(() => {
                this.rootStore.notifications.add('Failed to add product to cart')
            }).finally(() => {
                runInAction(() => {
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
					})
				}).catch(() => {
                    this.rootStore.notifications.add('Failed to remove product from cart')
                }).finally(() => {
                    runInAction(() => {
                        delete this.processId[id]
                    })
                })
			}
		}
	}

	@action clear() {
		const ids = this.products.map(product => product.id)

		const promises = ids.map(id => {
			return new Promise(resolve => {
				return this.api.remove(id).then(() => resolve(true))
			})
		})

		return new Promise(resolve => {
			return Promise.all(promises).then(() => {
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