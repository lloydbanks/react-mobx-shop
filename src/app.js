import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from '@s/router'
import { Button } from 'react-bootstrap'

export default class extends React.Component {
	render() {
		return (
			<div className="container">
				{router.component}
				<br/>
				<Button onClick={() => this.forceUpdate()} variant="danger">Force Update</Button>
			</div>
		)
	}
}