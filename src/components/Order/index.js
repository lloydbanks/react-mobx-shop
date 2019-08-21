import React from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class extends React.Component {
	static propTypes = {
		formData: PropTypes.object.isRequired,
		onSend: PropTypes.func.isRequired,
		onChange: PropTypes.func.isRequired,
		onBack: PropTypes.func.isRequired
	}

	state = {
		showModal: false
	}

	showModal = (status = true) => {
		this.setState({showModal: status})
	}

	confirm = () => {
		this.showModal(false)
		this.props.onSend()
	}

	render() {
		const {formData, onBack, onChange, onSend} = this.props
		const formFields = []

		for(let name in formData) {
			const field = formData[name]
			formFields.push(
				<Form.Group key={name}>
				    <Form.Label>{field.label}</Form.Label>
				    <Form.Control 
				    	value={field.value}
				    	onChange={(e) => onChange(name, e.target.value)}
				    	type="text" placeholder={`Enter your ${name}`} />
				</Form.Group>
			)
		}

		return (
			<div>
				<h2>Order</h2>
				<Form>
				  {formFields}

				  <Button variant="warning" onClick={onBack} className="mr-10">Back to cart</Button>
				  &nbsp;
				  <Button variant="primary" onClick={this.showModal}>Apply order</Button>

				  <Modal show={this.state.showModal} backdrop="static">
			        <Modal.Header closeButton>
			          <Modal.Title>Check info</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	Everything is correct?
			        </Modal.Body>
			        <Modal.Footer>
			          <Button variant="secondary" onClick={() => this.showModal(false)}>
			            Cancel
			          </Button>
			          <Button variant="primary" onClick={() => this.confirm()}>
			            Yes, submit
			          </Button>
			        </Modal.Footer>
			      </Modal>
				</Form>
			</div>
		)
	}
}