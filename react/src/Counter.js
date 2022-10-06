import React from 'react'
import { useState } from 'react'

export default function Counter({ onCounterChange }) {

  const [number, setNumber] = useState(0);

  //this is a function
  const plusClick = () => {
    onCounterChange(number + 1)
    setNumber(number + 1)
  }

  //this is also a function
  const minusClick = () => {
    onCounterChange(number - 1)
    setNumber(number - 1)
  }

  return (
    <div>
      <button onClick={minusClick} className='counter-button'>-</button>
      <span>{number}</span>
      <button onClick={plusClick} className='counter-button'>+</button>

      {/* {(number >= 5) && <span>OK ok ok ok </span>} */}

      {number >= 5 ? <span>Ok ok ok ok</span> : <span>Not Ok</span>}


    </div>
  )
}
