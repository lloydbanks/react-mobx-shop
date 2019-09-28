import React from 'react'
import productsModel from '@s/products'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {urlBuilder} from '@/routes'
import styles from './index.module.css'

export default function(props) {
	const products = productsModel.products.map(product => {
		return (
			<div className={'col col-4 ' + styles.col} key={product.id}>
				<Card>
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>
							Price: {product.price}
						</Card.Text>
						<Link to={urlBuilder('product', {id: product.id})}>View</Link>
					</Card.Body>
				</Card>
			</div>
		)
	})

	return (
		<div>
			<h2>Products</h2>
			<div className="row">
				{products}
			</div>
		</div>
	)
}