import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
