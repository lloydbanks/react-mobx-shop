import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from '@s/router'
import {observer} from 'mobx-react'

export default @observer class extends React.Component {
	render() {
		return (
			<div className="container">
				{router.component}
			</div>
		)
	}
}