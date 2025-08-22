import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Children } from 'react'
import Layout from './layout.jsx'
import About from './components/about/about'
import Contact from './components/contact/contect.jsx'
import Footer from './components/footer/ffooter.jsx'
import Header from './components/header/hheader.jsx'
import Home from './components/home/hhome.jsx'
import User from './components/user/User.jsx'
import Loderfunction from './components/github/github.jsx'
import Github from './components/github/github.jsx'
import {Route, RouterProvider , Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="about" element={<About/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route 
      loader={Loderfunction}
      path="Github" 
      element={<Github/>}/>
      <Route path="User/:userid" element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
