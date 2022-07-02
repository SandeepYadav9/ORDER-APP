import React, { Fragment } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

const Food = () => {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <Meals/>
    </Fragment>
  )
}

export default Food
