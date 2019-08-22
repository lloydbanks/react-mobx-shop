import React from 'react'
import cartModel from '@s/cart'

export default class extends React.Component {
	render() {
		return (
			<div>
				<h2>Success</h2>
				<p>Thank you for your order!</p>
				<p>Your total price: {cartModel.total}</p>
			</div>
		)
	}
}