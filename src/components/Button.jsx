import React from 'react'

const Button = ({ title, backgroundColor, border,padding,color, test }) => {
  return (
    <>
        <button className={`${backgroundColor} ${border} ${padding} ${color}`} onClick={test}>{title}</button>
    </>
  )
}

export default Button