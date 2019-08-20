import React from 'react'
import BadInput from './bad-input'
import Lazy from './lazy'
import MinMax from './input'
import LazyMinMax from './lazy-minmax'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

export default class extends React.Component {
	state = {
		products: getProducts(),
		total: 0,
		submit: false,
		lazyValue: 'default value',
		lazyValue2: 'default value'
	}

	handleChange = (i, value) => {
		const products = [...this.state.products]
		products[i] = {...products[i], count: value}
		this.setState({products})
	}

	getTotal = () => {
		return this.state.products.reduce((sum, product) => {
			return sum += product.price * product.count
		}, 0)
	}

	removeProduct = (id) => {
		const products = this.state.products.filter(product => product.id !== id)
		this.setState({products})
	}

	submit = () => {
		this.setState({submit: !this.state.submit})
	}

	lazyHandler = (lazyObj) => {
		this.setState(lazyObj)
	}

	render() {
		const products = this.state.products.map((product, i) => {
			return (
				<tr key={product.id}>
					<td>{product.title}</td>
					<td>{product.price}</td>
					<td><MinMax min={1} max={product.rest} count={product.count} onChange={(value) => this.handleChange(i, value)} /></td>
					<td>{product.price * product.count}</td>
					<td><button onClick={() => this.removeProduct(product.id)}>Delete</button></td>
				</tr>
			)
		})

		const cart = (
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
				<p>{this.getTotal()}</p>
			</div>
		)

		const success = <div>Success</div>
		const changeBtn = <button onClick={() => this.handleChange(0, 4)}>Change product</button>

		return (
			<div className="container">
				<h2>Input counter</h2>
				<p><i><b>Issue</b>: input can't be changed using React's `onChange` event</i></p>
				<BadInput min={10} max={20} />

				<h2>Input lazy counter</h2>
				<p><i><b>Solution:</b> use staging value and change it `onBlur`</i></p>
				<Lazy min={10} max={20} />

				<h2>Cart</h2>
				{!this.state.submit ? cart : success}
				<button onClick={this.submit}>{!this.state.submit ? 'Save' : 'Back'}</button>
				{!this.state.submit ? changeBtn : null}		

				<h2>Lazy MinMax</h2>
				<LazyMinMax 
					value={this.state.lazyValue}
					onChange={(e) => this.lazyHandler({lazyValue: e.target.value})}
					nativeProps={{type: 'text'}}
					/>
				<div>{this.state.lazyValue}</div>
				<div><Button variant="primary" onClick={(e) => this.setState({lazyValue: 'test'})}>Change value</Button></div>

				<h2>Lazy MinMax no lazy</h2>
				<LazyMinMax 
					value={this.state.lazyValue2}
					nativeProps={{type: 'text', onChange: (e) => this.lazyHandler({lazyValue2: e.target.value})}}
				/>
				<div>{this.state.lazyValue2}</div>
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