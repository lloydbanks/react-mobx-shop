import request from './helpers/request'

function all() {
  return request('products').catch(e => console.error('Products', e))
}

export { all }
