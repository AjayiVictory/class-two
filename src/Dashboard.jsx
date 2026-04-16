import React, { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [allUsers, setallUsers] = useState([])

    axios.get('http://localhost:5555/user/registeredUsers')
    // .then(res => res.json())
      .then(result => {
        // console.log(result.data.users)
        setallUsers(result.data.users)
      })
      .catch(err => {
        console.log(err)
      })

  return (
    <>
    {allUsers.map(user => (
      <div>
        <p>Firstname: {user.firstName}</p>
        <p>Lastname: {user.lastName}</p>
        <p>Email: {user.email}</p>
      </div>
        
    ))}
    </>

  )
}

export default Dashboard