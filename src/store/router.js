import React from 'react'
import {CART, ORDER, RESULT} from '@/consts'
import Cart from '@p/cart'
import Order from '@p/order'
import Result from '@p/result'

class Router {
	routes = {
		[CART]: () => <Cart />,
		[ORDER]: () => <Order />,
		[RESULT]: () => <Result />
	}

	active = CART

	get component() {
		return this.routes[this.active]()
	}

	moveTo(route) {
		this.active = route
	}
}

export default new Router