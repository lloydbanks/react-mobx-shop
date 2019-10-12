import request from './helpers/request'

function all() {
	return request('products')
}

export {all}