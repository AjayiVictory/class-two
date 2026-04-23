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

        axios.post('http://localhost:5555/user/login', credentials)
            .then(response => {
               if (response.data.message === "Login Successful") {
                    alert("Welcome back!");
                    localStorage.token = response.data.user.token
                    // Redirect only when confirmed
                    navigate("/dashboard");
                } else {
                    alert(response.data.message || "Invalid credentials");
                }
            })
            .catch((err) => {
                console.error("Error:", err.response ? err.response.data : err);
                alert("Login failed. Please check your email or password.");
            });
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