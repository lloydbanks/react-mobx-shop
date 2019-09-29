import React from 'react'
import E404 from '@c/errors/404'
import {Link} from 'react-router-dom'
import {routesMap} from '@/routes'
import {inject} from 'mobx-react'
import ProductItem from '@c/products/item'

export default inject('stores') (function(props) {
	const {id} = props.match.params
	const {products} = props.stores
	const product = products.getById(id)

	if(product === null) {
		return <E404 />
	} else {
		return <ProductItem 
			title={product.title}
			price={product.price}
			backUrl={routesMap.home}
			Link={Link}
		/>
	}
})