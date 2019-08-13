import React from 'react'
import Input from './input'
import Lazy from './lazy'

export default function() {
	return (
		<div>
			<h2>Input counter</h2>
			<p><i><b>Issue</b>: input can't be changed using React's `onChange` event</i></p>
			<Input min={10} max={20} />

			<h2>Input lazy counter</h2>
			<p><i><b>Solution:</b> use staging value and change it `onBlur`</i></p>
			<Lazy min={10} max={20} />
		</div>
	)
}