import React from 'react'

const Card = ({image, title, price}) => {
  return (
    <>
        <div className='border border-2 border-dark'>
            <img src={image} alt="" />
            <p className='fs-3'>{title}</p>
            <span>{price}</span>
        </div>
    
    </>
  )
}

export default Card