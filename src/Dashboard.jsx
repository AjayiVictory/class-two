import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

   let navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.token
        
        let url = "http://localhost:5555/user/dashboard"
        axios.get(url,{
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            if(err.response && err.response.status === 401){
                localStorage.removeItem('token')
                navigate("/login")
            }
            console.error("Error:",err.response?err.response.data:err);
        })
    }, [navigate])


  return (
    <>

      <div>
        <h1>Welocme to dashboard</h1>
      </div>
        
    </>

  )
}

export default Dashboard