import React, {useContext, useState} from 'react'
import {FormContext} from './Form'

export default function SubmitButton({ handler, className, errMessage, children }) {
	const data = useContext(FormContext)
	
	function clickHandler(ev) {
		if(!data?.isFormValid) ev.preventDefault()
	}
	
	return (
		<div className='flex flex-col flex-wrap flex-center'>
			<button className={className} onClick={ handler ? (ev) => {
					handler(ev, data?.isFormValid)
				} : clickHandler }>
				{
					children
				}
			</button>
			{
				errMessage ? (
					<span className='text-sm text-red-600 mt-5'>
						{
							errMessage
						}
					</span> ): ''
			}
		</div>
	)
}