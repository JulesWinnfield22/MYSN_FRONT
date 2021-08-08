import React from 'react'
import RoundedImage from './helpers/RoundedImage'
import { FaEllipsisH } from 'react-icons/fa'
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'

export default function () {
	return (
		<div className='rounded post bg-dark-blue shadow-dark mb-6 flex flex-col'>
			<div className='flex items-center justify-between p-2'>
				<div className='flex'>
					<RoundedImage size='3.5rem' src='./assets/img/pp2.jpg' />
					<div className='h-full ml-3 flex justify-center flex-col'>
						<span className='text-sm text-gray-550'>Jacob Banks</span>
						<span className='text-xs text-gray-400 lowercase'>a minute ago</span>
					</div>
				</div>
				<button className='h-full w-12 flex justify-center self-start text-gray-550'>
					<FaEllipsisH />
				</button>
			</div>
			<p className='text-sm px-2 pb-4 text-gray-550'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, eius illum?</p>
			<div className='grid grid-flow-col grid-rows-1 gap-1'>
				<img src='./assets/img/pp1.jpg' className='h-80 w-full object-cover' />
				<img src='./assets/img/pp2.jpg' className='h-80 w-full object-cover' />
			</div>
			<div className='flex py-2 px-2'>
				<button className='flex bg-light-blue text-gray-300 items-end rounded-lg px-2 py-1 mr-4'>
					<span>
						<AiOutlineLike fontSize='20' />
					</span>
					<span className='ml-2 font-mono text-sm'>147</span>
				</button>
				<button className='flex bg-light-blue text-gray-300 items-end rounded-lg px-2 py-1 mr-4'>
					<span>
						<AiOutlineComment fontSize='20' />
					</span>
					<span className='ml-2 font-mono text-sm'>7</span>
				</button>
				<button className='flex bg-light-blue text-gray-300 items-end rounded-lg px-2 py-1 mr-4'>
					<span>
						<AiOutlineShareAlt fontSize='20' />
					</span>
					<span className='ml-2 font-mono text-sm'>12</span>
				</button>
			</div>
		</div>
	)
}