import React from 'react'
import { Navbar } from 'react-bootstrap'
import store from '@c/hocs/store'
import { Link } from 'react-router-dom'
import { routesMap } from '@/routes'

function Header(props) {
  const { cart } = props.stores

  return (
    <>
      <Navbar className="bg-light">
        <Link className="navbar-brand" to={routesMap.home}>
          React Shop
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link
              href="#"
              className="d-flex text-decoration-none"
              to={routesMap.cart}
            >
              ${cart.total}
              <i className="material-icons">shopping_cart</i>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default store(Header)
