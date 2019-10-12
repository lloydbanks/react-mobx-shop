import React from 'react'
import {NavLink} from 'react-router-dom'
import {routesMap} from '@/routes'

export default function() {
	return (
		<>
			<h2>Sidebar</h2>
		
			<ul className="list-group">
				<li className="list-group-item">
					<NavLink to={routesMap.home} activeClassName="font-weight-bold" exact>Home</NavLink>
				</li>
				<li className="list-group-item">
					<NavLink to={routesMap.cart} activeClassName="font-weight-bold" exact>Cart</NavLink>
				</li>
				<li className="list-group-item">
					<NavLink to={routesMap.order} activeClassName="font-weight-bold" exact>Order</NavLink>
				</li>
			</ul>
		</>
	)
}