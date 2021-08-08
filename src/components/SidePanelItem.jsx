import React from 'react'

export default function SidePanelItem({ Icon, fontSize = '20', h = 'h-12', title, active, className, f = () => f }) {
	return (
		<button onClick={() => f(title)} className={ active + ' hover:bg-light-blue hover:text-gray-550 font-medium transition-color duration-200 flex items-center ' + className + ' ' + h}>
			{<Icon fontSize={fontSize} />}
			<span className=' ml-3 text-sm ellipsis overflow-hidden whitespace-nowrap'>{title}</span>
		</button>
	)
}