import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'

import DemoInputs from './components/Inputs/demo'
import Cart from './components/Cart'
import Order from './components/Order'
import Result from './components/Result'

export default class extends React.Component {
	state = {
		products: getProducts(),
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

	handleChange = (i, value) => {
		const products = [...this.state.products]
		products[i] = {...products[i], count: value}
		this.setState({products})
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
				page = <Cart 
					products={this.state.products}
					onSend={this.moveToOrder}
					onChange={(i, value) => this.handleChange(i, value)}
					onRemove={(id) => this.handleRemove(id)}
					/>
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

function getProducts() {
	return [
		{
			id: 100,
			title: 'iPhone 10',
			price: 60000,
			rest: 10,
			count: 1
		},
		{
			id: 101,
			title: 'Samsung 10',
			price: 50000,
			rest: 5,
			count: 1
		}
	]
}