import React, {useState} from 'react'
import axiox from '../../../api'
const api = axiox()
import {useStore} from '@/store'
import { FaCameraRetro, FaSpinner } from 'react-icons/fa'
export default function ImageUploader({ className }) {
	const { changeToken, user } = useStore()
	const [loading, setLoading] = useState(false)

	function handler({ target }) {
		setLoading(true)

		const fd = new FormData()
		fd.append('profile', target.files[0])

		api.post('/user/profile', fd)
			.then(({ data }) => {
				setLoading(false)
				localStorage.removeItem('token')
				localStorage.setItem('token', JSON.stringify(data.token))
				changeToken(data.token)
				user.dispatch({
					type: 'UPDATE',
					payload: {profile: 'http://192.168.1.6:3001' + data.profile}
				})
			})
			.catch(err => {
				setLoading(false)
				console.log(err)
			})
	
	}

	function getIcon() {
		if(loading){
			setTimeout(() => {
				setLoading(false)
			}, 10000)
			return <div className='rotate'><FaSpinner /></div>
		}
		else return <FaCameraRetro fontSize='18' />
	}
	
	return (
		<div className={ className + ' ' }>
			<form>
				<label>
					{ getIcon() }
					<input disabled={loading} onChange={handler} type='file' name='profile' />
				</label>
			</form>
		</div>
	)
}