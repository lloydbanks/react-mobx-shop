import React from 'react'
import DemoInputs from './components/Inputs/demo'
import Cart from './components/Cart/cart'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class extends React.Component {
	render() {
		return (
			<div className="container">
				{/*<DemoInputs />*/}
				<Cart />
			</div>
		)
	}
}