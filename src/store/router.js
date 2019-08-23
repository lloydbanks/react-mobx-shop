import React from 'react'
import {CART, ORDER, RESULT} from '@/consts'
import Cart from '@p/cart'
import Order from '@p/order'
import Result from '@p/result'
import {observable, computed, action} from 'mobx'

class Router {
	routes = {
		[CART]: () => <Cart />,
		[ORDER]: () => <Order />,
		[RESULT]: () => <Result />
	}

	@observable active = CART

	@computed get component() {
		return this.routes[this.active]()
	}

	@action moveTo(route) {
		console.log(route)
		this.active = route
	}
}

export default new Router