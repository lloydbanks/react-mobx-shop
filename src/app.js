import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'

import DemoInputs from '@c/inputs/demo'
import Cart from '@p/cart'
import Order from '@p/order'
import Result from '@p/result'

export default class extends React.Component {
	state = {
		formData: {
			name: {
				label: 'Name',
				value: ''
			},
			email: {
				label: 'Email',
				value: ''
			},
			phone: {
				label: 'Phone',
				value: ''
			},
		},
		activeRoute: CART
	}

	moveToCart = () => {
		this.setState({activeRoute: CART})
	}

	moveToOrder = () => {
		this.setState({activeRoute: ORDER})
	}

	moveToResult = () => {
		this.setState({activeRoute: RESULT})
	}

	handleRemove = (id) => {
		const products = this.state.products.filter(product => product.id !== id)
		this.setState({products})
	}

	handleFormData = (name, value) => {
		const formData = {...this.state.formData}
		formData[name] = {...formData[name], value}
		this.setState({formData})
	}

	render() {
		const {activeRoute, formData} = this.state
		let page

		switch(activeRoute) {
			case CART:
				page = <Cart onSend={this.moveToOrder} />
				break
			case ORDER:
				page = <Order
					onSend={this.moveToResult}
					onChange={this.handleFormData}
					onRemove={this.handleRemove}
					onBack={this.moveToCart}
					formData={formData}
				/>
				break
			case RESULT:
				page = <Result />
				break
			default:
				<div>404</div>
		}

		return (
			<div className="container">
				{page}
			</div>
		)
	}
}