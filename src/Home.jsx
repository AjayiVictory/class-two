import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './components/Button'

const Home = () => {
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


  const test1 = () => {
    alert('I am the multiply button')
  }

    const test2 = () => {
    alert('I am the subtraction button')
  }

    const test3 = () => {
    alert('I am the addition button')
  }
    
    
  return (
    <>
        {/* {isLoading ? 
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>: (
            <div>
                {foods.map(food => (
                    <p>{food.id}. {food.name}</p>
                ))}
            </div>
        )} */}

        <Link to="/contact"><button>Contact</button></Link>



      {/* <Button title="Subtract" test={test2}/>
      <Button title="Add" test={test3 }/>
      <Button 
        title="Multiply" 
        backgroundColor='bg-primary'
        border='border border-none'
        padding= 'px-4 py-3'
        color='text-white'
        test={test1}
      /> */}
    </>
  )
}

export default Home