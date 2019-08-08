import React from 'react'
import Input from './input'

export default function() {
	return (
		<div>
			<h2>Product counter</h2>
			<Input min={20} max={50} />
		</div>
	)
}