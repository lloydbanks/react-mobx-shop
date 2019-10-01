import React from 'react'
import {urlBuilder} from '@/routes'
import {Link} from 'react-router-dom'
import store from '@c/hocs/store'

class Result extends React.Component {
	render() {
		const {order, cart} = this.props.stores

		return (
			<div>
				<h2>Success</h2>
				<p>Thank you, {order.data.name} for your order!</p>
				<p>Your total price: {cart.total}</p>
			</div>
		)
	}
}

export default store(Result)