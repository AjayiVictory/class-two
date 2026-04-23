import React from 'react'
import Hooks from './Hooks'
import Home from './Home'
import Class from './components/Class'
    // import yup from yup
import Button from './components/Button'
import Contact from './Contact'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignupPage from './SignupPage'
import SigninPage from './SigninPage'
import Dashboard from './Dashboard'
import NotFoundPage from './NotFoundPage'
import Card from './Card'


const App = () => {
  
  let token = localStorage.token

  return (
    <>
        <Routes>
          <Route path='/dashboard' element={token ? <Dashboard /> : <Navigate to="/login" replace />} />      
          <Route path='/' element={<SignupPage/>} />
          <Route path='/login' element={<SigninPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
          {/* <Route path='/class' element={<Class/>} /> */}
          {/* <Route path='/hooks' element={<Hooks/>} />
          <Route path='/Home' element={<Home />}/>
          <Route path='/contact' element={<Contact/>} /> */}
          {/* <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='/profile' element={<Profile/>} />
              <Route path='/overview' element={<Overview/>} />
              <Route path='/settings' element={<Settings/>} />
          </Route> */}
            {/* Redirect /signin to /login */}
            <Route path="/signin" element={<Navigate to="/login" replace />} />
          {/* <Route path={`/profile/:${id}`} element={<Dashboard/>}> */}
        </Routes>
{/* 
            <Card image="/icons.svg" title="Fridge" price="5000" />
            <Card image="/icons.svg" title="Orange" price="700" />
            <Card image="/icons.svg" title="Phone" price="500" />
            <Card image="/icons.svg" title="Wristwatch" price="9000" /> */}
              
  </>
  )
}

export default App