import React from 'react'
import LinkButton from '@c/hocs/link'
import {Button} from 'react-bootstrap'
import {routesMap} from '@/routes'
import E404 from '@p/error404'
import store from '@c/hocs/store'

function Product(props) {
	const {id} = props.match.params
	const {products, cart} = props.stores
	const product = products.getById(id)

	if(product) {
		return (
			<div>
				<h2>{product.title}</h2>
				<p>Price: {product.price}</p>
				<LinkButton to={routesMap.home} className="btn btn-warning">Back</LinkButton>
				{!cart.contains(product.id) ?
					<Button onClick={() => cart.add(product.id)} className="ml-2">Add to cart</Button> :
					<Button onClick={() => cart.remove(product.id)} variant="danger" className="ml-2">Remove from cart</Button>
				}
			</div>
		)
	} else {
		return <E404 />
	}
}

export default store(Product)