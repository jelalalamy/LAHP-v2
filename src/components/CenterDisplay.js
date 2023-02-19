import React from 'react'
import Clock from './Clock'
import Greeting from './Greeting'

const CenterDisplay = () => {
  return (
    <div className='flex flex-col w-full items-center'>
        <Clock/>
        <Greeting/>
    </div>
  )
}

export default CenterDisplay