import Cart from '@p/cart'
import Order from '@p/order'
import Result from '@p/result'
import Error404 from '@c/errors/404'

export const routes = [
	{ name: 'home', path: '/', component: Cart, exact: true },
	{ name: 'order', path: '/order', component: Order, exact: true },
	{ name: 'success', path: '/success', component: Result, exact: true },
	{ name: '404', path: '**', component: Error404, exact: true }
]

export const routesMap = {}

routes.forEach(route => {
	if(route.hasOwnProperty('name')) {
		routesMap[route.name] = route.path	
	}
})