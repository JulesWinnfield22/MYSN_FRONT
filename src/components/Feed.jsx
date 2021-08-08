import React from 'react'
import WhatsOnYourMind from './WhatsOnYourMind'
import Post from './Post'
import { FaSpinner } from 'react-icons/fa'


export default function Feed() {
	return (
		<div className='h-full w-full items-center flex flex-col mt-2 sm:mt-0 sm:p-6'>
			<WhatsOnYourMind />
			<div className='flex items-center flex-col mt-3'>
				<Post />
				<div className='flex w-full flex-center h-12'>
					<div className='rotate text-gray-550'>
						<FaSpinner />
					</div>
				</div>
			</div>
		</div>
	)
}