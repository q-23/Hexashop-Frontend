import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStateValueAuthorization } from 'contexts/authorization/authorization'

const RouteWithAuthorization = ({ component: Component, ...rest }) => {
	const [auth] = useStateValueAuthorization();
	console.log(auth)
	return (
		<Route
			{...rest}
			render={props =>
				auth.length ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		/>
	)
}

export default RouteWithAuthorization