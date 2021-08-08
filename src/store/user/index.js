import { useReducer } from 'react'
import userReducer from './user_reducer'

// const isLoggeIn = localStorage.getItem('token') != null ? true : false
// const user = localStorage.getItem('user') 

const initState = {
	isLoggedIn: false
}

const userState = () => useReducer(userReducer, initState)

export default userState