import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.Component {
	static propTypes = {
		min: PropTypes.number,
		max: PropTypes.number
	}

	state = {
		count: this.props.min,
		min: this.props.min,
		max: this.props.max
	}

	setCounter(number) {
		const count = Math.min(Math.max(number, this.props.min), this.props.max)
		this.setState({count})
	}

	decrease = () => {
		this.setCounter(this.state.count - 1)
	}

	increase = () => {
		this.setCounter(this.state.count + 1)
	}

	handleChange(value) {
		const count = parseInt(value)
		this.setCounter(isNaN(count) ? this.props.min : count)
	}

	render() {
		return (
			<div>
				<button onClick={this.decrease}>-</button>
				<input type="text" value={this.state.count} onChange={(e) => this.handleChange(e.target.value)}/>
				<button onClick={this.increase}>+</button>
				<div>{this.state.count}</div>
			</div>
		)
	}
}

Input.defaultProps = {
	min: 0,
	max: 10
}