import React from 'react'
import Feed from './Feed'
import Profile from '../pages/profile/'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import IsVerified from '@/GuardedRoute/IsVerified'

export default function Main() {
	const match = useRouteMatch()
	return (
		<div id='main' className='bg-dark-blue overflow-y-auto'>
			<Switch>
				<Route path={`${match.path}messages`}>
					<div className='w-full h-full flex flex-center'>
						messages!
					</div>		
				</Route>
				<IsVerified Component={Profile} path='/profile' />
				<IsVerified Component={Feed} path='/' />
			</Switch>
		</div>
	)
}