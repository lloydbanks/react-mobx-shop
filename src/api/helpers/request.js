/*
* Full fake REST API
* Install JSON Server: npm install -g json-server
* Start JSON Server: json-server --watch db.json
* https://github.com/typicode/json-server
*/

import axios from 'axios'

const dbUrl = 'http://localhost:3000/'

export default function(url, options, baseUrl = dbUrl) {
	return axios({...options, url: baseUrl + url})
		.then(response => response.data)
		.catch(error => {
			throw new Error(error.message)
		})
}