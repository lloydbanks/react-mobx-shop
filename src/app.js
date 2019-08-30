import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'
import {observer} from 'mobx-react'
import {BrowserRouter, Route} from 'react-router-dom'
import {routes} from '@/routes'

export default @observer class extends React.Component {
	render() {
		const Routes = routes.map(route => {
			const {path, component, exact} = route

			return <Route path={path} component={component} exact={exact} key={path} />
		})
		return (
			<BrowserRouter>
				<div className="container">
					{Routes}
				</div>
			</BrowserRouter>
		)
	}
}