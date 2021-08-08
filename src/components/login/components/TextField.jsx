import React, { useEffect, useState, useContext } from 'react'
import { FormContext } from './Form'
import { getResponse, minPassword } from '../lib/utils'

export default function TextField({ rules, type = 'text', name, belongsTo, placeholder, className, rows = 0 }) {
	const [focused, setFocused] = useState(false)
	const [value, setValue] = useState()
	const data = useContext(FormContext)

	const rulesCopy = []
	for(const rule in rules) {
		rulesCopy.push({
			name: rule,
			value: rules[rule]
		})
	}

	function displayErrorMessages() {
		let messages = []
		
		if(rules.password) {
			minPassword(rules.min)
		}

		if( focused ) {

			rulesCopy.forEach((item) => {
				messages.push(getResponse(item.name, item.value, value))
			})

		}
		
		return (
			<p className='AB_ERROR'>
				{
					messages?.find(item => item !== true)
				}
			</p>
		)
	}

	function isValid() {
		const messages = []

		rulesCopy.forEach((item) => {
			 messages.push(getResponse(item.name, item.value, value))
		})

		return messages.every(item => item === true)
	}

	useEffect(() => {
		data?.updateForm()
	})

	useEffect(() => {
		const targetNode = document.querySelector(`#${belongsTo}`)[name];

		const cb = function() {
			setFocused(true)
			targetNode.removeEventListener('keydown', cb)
		}
		
		targetNode.addEventListener('keydown', cb)
	}, [])

	function handleChange(ev) {
		setValue(ev.target.value)
	} 

	function getChild() {
		if(type == 'text' || type == 'password') {
			return (
				<input type={ type }
					data-valid={isValid()} 
					className='AB_INPUT_FIELD'
					name={name}
					onChange={handleChange}
					placeholder={placeholder} />
			)
		} else if(type == 'textarea') {
			return (
				<textarea
					rows={ rows }
					data-valid={isValid()} 
					className='AB_TEXTAREA'
					name={name}
					onChange={handleChange}
					placeholder={placeholder}
				></textarea>
			)
		}
	}

	return (
		<div className={ 'flex-1 flex flex-col justify-center mb-1'}>

			<div className={ className + ' AB_INPUT_CONTAINER' }>
				{
					getChild()
				}
			</div>
			<div className='AB_ERROR_CONTAINER'>
				{displayErrorMessages()}
			</div>
		</div>
	)
}