import React from 'react'
import BadInput from './bad'
import LazyInput from './lazy'
import MinMax from './minmax'
import LazyMinMax from './lazy-minmax'
import { Button } from 'react-bootstrap'

export default class extends React.Component {
	state = {
		lazyValue: 'default value',
		lazyValue2: 'default value'
	}

	lazyHandler = (lazyObj) => {
		this.setState(lazyObj)
	}

	render() {
		return (
			<div>
				<h2>Input counter</h2>
				<p><i><b>Issue</b>: input can't be changed using React's `onChange` event</i></p>
				<BadInput min={10} max={20} />

				<h2>Input lazy counter</h2>
				<p><i><b>Solution:</b> use staging value and change it `onBlur`</i></p>
				<LazyInput min={10} max={20} />

				<h2>Lazy MinMax</h2>
				<LazyMinMax 
					value={this.state.lazyValue}
					onChange={(e) => this.lazyHandler({lazyValue: e.target.value})}
					nativeProps={{type: 'text'}}
					/>
				<div>{this.state.lazyValue}</div>
				<div><Button variant="primary" onClick={(e) => this.setState({lazyValue: 'test'})}>Change value</Button></div>

				<h2>Lazy MinMax no lazy</h2>
				<LazyMinMax 
					value={this.state.lazyValue2}
					nativeProps={{type: 'text', onChange: (e) => this.lazyHandler({lazyValue2: e.target.value})}}
				/>
				<div>{this.state.lazyValue2}</div>
			</div>
		)
	}
}