import React from 'react'
import Error404 from '@c/errors/404'

export default function(props) {
	return (
		<div>
			Product #{props.match.params.id}
		</div>
	)
}