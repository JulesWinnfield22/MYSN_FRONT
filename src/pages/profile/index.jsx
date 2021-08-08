import React from 'react'
import RoundedImage from '@/components/helpers/RoundedImage'
import ImageUploader from '@/components/helpers/ImageUploader'
import { FaEdit, FaImages } from 'react-icons/fa'
import './profile.css'

import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'

import Profile from './Profile.jsx'
import EditProfile from './EditProfile.jsx'

export default function() {
	const match = useRouteMatch()
	const history = useHistory()

	return (
		<div className='w-full h-full flex flex-col overflow-y-auto'>
			<div style={{ backgroundImage: 'url(../../../assets/img/pp3.jpg)' }}
				className='min-h-[15rem] flex relative bg-center rounded cover-pic bg-red-500 bg-cover'>
				<div className='absolute img-container'>
					<ImageUploader className='absolute image-uploader' />
					<RoundedImage
						className='rounded-image'
						size='8rem'
					/>
				</div>
			</div>
			<div className='flex flex-col profile-info w-full mx-auto h-full'>
				<div className='btn-collection flex justify-end items-center w-full min-h-[4rem]'>
					<button onClick={() => {
						history.push(match.path + '/edit')
					}} className='text-base mr-2 font-medium h-9 rounded shadow-md bg-blue-600 text-white flex items-center justify-between px-4 py-1 right-0'>
						<FaEdit fontSize='18' />
						<span className='ml-2'>Edit Profile</span>
					</button>
					<button className='text-base font-medium h-9 rounded shadow-md bg-blue-600 text-white flex items-center justify-between px-4 py-1 right-0'>
						<FaImages fontSize='18' />
						<span className='ml-2'>Photos</span>
					</button>
				</div>
				<Switch>
					<Route path={match.path + "/edit"}>
						<EditProfile />
					</Route>
					<Route>
						<Profile />
					</Route>
				</Switch>
			</div>
		</div>
	)
}