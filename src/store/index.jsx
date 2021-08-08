import React, { createContext, useContext, useState } from 'react'
import userState from './user'

const Context = createContext()
export const useStore = () => useContext(Context)


export default function({ children }) {
	const [token, setToken] = useState(localStorage.getItem('token') || '')
	const [uState, dispatch] = userState()

	function changeToken(token) {
		setToken(token)
	}

	return (
		<Context.Provider value={{
			token,
			changeToken,
			user: {
				...uState,
				dispatch
			}
		}}>
			{
				children
			}
		</Context.Provider>
	)
}