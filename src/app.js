import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '@c/sidebar'
import Header from '@c/header'
import {observer, Provider} from 'mobx-react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {routes} from '@/routes'
import stores from '@s'

export default @observer class extends React.Component {
	render() {
		const Routes = routes.map(route => {
			const {path, component, exact} = route

			return <Route path={path} component={component} exact={exact} key={path} />
		})
		return (
			<Provider stores={stores}>
				<BrowserRouter>
					<div className="container">
						<div className="row">
							<div className="col">
								<Header />
							</div>
						</div>
						<div className="row">
							<div className="col col-3">
								<Sidebar />
							</div>
							<div className="col col-9">
								<Switch>
									{Routes}
								</Switch>
							</div>
						</div>
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}