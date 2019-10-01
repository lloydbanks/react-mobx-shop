import React from 'react'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'
import E404 from '@p/error404'
import store from '@c/hocs/store'

function Product(props) {
	const {id} = props.match.params
	const {products} = props.stores
	const product = products.getById(id)

	if(product) {
		return (
			<div>
				<h2>{product.title}</h2>
				<p>Price: {product.price}</p>
				<Link to={routesMap.home} className="btn btn-warning">Back</Link>
			</div>
		)
	} else {
		return <E404 />
	}
}

export default store(Product)