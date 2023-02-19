import React from 'react'
import { FaCog } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import Quote from './Quote';

const Footer = () => {
  return (
    <div className='flex flex-row mt-auto w-full p-2'>
        <div className='mr-auto'><FaCog size='25px'/></div>
        <div className='m-auto'><Quote/></div>
        <div className='ml-auto'><FaCoffee size='25px'/></div>
    </div>
  )
}

export default Footer