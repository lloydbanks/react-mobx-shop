import React from 'react'

export default function(props) {
	return (
		<div>
			<h2>{props.title}</h2>
			<p>Price: {props.price}</p>
			<props.Link to={props.backUrl} className="btn btn-warning">Back</props.Link>
		</div>
	)
}