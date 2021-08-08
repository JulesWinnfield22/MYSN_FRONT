import React, {useState, useEffect} from 'react'
import { Route, Redirect, useHistory, useRouteMatch } from 'react-router-dom'
import { useStore } from '../store'
import axios from '@/../api'
const GuardedRoute = ({ Component, ...rest }) => {
	const history = useHistory()
	const match = useRouteMatch()
	const [state, setState] = useState('wait')

	const { user } = useStore()
	useEffect(() => {
		(async () => {
			if(!(localStorage.getItem('token')?.length > 20)) {
				setState('login')
			} else {
				if(user.verified) {
					setState('continue')
				} else {
					setState('verify')
				}
			}
		})()
	}, [])

	function data() {
		switch(state) {
			case 'login':
				return (
					<Route
						{...rest}
						render={(props) => {
							return <Redirect to='/login' />
						}}
					/>
				)
			case 'wait':
				return loading()
			case 'verify':
				history.push({
					pathname: '/verifyaccount',
					state: {
						formReg: true
					}
				})
			case 'continue':
				return (
					<Route
						{...rest}
						render={(props) => {
							return <Component {...props} />
						}}
					/>
				)
		}
	}

	function loading() {
		return (
			<div className='flex flex-center h-screen text-gray-550'>Loading...</div>
		)
	}

	return (
		<>
			{data()}
		</>
	)
}

export default GuardedRoute