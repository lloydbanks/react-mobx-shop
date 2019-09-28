import React from 'react'
import productsModel from '@s/products'
import cart from '@s/cart'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {urlBuilder} from '@/routes'
import styles from './index.module.css'
import {observer} from 'mobx-react'

export default @observer class Products extends React.Component {
	render() {
		const products = productsModel.products.map(product => {
			let btn

			if(!cart.contains(product.id)) {
				btn = <Button variant="success" className="btn-sm ml-2" onClick={() => cart.add(product.id)}>
					Add to cart
				</Button>
			} else {
				btn = <Button variant="danger" className="btn-sm ml-2" onClick={() => cart.remove(product.id)}>
					Remove from cart
				</Button>
			}

			return (
				<div className={'col col-4 ' + styles.col} key={product.id}>
					<Card>
						<Card.Body>
							<Card.Title>{product.title}</Card.Title>
							<Card.Text>
								Price: {product.price}
							</Card.Text>
							<Link to={urlBuilder('product', {id: product.id})} className="btn btn-primary btn-sm">View</Link>
							{btn}
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
}