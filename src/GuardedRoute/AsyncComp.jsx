import React, {useState, useEffect} from 'react'
import axios from '@/../api'
export default function AsyncComp(Com) {
	const [child, setChild] = useState('Loading')
	
	useEffect(() => {
		const api = axios()
		api.get('/user')
			.then(({data}) => {
				setChild(<p>{data.username}</p>)
			})
	}, [])

	function getchild() {
	}

	return (
		<div className='h-screen flex flex-center'>
			{
				child
			}
		</div>
	)
}