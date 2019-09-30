import React from 'react'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'
import {inject} from 'mobx-react'

export default inject('stores') (function(props) {
	const {id} = props.match.params
	const {products} = props.stores
	const product = products.getById(id)

	return (
		<div>
			<h2>{product.title}</h2>
			<p>Price: {product.price}</p>
			<Link to={routesMap.home} className="btn btn-warning">Back</Link>
		</div>
	)
})