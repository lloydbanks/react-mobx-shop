import React from 'react'
import { Link } from 'react-router-dom'
import { urlBuilder } from '@/routes'
import store from '@c/hocs/store'
import ProductsList from '@c/products/list'
import ErrorServer from '@p/errorServer'

class Products extends React.Component {
  render() {
    const { stores } = this.props

    return stores.products.data ? (
      <ProductsList
        products={stores.products}
        cart={stores.cart}
        Link={Link}
        urlBuilder={urlBuilder}
      />
    ) : (
      <ErrorServer />
    )
  }
}

export default store(Products)
