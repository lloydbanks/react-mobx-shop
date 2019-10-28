import {observable, computed, action, runInAction} from 'mobx'
import 'regenerator-runtime/runtime'

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

	@action async load() {
	    try {
            const data = await this.api.load()
            runInAction(() => this.products = data)
        } catch {
            this.rootStore.notifications.add('Failed to load cart')
        }
	}

	@action async add(id) {
		if(!this.contains(id) && !this.processId.hasOwnProperty(id)) {
			this.processId[id] = true

			try {
				await this.api.add(id)
				runInAction(() => this.products.push({id, count: 1}))
			} catch {
				this.rootStore.notifications.add('Failed to add product to cart')
			} finally {
				runInAction(() => delete this.processId[id])
			}
		}
	}

	@action async remove(id) {
		if(this.contains(id) && !this.processId.hasOwnProperty(id)) {
			const index = this.products.findIndex(product => product.id === id)

			if(index !== -1) {
				this.processId[id] = true

				try {
					await this.api.remove(id)
					runInAction(() => this.products.splice(index, 1))
				} catch {
					this.rootStore.notifications.add('Failed to remove product from cart')
				} finally {
					runInAction(() => delete this.processId[id])
				}
			}
		}
	}

	@action async clear() {
		const ids = this.products.map(product => product.id)
		const promises = ids.map((id) => this.api.remove(id))
		await Promise.all(promises)

		runInAction(() => this.products = [])
	}

	@action async change(id, count) {
		if(!this.processId.hasOwnProperty(id)) {
			const index = this.products.findIndex(product => product.id === id)

			if(index !== -1) {
				this.processId[id] = true

				await this.api.change(id, count)
				runInAction(() => {
					delete this.processId[id]
					this.products[index].count = count
				})
			}
		}
	}
}