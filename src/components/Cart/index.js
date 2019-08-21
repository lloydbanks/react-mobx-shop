import React from 'react'
import MinMax from '../Inputs/minmax'
import PropTypes from 'prop-types'

import { Button } from 'react-bootstrap'

export default class extends React.Component {
	static propTypes = {
		products: PropTypes.array.isRequired,
		onSend: PropTypes.func.isRequired,
		onChange: PropTypes.func.isRequired,
		onRemove: PropTypes.func.isRequired
	}

	getTotal = () => {
		return this.props.products.reduce((sum, product) => {
			return sum += product.price * product.count
		}, 0)
	}

	render() {
		const products = this.props.products.map((product, i) => {
			return (
				<tr key={product.id}>
					<td>{product.title}</td>
					<td>{product.price}</td>
					<td><MinMax min={1} max={product.rest} count={product.count} onChange={(value) => this.props.onChange(i, value)} /></td>
					<td>{product.price * product.count}</td>
					<td><button onClick={() => this.props.onRemove(product.id)}>Delete</button></td>
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
					<p>Total: {this.getTotal()}</p>
				</div>
				<Button onClick={this.props.onSend}>Next</Button>
			</div>
		)
	}
}