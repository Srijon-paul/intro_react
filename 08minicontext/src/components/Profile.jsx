/**
 * Profile component displays the current user's profile information.
 *
 * Uses the React `useContext` hook to access the `UserContext` and retrieve the `user` object.
 * If no user is present in the context, it displays "Not Logged in".
 * Otherwise, it displays the username of the logged-in user.
 *
 * Notes on `useContext` usage:
 * - `useContext(UserContext)` allows the component to consume the nearest value of `UserContext` provider in the component tree.
 * - This enables the component to reactively update when the context value changes, such as when a user logs in or out.
 * - Using `useContext` here simplifies state management by avoiding prop drilling for user data.
 *
 * @component
 */
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
	const {user} = useContext(UserContext)
	if(!user) return <h2>Not Logged in</h2>
  return (
	<h2>Profile: {user.username}</h2>
  )
}

export default Profile

