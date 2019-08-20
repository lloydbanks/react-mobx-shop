import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
	static defaultProps = {
		onChange: function(e) {},
		nativeProps: {}
	}

	static propTypes = {
		value: PropTypes.any.isRequired,
		onChange: PropTypes.func,
		nativeProps: PropTypes.object
	}

	nativeInput = React.createRef()

	blurHandler = (e) => {
		if(this.props.value !== e.target.value) {
			this.props.onChange(e)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		const input = this.nativeInput.current

		if(prevProps.value !== this.props.value) {
			input.value = this.props.value
		}
	}

	render() {
		return <input
			defaultValue={this.props.value} 
			onBlur={(e) => this.blurHandler(e)}
			{...this.props.nativeProps}
			ref={this.nativeInput}
			/>
	}
}