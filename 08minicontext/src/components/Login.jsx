import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	// - This line uses the `useContext` hook to access the `setUser` function from the `UserContext`.
	// - `setUser` is used to update the user state in the context when the form is submitted.
	const {setUser} = useContext(UserContext)

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({username, password})
	}

  return (
	<div>
		<h1>Login</h1>
		<input 
		type='text'
		value={username}
		onChange={(e) => setUsername(e.target.value)}
		placeholder='Username'
		/>
		<input 
		type='password'
		value={password}
		onChange={(e) => setPassword(e.target.value)}
		placeholder='Password'
		/>
		<button onClick={handleSubmit}>Submit</button>
	</div>
  )
}

export default Login