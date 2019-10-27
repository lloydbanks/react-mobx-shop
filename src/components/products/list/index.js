import React from 'react'
import {Button, Card} from 'react-bootstrap'
import styles from './index.module.css'
import {Link} from 'react-router-dom'
import store from '@c/hocs/store'

function ProductList(props) {
    const {products, cart, Link, urlBuilder} = props

    const productsCard = products.data.map(product => {
        let btn

        if(!cart.contains(product.id)) {
            btn = <Button variant="success" className="btn-sm ml-2" onClick={() => cart.add(product.id)}
                          disabled={product.id in cart.processId}>Add to cart</Button>
        } else {
            btn = <Button variant="danger" className="btn-sm ml-2" onClick={() => cart.remove(product.id)}
                          disabled={product.id in cart.processId}>Remove from cart</Button>
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
                {productsCard}
            </div>
        </div>
    )
}

export default store(ProductList)