import React from 'react'
import { useId } from 'react'

function Select({
	options,
	label,
	className,
	...props
}, ref) {
	const id = useId();
  return (
	<div className='w-full'>
		{label && <label htmlFor={id} className=''></label>}
		<select
		{...props}
		id={id}
		className=''
		ref={ref}
		>
			// by default we should take options as array so that here we can iterate those according to our choice
			// "?" is used to check whether option is empty or not based on that start a loop
			{options?.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	</div>
  )
}

// this can be also done to give reference instead of making function at beginning
export default React.forwardRef(Select)