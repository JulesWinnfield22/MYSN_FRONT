import React, {useState} from 'react'
import { SubmitButton } from './index'

export default function Button({ children }) {
	const [msg, setMsg] = useState('')

	function handler(ev, isFormValid) {
		if(!isFormValid) {
			ev.preventDefault()
			setMsg('make sure you filled the form corectly')
			return false
		} else {
			setMsg('')
			return true
		}
	}

	return (
		<SubmitButton className='AB_SUBMIT_BUTTON' handler={handler} errMessage={msg}>
			{ children }
		</SubmitButton>
	)
}