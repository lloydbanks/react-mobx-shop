import React from 'react'
import {CART, ORDER, RESULT} from '@/consts'
import MinMax from '@c/inputs/minmax'
import PropTypes from 'prop-types'
import cart from '@s/cart'
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'

export default @observer class extends React.Component {
	render() {
		const products = cart.detailProducts.map((product, i) => {
			return (
				<tr key={product.id}>
					<td>{product.title}</td>
					<td>{product.price}</td>
					<td><MinMax min={1} max={product.rest} count={product.count} onChange={(count) => cart.change(product.id, count)} /></td>
					<td>{product.price * product.count}</td>
					<td><button onClick={() => cart.remove(product.id)}>Delete</button></td>
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
					<p>Total: {cart.total}</p>
				</div>
				{!!cart.products.length && <Link to={routesMap.order} className="btn btn-primary">Next</Link>}
			</div>
		)
	}
}