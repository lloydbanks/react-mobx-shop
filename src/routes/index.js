import Cart from '@p/cart'
import Order from '@p/order'
import Result from '@p/result'
import Post from '@p/post'
import Error404 from '@c/errors/404'

export const routes = [
	{ name: 'home', path: '/', component: Cart, exact: true },
	{ name: 'order', path: '/order', component: Order, exact: true },
	{ name: 'success', path: '/success', component: Result, exact: true },
	{ name: 'news', path: '/news/:id', component: Post, exact: true },
	{ name: '404', path: '**', component: Error404, exact: true }
]

export const routesMap = {}

routes.forEach(route => {
	if(route.hasOwnProperty('name')) {
		routesMap[route.name] = route.path	
	}
})

export const urlBuilder = (name, params) => {
	if(!routesMap.hasOwnProperty(name)) return null

	let url = routesMap[name]

	for(let key in params) {
		url = url.replace(':' + key, params[key])
	}

	return url
}