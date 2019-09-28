import React from 'react'
import productsModel from '@s/products'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'

export default function(props) {
	const {id} = props.match.params
	const product = productsModel.getById(id)

	return (
		<div>
			<h2>{product.title}</h2>
			<p>Price: {product.price}</p>
			<Link to={routesMap.home} className="btn btn-warning">Back</Link>
		</div>
	)
}