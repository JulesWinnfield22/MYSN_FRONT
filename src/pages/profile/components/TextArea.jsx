import React, {useState} from 'react'
import { FaPlus,FaEdit, FaCheck, FaSpinner } from 'react-icons/fa'
import axios from '@/../api'
import { useStore } from '@/store'

export default function TextInput({ name }) {
	const {user, changeToken} = useStore()
	const [value, setValue] = useState()
	const [loading, setLoading] = useState('')
	const [touched, setTouched] = useState(false)

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

	function submitHandler() {
		setLoading('sent')

		user.dispatch({
			type: 'UPDATE',
			payload: {[name]: value} || {}
		})

		const api = axios()

		api.post("/user/" + name, {
			[name]: value
		})
			.then(({data}) => {
				setLoading('done')
				if(data.tokan){
					changeToken(data.token)
					localStorage.removeItem('token')
					localStorage.setItem('token', JSON.stringify(data.token))
				}
			})
			.catch(err => {
				setLoading('')
				console.log(err)
			})
	}

	return (
		<div className='flex flex-col w-full p-4 border-gray-300'>
			<label className='font-normal text-sm capitalize'>{name}</label>
			<div className='w-full flex justify-between items-baseline mt-2'>
				<textarea placeholder={user[name] || ''} onChange={({ target }) => setValue(target.value)} rows='5' className='text-sm resize-none w-2/3 shadow focus:outline-none rounded pl-2'  name='bio' />
				<button onClick={submitHandler} className='self-end flex items-center px-4 py-1 h-9 bg-white text-blue-600 rounded shadow'>
					{ getIcon() }	
					<span className='ml-2 font-medium font-montserrat text-sm'>{ user[name] ? 'Edit' : 'Add'}</span>
				</button>
			</div>
		</div>
	)
}