import Cart from '@p/cart'
import Order from '@p/order'
import Result from '@p/result'

const routes = [
	{ path: '/', component: Cart, exact: true },
	{ path: '/order', component: Order, exact: true },
	{ path: '/success', component: Result, exact: true }
]

export default routes