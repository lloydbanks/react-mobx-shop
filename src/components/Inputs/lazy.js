import React from 'react'
import PropTypes from 'prop-types'

export default class Input extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
  }

  state = {
    count: this.props.min,
    inputValue: this.props.min,
    min: this.props.min,
    max: this.props.max
  }

  setCounter(number) {
    const count = Math.min(Math.max(number, this.props.min), this.props.max)
    this.setState({ count, inputValue: count })
  }

  decrease = () => {
    this.setCounter(this.state.count - 1)
  }

  increase = () => {
    this.setCounter(this.state.count + 1)
  }

  handleChange(value) {
    this.setState({ inputValue: value })
  }

  fixCounter = () => {
    const cnt = parseInt(this.state.inputValue)
    this.setCounter(isNaN(cnt) ? this.props.min : cnt)
  }

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e.target.value)}
          onBlur={this.fixCounter}
        />
        <button onClick={this.increase}>+</button>
        <span>
          {' '}
          min: {this.state.min} | max: {this.state.max}
        </span>
      </div>
    )
  }
}

Input.defaultProps = {
  min: 0,
  max: 10
}
