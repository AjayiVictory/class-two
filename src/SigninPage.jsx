import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SigninPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const signIn = (e) => {
        e.preventDefault()

        const credentials = {email, password}

        axios.post('https://node-class-xg4u.onrender.com/user/login', credentials)
            .then(response => {
                alert('Login successful')
                console.log(response.data.firstName)
                navigate('/dashboard')
            })
            .catch(error => {
                console.error('Error logging in:', error)
                alert('Login failed')
            })
    }


  return (
    <>
        <form >
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={(e) => {signIn(e)}}>Sign In</button>
        </form>
    </>
  )
}

export default SigninPage