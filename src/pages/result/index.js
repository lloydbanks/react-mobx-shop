import React from 'react'
import cartModel from '@s/cart'
import orderModel from '@s/order'
import {urlBuilder} from '@/routes'
import {Link} from 'react-router-dom'

export default class extends React.Component {
	render() {
		return (
			<div>
				<h2>Success</h2>
				<p>Thank you, {orderModel.data.name} for your order!</p>
				<p>Your total price: {cartModel.total}</p>
			</div>
		)
	}
}