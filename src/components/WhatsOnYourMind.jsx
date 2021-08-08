import React from 'react'
import SidePanelItem from './SidePanelItem'
import RoundedImage from './helpers/RoundedImage'

import { FaPhotoVideo, FaSmile, FaEllipsisH } from 'react-icons/fa'
import { RiUserAddLine } from 'react-icons/ri'

export default function () {
	return (
		<div id='whatsonyourmind' className='rounded shadow-dark flex flex-col bg-white'>
			<div className='bg-dark-blue flex items-center border-gray-500 border-b p-2'>
				<RoundedImage size='3.5rem' />
				<input type='text' placeholder='Whats on your mind man?' className='bg-transparent placeholder-gray-300 text-gray-550 flex-1 h-full focus:outline-none ml-3 text-sm' />
			</div>
			<div className='bg-dark-blue px-4 sm:px-0 icons flex items-center justify-between'>
				<SidePanelItem className='flex-1 flex-center text-gray-550 sm:px-4 rounded-lg' h='h-12' Icon={FaPhotoVideo} title='photo / video' />
				<SidePanelItem className='flex-1 flex-center text-gray-550 sm:px-4 rounded-lg' h='h-12' Icon={RiUserAddLine} title='Tag friend' />
				<SidePanelItem className='flex-1 flex-center text-gray-550 sm:px-4 rounded-lg' h='h-12' Icon={FaSmile} title='Felling / Status' />
			</div>
		</div>
	)
}