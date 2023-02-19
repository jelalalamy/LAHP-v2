import React from 'react'
import Clock from './Clock'
import Greeting from './Greeting'
import Menu from './Menu'

const CenterDisplay = () => {
  return (
    <div className='flex flex-col w-full items-center'>
        <Clock/>
        <Greeting/>
        <Menu/>
    </div>
  )
}

export default CenterDisplay