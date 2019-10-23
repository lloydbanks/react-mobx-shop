import request from './helpers/request'

function all() {
	return request('products').catch(e => console.log('Server error:', e))
}

export {all}