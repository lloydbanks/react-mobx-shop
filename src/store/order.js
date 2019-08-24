import {observable, computed, action} from 'mobx'

class Order {
	@observable formData = {
		name: {
			value: '',
			label: 'Name',
			validator: val => /^[a-zA-Z]{2,}$/.test(val),
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

	@computed get disabled() {
		return Object.values(this.formData).every(input => input.valid)
	}

	@computed get user() {
		const user = {}
		for(let key in this.formData) {
			user[key] = this.formData[key].value
		}

		return user
	}

	@action change(key, value) {
		const field = this.formData[key]
		field.value = value
		field.valid = field.validator(field.value)
	}

}

export default new Order