import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.Component {
	static defaultProps = {
		onChange: function(v){console.log(v)}
	}

	static propTypes = {
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired,
		count: PropTypes.number.isRequired,
		onChange: PropTypes.func
	}

	state = {
		inputValue: this.props.count,
	}

	setCounter(number) {
		const count = Math.min(Math.max(number, this.props.min), this.props.max)
		this.setState({inputValue: count})
		this.props.onChange(count)
	}

	decrease = () => {
		this.setCounter(this.props.count - 1)
	}

	increase = () => {
		this.setCounter(this.props.count + 1)
	}

	handleChange(value) {
		this.setState({ inputValue: value })
	}

	fixCounter = () => {
		const cnt = parseInt(this.state.inputValue)
		this.setCounter(isNaN(cnt) ? this.props.min : cnt)
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.count !== this.props.count) {
			this.setState({inputValue: this.props.count})
		}
	}

	render() {
		return (
			<div>
				<button onClick={this.decrease}>-</button>
				<input 
					type="text" 
					value={this.state.inputValue}
					onChange={(e) => this.handleChange(e.target.value)}
					onBlur={this.fixCounter}
				/>
				<button onClick={this.increase}>+</button>
				<span> min: {this.props.min} | max: {this.props.max}</span>
			</div>
		)
	}
}