import React, { useState } from 'react'

const Hooks = () => {
    const [firstName, setFirstName] = useState('Uthman')
    const [newName, setNewName] = useState("")


    const getName = (e) => {
        setNewName(e.target.value)
    }

    const changeName = () => {
        setFirstName(newName)

    }










    return (
        <>
            <h1>My name is {firstName}</h1>
            <input type="text" onChange={(e) => getName(e)} />
            <button onClick={changeName}>Change Name</button>   
            {/* <p>{name}</p> */}
        </>
    )
}

export default Hooks