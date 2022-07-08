import React from 'react'
import './MealItemForm.css'
const MealItemForm = () => {
  return (
    <form className='form'>
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount"/>
    </form>
  )
}

export default MealItemForm