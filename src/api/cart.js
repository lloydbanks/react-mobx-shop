import request from './helpers/request'

function load() {
  return request('cart')
}

function add(id) {
  return request('cart', {
    type: 'add',
    data: { id, count: 1 }
  })
}

function remove(id) {
  return request('cart', {
    type: 'remove',
    data: { id }
  })
}

function change(id, count) {
  return request('cart', {
    type: 'change',
    data: { id, count }
  })
}

export { load, add, remove, change }
