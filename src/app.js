import React from 'react'
import BadInput from './bad-input'
import Lazy from './lazy'
import MinMax from './input'

export default class extends React.Component {
	state = {
		products: [
			{
				id: 100,
				title: 'iPhone 10',
				price: '60000',
				rest: 10,
				count: 1
			},
			{
				id: 101,
				title: 'Samsung 10',
				price: '50000',
				rest: 5,
				count: 1
			}
		]
	}

	handleChange = (i, value) => {
		const newProducts = [...this.state.products]
		const newProduct = {...newProducts[i]}
		newProduct.count = value
		newProducts[i] = newProduct
		this.setState({products: newProducts})
	}

	render() {
		const products = this.state.products.map((product, i) => {
			return (
				<tr key={product.id}>
					<td>{product.title}</td>
					<td>{product.price}</td>
					<td><MinMax min={1} max={product.rest} count={product.count} onChange={(value) => this.handleChange(i, value)} /></td>
					<td>{product.price * product.count}</td>
				</tr>
			)
		})
		return (
			<div>
				<h2>Input counter</h2>
				<p><i><b>Issue</b>: input can't be changed using React's `onChange` event</i></p>
				<BadInput min={10} max={20} />

				<h2>Input lazy counter</h2>
				<p><i><b>Solution:</b> use staging value and change it `onBlur`</i></p>
				<Lazy min={10} max={20} />

				<h2>Cart</h2>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Price</th>
							<th>Rest</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{products}
					</tbody>
				</table>
			</div>
		)
	}
}