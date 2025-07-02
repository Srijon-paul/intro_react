import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    //The <UserContextProvider> is used to wrap the application components to provide user-related context (such as authentication state) to all child components. This enables <Login /> and <Profile /> (and any other nested components) to access and update user context data without prop drilling.
    <UserContextProvider>
      <h1>React video for Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
