import React, { useState } from 'react'
import Form from './index'
import SubmitButton from './Button'
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import TextField from './components/TextField'
import { useHistory } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa'
import axios from 'axios'
import { useStore } from '../../store'
import ErrorMessageModal from '@/components/modal/ErrorMessageModal'
export default function LoginForm({ className, slide = f => f }) {
	const [errMessage, setErrorMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const { user, changeToken } = useStore()
	const history = useHistory()
	const id = 'signin'


	function spinner() {
		return (
			<div className='flex flex-center'>
				<div className='rotate'>
					<FaSpinner fontSize='18' />
				</div>
			</div>
		)
	}
	
	function submitHandler(values = {}) {
		setLoading(true)
    axios.post("http://192.168.1.6:3001/login", values)
			.then(({ data }) => {
				setErrorMessage('')
				setLoading(false)

				changeToken(data.token)
				
				user.dispatch({
					type: 'SET_USER',
					payload: {
						isLoggedIn: true,
						...data.user,
						profile: data.user?.profile ? 'http://192.168.1.6:3001/' + data.user?.profile : undefined
					}
				})
				
				localStorage.setItem('token', JSON.stringify(data.token))

				history.push('/feed')
			})
			.catch(e => {
				setLoading(false)
				setErrorMessage('Make sure your credentials are correct ' + e.message)
			})
  }

	function getErrorMessage() {
		if(errMessage) {
			return (
				<ErrorMessageModal>
					{
						errMessage
					}
				</ErrorMessageModal>
			)
		} else {
			return undefined
		}
	}

	return (
		<>
			<Form id={id} handler={submitHandler} className={className + ' AB_FORM'}>
				<h1 className='text-4xl font-bold capitalize tracking-tighter font-montserrat'>Sign In</h1>
				<div className='flex justify-center my-4'>
					<button className='border w-12 h-12 rounded-full flex flex-center'>
						<FaFacebookF size='25' />
					</button>
					<button className='mx-4  border w-12 h-12 rounded-full flex flex-center'>
						<FaGooglePlusG size='25' />
					</button>
					<button className='border w-12 h-12 rounded-full flex flex-center'>
						<FaLinkedinIn size='25' />
					</button>
				</div>
				<p className='text-xs text-gray-400 text-center mb-3'>or use your account</p>
				<div className='w-full flex flex-col flex-center'>
					<TextField rules={{
						email: true
					}} belongsTo={id} name='email' placeholder='Email' />
					<TextField belongsTo={id} rules={{
						min: 8,
						password: true
					}} type='password' name='password' placeholder='Password' />
				</div>
				<SubmitButton>
					{ loading ? spinner() : 'submit'}
				</SubmitButton>
				<p className='text-xs text-gray-600 mt-6'>
					dont have an account?
					<button onClick={slide} className='uppercase font-montserrat font-medium ml-2 text-black'>SIgN up</button>
				</p>
			</Form>
			{ getErrorMessage() }
		</>
	)
}