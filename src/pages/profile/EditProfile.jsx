import React, {useState} from 'react'
import TextInput from './components/TextInput'

import TextArea from './components/TextArea'

export default function EditProfile() {

	return (
		<div className='flex flex-col w-full mt-4 border-t-2 border-gray-300'>
			<h1 className='font-medium mt-4 text-gray-550 text-lg'>Edit Profile</h1>
			<TextInput rules={{
				min: 3
			}} name='username' />
			<TextInput rules={{
				min: 3
			}} name='firstname' />
			<TextInput rules={{
				min: 3
			}} name='lastname' />
			<TextInput rows='5' type='textarea' rules={{
				min: 4
			}} name='bio' />
			<h1 className='text-gray-550 my-4 text-lg'>About</h1>
		</div>
	)
}