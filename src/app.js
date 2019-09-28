import React from 'react'
import {CART, ORDER, RESULT} from './consts'
import 'bootstrap/dist/css/bootstrap.min.css'
import {observer} from 'mobx-react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {routes, routesMap} from '@/routes'

export default @observer class extends React.Component {
	render() {
		const Routes = routes.map(route => {
			const {path, component, exact} = route

			return <Route path={path} component={component} exact={exact} key={path} />
		})
		return (
			<BrowserRouter>
				<div className="container">
					<div className="row">
						<div className="col col-3">
							<h2>Sidebar</h2>
							<ul className="list-group">
								<li className="list-group-item">
									<Link to={routesMap.home}>Home</Link>
								</li>
								<li className="list-group-item">
									<Link to={routesMap.cart}>Cart</Link>
								</li>
								<li className="list-group-item">
									<Link to={routesMap.order}>Order</Link>
								</li>
							</ul>
						</div>
						<div className="col col-9">
							<Switch>
								{Routes}
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}