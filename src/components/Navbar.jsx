import React, { useEffect } from 'react'
import RoundedImage from './helpers/RoundedImage'

import { FaSearch, FaBell, FaUser, FaEllipsisV, FaSignOutAlt } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'

import {useStore} from '../store'
import { useHistory } from 'react-router-dom'
export default function Navbar() {
	const {user} = useStore()
	const history = useHistory()
	return (
		<>
			<div id='navbar' className='flex border-b bg-dark-blue'>
				<div className='flex px-8 p-2 items-center flex-1'>
					<div className='w-12 h-12 rounded-full overflow-hidden'>
						<img src='./assets/img/logo.png' className='w-full h-full object-cover' />
					</div>
					<div className='px-4 flex-1 flex items-center'>
						<input className='w-full text-sm placeholder-gray-300 text-gray-550 focus:border-b-blue-500 h-10 focus:outline-none border-b px-3 bg-transparent' placeholder='Search...' type='text' name='search' />
						<button className='h-10 w-10 flex flex-center border-b'>
							<FaSearch color='rgba(156, 163, 175)' />
						</button>
					</div>
				</div>
				<div className='flex items-center justify-end p-2'>
					<div className='flex flex-center'>
						<div className='flex items-center'>
							<RoundedImage size='2.75rem' />
							<span className='ml-2 truncate text-sm capitalize text-gray-550'>{ user.username }</span>
						</div>
						<div className='flex px-2 h-full'>
							<ul className='text-blue-500 h-full flex'>
								<li className='nav-li'>
									<button className='nav-btn'>
										<AiFillMessage fontSize='20' />
									</button>
								</li>
								<li className='nav-li'>
									<button className='nav-btn'>
										<FaBell fontSize='20' />
									</button>
								</li>
								<li className='nav-li'>
									<button className='nav-btn'>
										<FaUser fontSize='20' />
									</button>
								</li>
								<li className='nav-li'>
									<button onClick={() => {
										localStorage.removeItem('token')
										user.dispatch({
											type: 'REMOVE'
										})
										history.push("/login")
									}} className='nav-btn'>
										<FaSignOutAlt fontSize='20' />
									</button>
								</li>
							</ul>
						</div>
					</div>
					<button id='toggle-nav' onClick={() => {
						document.querySelector('#sidepanel').classList.toggle('move_panel_left')
					}} className='w-12 h-full text-blue-500 flex flex-center'>
						<FaEllipsisV fontSize='20' />
					</button>
				</div>
			</div>
		</>
	)
}