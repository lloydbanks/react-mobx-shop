import request from './helpers/request'

function load() {
	return request('cart')
}

function add(id) {
	return request('cart', {
		method: 'POST', 
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({id, count: 1})
	})
}

function remove(id) {
	return request('cart/' + id, {
		method: 'DELETE'
	})
}

export {load, add, remove}