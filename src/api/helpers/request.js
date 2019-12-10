/*
 * Full fake REST API
 * Install JSON Server: npm install -g json-server
 * Start JSON Server: json-server --watch db.json
 * https://github.com/typicode/json-server
 */

import 'regenerator-runtime/runtime'
import axios from 'axios'

const dbUrl = 'http://localhost:3000/'

export default async function(url, options, baseUrl = dbUrl) {
  const response = await axios({ ...options, url: baseUrl + url })

  return response.data
}
