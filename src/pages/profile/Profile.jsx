import React from 'react'
import WhatsOnYourMind from '@/components/WhatsOnYourMind'
import Post from '@/components/Post'
import { FaInfo } from 'react-icons/fa'
import { useStore } from '@/store'
export default function Profile() {
	const {user} = useStore()
	return (
		<>
			<div className='w-full p-6 relative'>
				{/* <div className='w-8 h-8 mx-auto rounded-full border-2 border-gray-300 flex-center left-0 flex'><FaInfo /></div> */}
				<p className='text-base text-center text-gray-550'>
					{user?.bio || 'no bio yet!'}
				</p>
			</div>
			<div className='friends flex flex-col w-full'>
				<div className='flex w-full h-12 items-baseline'>
					<h1 className='text-gray-550 leading-[3]'>Friends</h1>
					<span className='text-gray-300 italic ml-2 text-xs'>100 friends</span>
					<button className='ml-auto text-gray-550 text-sm py-1'>See All</button>
				</div>

					<div className='w-full overflow-x-auto'>
						<div className='w-full flex justify-between'>
							<div className='friend bg-gray-550 mr-2 shadow-dark cursor-pointer flex-shrink-0 flex flex-col w-36 rounded overflow-hidden'>
								<img className='object-cover h-48 w-full' src='../../../assets/img/pp2.jpg' />
								<span className='text-sm p-2 text-dark-blue whitespace-nowrap overflow-hidden overflow-ellipsis'>Bobby Lee</span>
							</div>
							<div className='friend bg-gray-550 mr-2 shadow-dark cursor-pointer flex-shrink-0 flex flex-col w-36 rounded overflow-hidden'>
								<img className='object-cover h-48 w-full' src='../../../assets/img/pp3.jpg' />
								<span className='text-sm p-2 text-dark-blue whitespace-nowrap overflow-hidden overflow-ellipsis'>Magon Fox</span>
							</div>
							<div className='friend bg-gray-550 mr-2 shadow-dark cursor-pointer flex-shrink-0 flex flex-col w-36 rounded overflow-hidden'>
								<img className='object-cover h-48 w-full' src='../../../assets/img/pp5.jpg' />
								<span className='text-sm p-2 text-dark-blue whitespace-nowrap overflow-hidden overflow-ellipsis'>Sanjaye Lee</span>
							</div>
							<div className='friend bg-gray-550 shadow-dark cursor-pointer flex-shrink-0 flex flex-col w-36 rounded overflow-hidden'>
								<img className='object-cover h-48 w-full' src='../../../assets/img/pp3.jpg' />
								<span className='text-sm p-2 text-dark-blue whitespace-nowrap overflow-hidden overflow-ellipsis'>Magon Fox</span>
							</div>
						</div>
					</div>
				</div>
				<div className='py-4 my-2 border-t-2 border-b-2 border-gray-300 flex justify-center w-full'>
					<WhatsOnYourMind />
				</div>
				<div className='w-full mt-2'>
					<Post />
				</div>
		</>
	)
}