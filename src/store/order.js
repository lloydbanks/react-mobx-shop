import {observable, computed, action} from 'mobx'
import 'regenerator-runtime/runtime'

export default class {
	constructor(rootStore) {
		this.rootStore = rootStore
	}

	@observable formData = {
		name: {
			value: '',
			label: 'Name',
			validator: val => /^[a-zA-Z ]{2,}$/.test(val),
			errorText: 'Only latin symbols. Min 3',
			valid: null
		},
		email: {
			value: '',
			label: 'Email',
			validator: val => /^.+@.+$/.test(val),
			errorText: 'Email should contain `@` symbol',
			valid: null
		},
		phone: {
			value: '',
			label: 'Phone',
			validator: val => /^[0-9]{7,15}$/.test(val),
			errorText: 'Only numbers. Min 7',
			valid: null
		},
	}

	@observable userCache = {}

	@computed get disabled() {
		return Object.values(this.formData).every(input => input.valid)
	}


	@computed get data() {
		const obj = {}
		for(let name in this.formData) {
			obj[name] = this.formData[name].value
		}

		return obj
	}

	@action change(key, value) {
		const field = this.formData[key]
		field.value = value
		field.valid = field.validator(field.value)
	}

	@action clear() {
		for(let key in this.formData) {
			this.formData[key].value = ''
			this.formData[key].valid = null
		}
	}

	@action send() {
		// api order create
		return new Promise(async (resolve) => {
			const cart = this.rootStore.cart
			this.userCache.total = cart.total

			for(let key in this.formData) {
				this.userCache[key] = this.formData[key].value

				this.formData[key].value = ''
				this.formData[key].valid = null
			}
			
			await cart.clear()
			resolve()
		})
	}
}