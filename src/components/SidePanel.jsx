import React, { useState } from 'react'
import SidePanelItem from './SidePanelItem'
import RoundedImage from './helpers/RoundedImage'

import { BsNewspaper, BsTv, BsFlag, BsBookmark, BsCalendar } from 'react-icons/bs'
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaHandHoldingUsd, FaUserFriends } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'

import { useHistory } from 'react-router-dom'

import { useStore } from '@/store'

const sidePanelItems = [
	['Feed', BsNewspaper],
	['Messages', AiOutlineMessage],
	['Friends', FaUserFriends],
	['Watch', BsTv],
	['Marketplace', AiOutlineShoppingCart]
]

const moreItems = [
	['Fundraisers', FaHandHoldingUsd],
	['Pages', BsFlag],
	['Groups', HiUserGroup],
	['Events', BsCalendar],
	['Saved', BsBookmark]
]

export default function SidePanel() {
	const history = useHistory()
	const [active, setActive] = useState('')
	const {user} = useStore()
	
	function clickHandler(to) {
		// if the [to] is at root and we want to go to [feed], 
		// which is the same location so we have to check 
		// for it in order to stop it from rendering it again
		if (to?.toLowerCase() != active?.toLowerCase() && !(to.toLowerCase() == 'feed' && active == '/')){	
			setActive(to?.toLowerCase())
		}
		else return
		hideOrShowPanel()
		history.push("/"+to?.toLowerCase().replace(/\s/g, '_'))
	}

	function hideOrShowPanel() {
		document.querySelector('#sidepanel').classList.toggle('move_panel_left')
	}

	function getActive(item) {
		return history.location.pathname.match(/\/(.*?)(\/:.*)?$/)[1]?.toLowerCase() == item?.toLowerCase().replace(/\s/g, '_') ? 'active' : ''
	}

	return (
		<div id='sidepanel' onClick={() => {
			document.querySelector('#sidepanel').classList.toggle('move_panel_left')
		}} className='z-20 flex flex-col move_panel_left bg-dark-blue overflow-y-auto'>
			<div onClick={(ev) => {
				ev.stopPropagation()
			}} className='w-full h-full bg-dark-blue'>
				<div className='w-full bg-dark-blue bg-cover pb-4 bg-circle relative h-72 flex flex-col flex-center'>
					<RoundedImage className='mt-auto z-10' size='5rem' />
					<span className='z-10 mt-2 text-sm text-gray-550'>{	 user.firstname ? (user.firstname + ' ' + user?.lastname || '') : user.username 	}</span>
					<button onClick={(ev) => {
						setActive('')
						history.push('/profile')
						hideOrShowPanel()
					}} className='z-10 px-4 py-2 shadow-md mt-4 flexflex-center rounded bg-blue-600 font-medium text-gray-550 text-sm'>View Profile</button>
				</div>
				<div className='bg-dark-blue'>
					{
						sidePanelItems.map((item, index) => {
							return <SidePanelItem f={clickHandler} className='px-4 w-full text-blue-400' active={getActive(item[0]) || history.location.pathname == '/' && index == 0 ? 'active' : ''} key={item[0]} Icon={item[1]} title={item[0]} />
						})
					}
				</div>
				<div className='flex-1 flex flex-col pt-4 bg-dark-blue'>
					<h2 className=' text-lg px-4 text-gray-550'>Explore</h2>
					{
						moreItems.map((item, index) => {
							return <SidePanelItem f={clickHandler} className='px-8 text-blue-400' active={getActive(item[0])} key={item[0]} Icon={item[1]} title={item[0]} />
						})
					}
				</div>
			</div>
		</div>
	)
}