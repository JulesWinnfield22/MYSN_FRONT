import React, {useState, useEffect} from 'react'
import { Route, Redirect, useHistory } from 'react-router-dom'
import { useStore } from '../store'
import axios from '@/../api'
const GuardedRoute = ({ Component, auth, to, not, ...rest }) => {
	
	function isLogedIn() {
    if(localStorage.getItem('token')?.length > 20) return true
    else return false
  }
	
	return (
		<Route
			{...rest}
			render={(props) => {
				return isLogedIn() ? <Redirect to='/feed' /> : <Component {...props} />
			}}
		/>
	)
}

export default GuardedRoute