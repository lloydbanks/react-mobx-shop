import React from 'react'
import PropTypes from 'prop-types'
import styles from './minmax.module.css'

export default class Input extends React.PureComponent {
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
		const btnClass = `btn btn-warning btn-sm ${styles.btn}`
		const {count, min, max, disabled} = this.props

		return (
			<div>
				<div className="input-group">
				  <div className="input-group-prepend">
				    <button
						className={btnClass}
						onClick={this.decrease}
						disabled={disabled || count <= min}>-</button>
				  </div>
				  <input
						type="text" 
						value={this.state.inputValue}
						onChange={(e) => this.handleChange(e.target.value)}
						onBlur={this.fixCounter}
						className="form-control"
					/>
					<div className="input-group-append">
						<button
							className={btnClass}
							onClick={this.increase}
							disabled={disabled || count >= max}>+</button>
						<span className="input-group-text">min: {min} | max: {max}</span>
					</div>
				</div>
			</div>
		)
	}
}