import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import RoundedImage from './helpers/RoundedImage'

export default function RightSide() {
	return (
		<div id='rightside' className='overflow-y-auto bg-dark-blue'>
			<div className='w-full h-full'>
				<div className='w-full p-6'>
					<div className='flex justify-between items-end'>
						<h2 className='text-gray-550 text-base'>Events</h2>
						<span className='text-blue-600 lowercase cursor-pointer w-14 border border-black/20 px-2 block rounded bg- text-xs hover:bg-white'>See All</span>
					</div>
					<div className='mt-2 flex shadow-dark bg-dark-blue flex-col rounded overflow-hidden'>
						<img src='./assets/img/ev2.jpg' className='h-40 object-cover w-full' />
						<div className='border-t relative flex flex-col pl-1'>
							<h3 className='uppercase text-gray-550 text-sm font-semibold ml-1 my-2'>Music Festival
							</h3>
							<div className='flex items-end pb-2'>
								<ImLocation2 fontSize='20' color='blue' />	
								<span className='text-sm ml-1 self-end text-gray-300'>Meskel Adebabay</span>
							</div>
							<div className='flex items-center calendar-shadow rounded overflow-hidden flex-col absolute right-0 bottom-0 top-0 w-20 '>
								<span className='flex-1 text-white flex flex-center'>20</span>
								<span className='bg-blue-700 h-6 w-full text-center text-white'>Jan</span>
							</div>
						</div>
					</div>
					<div className='mt-2 flex shadow-dark bg-dark-blue flex-col rounded overflow-hidden'>
						<img src='./assets/img/ev3.jpg' className='h-40 object-cover w-full' />
						<div className='border-t relative flex flex-col pl-1'>
							<h3 className='uppercase text-gray-550 text-sm font-semibold ml-1 my-2'>Concert
							</h3>
							<div className='flex items-end pb-2'>
								<ImLocation2 fontSize='20' color='blue' />	
								<span className='text-sm ml-1 self-end text-gray-300'>Addis Ababa</span>
							</div>
							<div className='flex items-center calendar-shadow rounded overflow-hidden flex-col absolute right-0 bottom-0 top-0 w-20 '>
								<span className='flex-1 flex flex-center text-white'>17</span>
								<span className='bg-blue-700 h-6 w-full text-center text-white'>March</span>
							</div>
						</div>
					</div>
					<div className='flex justify-between items-end mt-6 border-t-2 border-gray-300 pt-4'>
						<h2 className='text-gray-550 text-base'>Friend Requests</h2>
						<span className='text-blue-600 lowercase cursor-pointer w-14 border border-black/20 px-2 block rounded bg- text-xs hover:bg-white'>See All</span>
					</div>
					<div className='flex mt-4 py-2 pl-2 rounded shadow-dark items-center bg-dark-blue'>
						<RoundedImage size='4rem' className='self-start' src='./assets/img/pp3.jpg' />
						<div className='flex-col ml-2 justify-center flex flex-1 h-full'>
							<span className='text-sm capitalize mt-1 text-gray-550'>Hope Solo</span>
							<span className='text-xs text-gray-400 ml-1 mt-1 text-medium'>1 mutual friend</span>
							<div className='flex justify-start mt-2 mb-1'>
								<button className='bg-white text-blue-700 h-7 shadow-md flex-row-reverse rounded px-4 text-sm  uppercase'>Reject</button>
								<button className='bg-blue-700 text-white ml-2 h-7 shadow-md flex-row-reverse rounded px-4 text-sm  uppercase'>Accept</button>
							</div>
						</div>
					</div>
					<div className='flex mt-2 py-2 pl-2 rounded shadow-dark items-center bg-dark-blue'>
						<RoundedImage size='4rem' className='self-start' src='./assets/img/pp4.jpg' />
						<div className='flex-col ml-2 justify-center flex flex-1 h-full'>
							<span className='text-sm capitalize text-gray-550 mt-1'>Alex XO</span>
							<span className='text-xs text-gray-400 ml-1 mt-1 text-medium'>2 mutual friend</span>
							<div className='flex justify-start mt-2 mb-1'>
								<button className='bg-white text-blue-700 h-7 shadow-md flex-row-reverse rounded px-4 text-sm  uppercase'>Reject</button>
								<button className='bg-blue-700 text-white ml-2 h-7 shadow-md flex-row-reverse rounded px-4 text-sm  uppercase'>Accept</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}