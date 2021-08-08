import React, { useState } from 'react'
import Form from './index'
import SubmitButton from './Button'
import { FaGooglePlusG, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import TextField from './components/TextField'
import axios from 'axios'
import { FaSpinner } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import ErrorMessageModal from '@/components/modal/ErrorMessageModal'

export default function LoginForm({ className, slide = f => f }) {
	const [errMessage, setErrorMessage] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()
	const id = 'signup'

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

    axios.post("http://192.168.1.6:3001/signup", values)
			.then(({ data }) => {
				setErrorMessage('')
				setLoading(false)
				
				localStorage.setItem('token', JSON.stringify(data.token))
				localStorage.setItem('verified', data.verified)
				
				history.push({
					pathname: '/verifyaccount',
					state: {
						fromReg: true
					}
				})
			})
			.catch(e => {
				setLoading(false)
				setErrorMessage('an account already exists with this email')
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
				<h1 className='text-4xl font-bold capitalize tracking-tighter font-montserrat'>Sign Up</h1>
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
				<p className='text-xs text-gray-400 text-center mb-3'>or use your email for registration</p>
				<div className='w-full flex flex-col flex-center'>
					<TextField rules={{
						min: 4,
						text: true
					}} belongsTo={id} name='username' placeholder='Username' />
					<TextField rules={{
						email: true
					}} belongsTo={id} name='email' placeholder='Email' />
					<TextField rules={{
						min: 8,
						password: true
					}} type='password' belongsTo={id} name='password' placeholder='Password' />
				</div>
				<SubmitButton>
					{ loading ? spinner() : 'submit'}
				</SubmitButton>
				<p className='text-xs text-gray-600 mt-7'>
					already have an account?
					<button onClick={slide} className='uppercase font-montserrat font-medium ml-2 text-black'>SIgN in</button>
				</p>
			</Form>
			{ getErrorMessage() }
		</>
	)
}