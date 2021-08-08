import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const OnlyFromRegister = ({ Component, location, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return location.state?.fromReg ? <Component {...props} /> : <Redirect to='/' />
			}}
		/>
	)
}

export default OnlyFromRegister