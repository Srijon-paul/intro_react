import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
	// useParams is a React Router hook that lets you access the dynamic parameters from the current URL.
	// Here, we destructure 'userid' from the object returned by useParams().
	// The variable name 'userid' must match the parameter defined in your route path (e.g., '/user/:userid').
	// This allows you to get the value of 'userid' from the URL and use it in your component.
	const {userid} = useParams();
  return (
	<div className='bg-orange-500 text-center py-4 text-3xl'>User: {userid}</div>
  )
}

export default User