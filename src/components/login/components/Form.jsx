import React, { createContext, useState, useRef } from 'react'

export const FormContext = createContext()

export default function Form({ className, id, handler, children }) {
	const form = useRef()
	const [isFormValid, setFormValid] = useState(false)

	let values = {}
	function updateForm() {
		const inputFields = [...form?.current?.elements].filter(item => item.tagName == 'INPUT' || item.tagName == 'TEXTAREA' || item.tagName == 'SELECT')
		inputFields.forEach(item => {
			values = {
				...values,
				[item.name]: item.value
			}
		})
		setFormValid(inputFields.every(item => item.dataset['valid'] == 'true'))
	}

	return (
		<FormContext.Provider value={{
			updateForm,
			isFormValid
		}}>
			<form autoComplete='off' id={id} className={ className } onSubmit={(ev) => {
				ev.preventDefault()
				return handler(values)
			}} ref={form}>
				{
					children
				}
			</form>
		</FormContext.Provider>
	)
}