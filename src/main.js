import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import {Provider} from 'mobx-react'
import stores from '@s'

stores.products.load().then(() => {
	ReactDom.render(<Provider stores={stores}><App/></Provider>, document.getElementById('app'))	
})