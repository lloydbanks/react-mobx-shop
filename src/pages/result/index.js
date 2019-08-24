import React from 'react'
import cartModel from '@s/cart'
import orderModel from '@s/order'

export default class extends React.Component {
	render() {
		return (
			<div>
				<h2>Success</h2>
				<p>Thank you, {orderModel.user.name} for your order!</p>
				<p>Your total price: {cartModel.total}</p>
			</div>
		)
	}
}