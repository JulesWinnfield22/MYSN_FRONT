import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './modal.css'
const rootModal = document.getElementById('rootModal')

export default function Modal({ children }) {
	return ReactDOM.createPortal(
		children,
		rootModal
	)
}