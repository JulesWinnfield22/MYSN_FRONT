import React from 'react'

import { useStore } from '@/store'
export default function ({ size, src, className }) {
	const { user, token } = useStore()
	if(!src) {
		src = user.profile ? user.profile + "?token=" + token || localStorage.getItem('token') : '@/../assets/img/user.png'
	}
	return (
		<div style={{ width: size, height: size}} className={ className + ' border-gray-400 border-2 rounded-full overflow-hidden'}>
			<img src={src } className='w-full h-full object-cover' />
		</div>
	)
}