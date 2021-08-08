import React, {useState} from 'react'
import { Form, TextField, SubmitButton } from '@/components/login'
import { FaPlus, FaEdit, FaCheck, FaSpinner } from 'react-icons/fa'
import axios from '@/../api'

import { useStore } from '@/store'

export default function TextInput({ name, rules, rows = 0, type = 'text' }) {
	const {user, changeToken} = useStore()
	const [loading, setLoading] = useState('')

	function getIcon() {
		switch (loading) {
			case 'done':
				return <FaCheck fontSize='15' />
			case 'sent':
				return <div className='rotate'><FaSpinner fontSize='15' /></div>
			default:
				return user[name] ? <FaEdit /> : <FaPlus fontSize='15' />
		}
	}

	function submitHandler(values = {}) {
		setLoading('sent')

		const api = axios()

		user.dispatch({
			type: 'UPDATE',
			payload: {[name]: values[name]} || {}
		})

		api.post("/user/" + name, values)
			.then(({data}) => {
				setLoading('done')
				changeToken(data.token)
				localStorage.removeItem('token')
				localStorage.setItem('token', JSON.stringify(data.token))
			})
			.catch(err => {
				setLoading('')
				console.log(err)
			})
	}

	function getChild() {
		if(type == 'text') {
			return (
				<TextField rules={rules} belongsTo={name} name={name} placeholder={user[name] || ''}/>
			)
		} else if(type == 'textarea') {
			return (
				<TextField rows={ rows } type='textarea' rules={rules} belongsTo={name} name={name} placeholder={user[name] || 'no bio yet'}/>
			)
		}
	}

	function clickHandler(ev, isFormValid) {
		if(!isFormValid) ev.preventDefault()
	}

	return (
		<Form id={name} className='px-4 pt-2' handler={submitHandler}>
			<label  className='font-normal text-sm text-gray-550 capitalize'>{ name }</label>
			<div className='edit w-full flex justify-between items-end mt-2'>
				{
					getChild()
				}
				<SubmitButton className='mb-5 flex items-center px-4 py-1 h-9 bg-gray-550 text-blue-600 rounded shadow' handler={clickHandler}>
				{ getIcon() }	
					<span className='ml-2 font-medium font-montserrat text-sm'>{ user[name] ? 'Edit' : 'Add' }</span>
				</SubmitButton>
			</div>
		</Form>
	)
}