import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {routesMap} from '@/routes'
import {Link} from 'react-router-dom'
import store from '@c/hocs/store'

class Order extends React.Component {
	state = {
		showModal: false
	}

	show = (status) => {
		this.setState({showModal: status})
	}

	confirm = () => {
		this.props.stores.order.send().then(() => {
			this.show(false)
			this.props.history.push(routesMap.success)	
		})
	}

	render() {
		const {order, cart} = this.props.stores
		const cartEmpty = cart.total === 0

		const formFields = []
		for (const name in order.formData) {
			const field = order.formData[name]
			formFields.push(
				<Form.Group key={name}>
					<Form.Label>{field.label}</Form.Label>
					<Form.Control
						type="text"
						value={field.value}
						onChange={(e) => order.change(name, e.target.value)}
						disabled={cartEmpty}
						/>
					{field.valid === false && <Form.Text>{field.errorText}</Form.Text>}
				</Form.Group>
			)
		}

		return (
			<div>
				<h2>Order</h2>
				{cartEmpty && <p className="text-danger">Your cart is empty</p>}
				<Form>{formFields}</Form>
				
				<Link to={routesMap.home} className="btn btn-warning">Back</Link>
				&nbsp;
				<Button variant="primary" onClick={() => this.show(true)} disabled={!order.disabled}>Apply order</Button>

				<Modal show={this.state.showModal} backdrop="static" onHide={() => this.show(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Check info</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p><strong>Total price: ${cart.total}</strong></p>
						<p>Is everything correct?</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => this.show(false)}>Cancel</Button>
						<Button variant="primary" onClick={this.confirm}>Yes, Submit</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default store(Order)