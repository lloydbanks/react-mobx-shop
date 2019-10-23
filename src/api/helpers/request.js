/*
* Full fake REST API
* Install JSON Server: npm install -g json-server
* Start JSON Server: json-server --watch db.json
* https://github.com/typicode/json-server
*/

const dbUrl = 'http://localhost:3000/'

export default function(url, options, baseUrl = dbUrl) {
	return fetch(baseUrl + url, options).then(response => {
		if(!response.ok) {
			return response.text().then(text => {
				throw new Error(text)
			})
		}

		return response.json()
	})
}