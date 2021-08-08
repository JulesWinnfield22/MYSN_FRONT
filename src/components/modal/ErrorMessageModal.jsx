import React, { useEffect } from 'react'
import Modal from './index'

const rootModal = document.getElementById('rootModal')

export default function ErrorMessageModal({ children, hideIfBefore = true }) {
	
	useEffect(() => {
		if(rootModal.children.length > 1 && hideIfBefore) {
			rootModal.removeChild(rootModal.children[0])
		}
	})
	
	return (
		<Modal>
			<div className='error_message_modal fixed min-w-[10rem] h-12 flex flex-center z-20 bottom-0 right-0'>
				{
					children
				}
			</div>
		</Modal>
	)
}