import React from 'react'
import Clock from './Clock'
import Greeting from './Greeting'
import Menu from './Menu'

const CenterDisplay = () => {
  return (
    <div className='flex sm: flex-col md:flex-col lg:flex-row w-full items-center justify-evenly'>
      <div>
        <Clock />
        <Greeting />
      </div>
      <Menu />
    </div>
  )
}

export default CenterDisplay