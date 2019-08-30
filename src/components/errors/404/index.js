import React from 'react'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'

export default function() {
	return (
		<>
			<h1>Error 404</h1>
			<div className="alert alert-warning">
				<Link to={routesMap.home}>Go to home page</Link>
			</div>
		</>
	)
}