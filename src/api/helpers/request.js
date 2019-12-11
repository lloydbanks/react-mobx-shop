/*
 * Full fake REST API
 * Start JSON Server: npm run server
 * https://github.com/typicode/json-server
 */

import 'regenerator-runtime/runtime'
import axios from 'axios'

const dbUrl = 'http://localhost:3000/'

export default async function(url, options, baseUrl = dbUrl) {
  const response = await axios({ ...options, url: baseUrl + url })

  return response.data
}
