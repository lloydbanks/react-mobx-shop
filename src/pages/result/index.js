import React from 'react'
import { urlBuilder } from '@/routes'
import { Link } from 'react-router-dom'
import store from '@c/hocs/store'

class Result extends React.Component {
  render() {
    const { total, name } = this.props.stores.order.userCache

    return (
      <div>
        <h2>Success</h2>
        <p>Thank you, {name} for your order!</p>
        <p>Your total price: ${total}</p>
      </div>
    )
  }
}

export default store(Result)
