import React from 'react'
import MinMax from '@c/inputs/minmax'
import PropTypes from 'prop-types'
import cartModel from '@s/cart.js'

import { Button } from 'react-bootstrap'

export default class extends React.Component {
	static propTypes = {
		onSend: PropTypes.func.isRequired,
	}

	render() {
		const products = cartModel.products.map((product, i) => {
			return (
				<tr key={product.id}>
					<td>{product.title}</td>
					<td>{product.price}</td>
					<td><MinMax min={1} max={product.rest} count={product.count} onChange={(value) => cartModel.change(i, value)} /></td>
					<td>{product.price * product.count}</td>
					<td><button onClick={() => cartModel.remove(product.id)}>Delete</button></td>
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
				<Button onClick={this.props.onSend}>Next</Button>
			</div>
		)
	}
}