import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [age, setAge] = useState(20)
    const [foods, setFoods] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect(() => {
      fetch('https://mongotest2026.vercel.app/api/foods') 
      .then(res => res.json())
      .then(result => {
        setFoods(result.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
    
  return (
    <>
        {/* <h1>I am {age} years old</h1>
        <button onClick={() => setAge(age + 1)}>Increase Age</button>
        <p>{age}</p> */}

        {isLoading ? 
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>: (
            <div>
                {foods.map(food => (
                    <p>{food.id}. {food.name}</p>
                ))}
            </div>
        )}
    </>
  )
}

export default Contact