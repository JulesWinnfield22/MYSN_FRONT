import React, { useState } from 'react'
import { Form, TextField, SubmitButton } from '@/components/login'
import './verifyaccount.css'
import axios from 'axios'
import { useStore } from '../../store'
import { FaSpinner } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

function spinner() {
	return (
		<div className='flex flex-center'>
			<div className='rotate'>
				<FaSpinner fontSize='18' />
			</div>
		</div>
	)
}

export default function VerifyAccount() {
	const [loading, setLoading] = useState(false)
	const { user, changeToken } = useStore()
	const history = useHistory()

	function submitHandler(values) {
		setLoading(true)
		axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    axios.post("http://192.168.1.6:3001/verifyaccount", values)
			.then(({ data }) => {
				setLoading(false)

				localStorage.setItem('token', JSON.stringify(data.token))
				changeToken(data.token)

				user.dispatch({
					type: 'SET_USER',
					payload: {
						isLoggedIn: true,
						...data.user,
					}
				})
				
				history.push('/feed')
			})
			.catch(e => {
				setLoading(false)
				console.log('nono', e)
			})
	}

	return (
		<div className='flex flex-center w-full h-screen'>
			<div className='border pb-4 overflow-hidden rounded-md flex flex-col flex-center'>
				<p className='max-w-[30rem] mb-8 p-4 bg-dark-blue text-center text-lg text-gray-550'>
					we have sent you an 8 digit code to your email to verify your account
				</p>
				<Form id='verifyAccount' handler={submitHandler}>
					<TextField rules={{
						min: 6
					}} name='code' placeholder='Code' belongsTo='verifyAccount' />
					<SubmitButton>
						{ loading ? spinner() : 'Send'}
					</SubmitButton>
				</Form>
			</div>
		</div>
	)
}