import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import PropTypes from 'prop-types'
import orderModel from '@s/order'
import {CART, RESULT} from '@/consts'
import {observer} from 'mobx-react'
import cartModel from '@s/cart'
import {routesMap} from '@/routes'
import {Link} from 'react-router-dom'

export default @observer class extends React.Component {
	state = {
		showModal: false
	}

	show = (status) => {
		this.setState({showModal: status})
	}

	confirm = () => {
		this.show(false)
		this.props.history.push(routesMap.success)
	}

	render() {
		const formFields = []
		for (const name in orderModel.formData) {
			const field = orderModel.formData[name]
			formFields.push(
				<Form.Group key={name}>
					<Form.Label>{field.label}</Form.Label>
					<Form.Control
						type="text"
						value={field.value}
						onChange={(e) => orderModel.change(name, e.target.value)}
						/>
					{field.valid === false && <Form.Text>{field.errorText}</Form.Text>}
				</Form.Group>
			)
		}

		return (
			<div>
				<h2>Order</h2>
				<Form>{formFields}</Form>
				
				<Link to={routesMap.home} className="btn btn-warning">Back to cart</Link>
				&nbsp;
				<Button variant="primary" onClick={() => this.show(true)} disabled={!orderModel.disabled}>Apply order</Button>

				<Modal show={this.state.showModal} backdrop="static" onHide={() => this.show(false)}>
					<Modal.Header closeButton>
						<Modal.Title>Check info</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p><strong>Total price: {cartModel.total}</strong></p>
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