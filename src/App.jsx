import React from 'react'
import Hooks from './Hooks'
import Home from './Home'
    // import yup from yup
import Button from './components/Button'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './SignupPage'
import SigninPage from './SigninPage'
import Dashboard from './Dashboard'


const App = () => {
  const name = "Temiloluwa"

  const alertMe = ()=> {
    alert(`I am ${name} by name`)
  }

  const add = (a,b)=> {
    const sum = a + b;
    alert(sum)
  }


  return (
    <>
      {/* <h1>Hello {name}</h1>
      <button onClick={alertMe}>Click me</button>
      <button onClick={() => add(3,6)}>Add</button>
      <Hooks/> */}
      {/* <Home/> */}
        {/* <Contact/> */}

        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/' element={<SignupPage/>} />
          <Route path='/login' element={<SigninPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>

              
  </>
  )
}

export default App