import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '@c/sidebar'
import Header from '@c/header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {routes} from '@/routes'
import store from '@c/hocs/store'

class App extends React.Component {
	render() {
		const Routes = routes.map(route => {
			const {path, component, exact} = route

			return <Route path={path} component={component} exact={exact} key={path} />
		})

		return (
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
		)
	}
}

export default store(App)