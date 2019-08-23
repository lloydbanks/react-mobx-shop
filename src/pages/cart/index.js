import React from 'react'
import {CART, ORDER, RESULT} from '@/consts'
import MinMax from '@c/inputs/minmax'
import PropTypes from 'prop-types'
import cartModel from '@s/cart'
import router from '@s/router'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react'

export default @observer class extends React.Component {
	render() {
		const products = cartModel.products.map((product, i) => {
			return (
				<tr key={product.id}>
					<td>{product.title}</td>
					<td>{product.price}</td>
					<td><MinMax min={1} max={product.rest} count={product.count} onChange={(value) => cartModel.change(i, value)} /></td>
					<td>{product.price * product.count}</td>
					<td><button onClick={() => cartModel.remove(i)}>Delete</button></td>
				</tr>
			)
		})

		return (
			<div>
				<h2>Cart</h2>
				<div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Title</th>
								<th>Price</th>
								<th>Rest</th>
								<th>Total</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{products}
						</tbody>
					</table>
					<p>Total: {cartModel.total}</p>
				</div>
				<Button onClick={() => router.moveTo(ORDER)}>Next</Button>
			</div>
		)
	}
}