import { useState } from 'react'
import { useContext } from 'react'
import Usecontext from './context/usecontext.js'
import UseContextprovider from './context/usercontextprovider.jsx'
import Profile from './components/profile.jsx'
import Login from './components/login.jsx'

function App() {
  return(
    <UseContextprovider>
    <h1 className='bg-blue-400'>I am a neeraj nager</h1>
    <Login/>
    <Profile/>
    </UseContextprovider>
  )
}

export default App
