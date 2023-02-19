import React from 'react'
import { FaCog } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Quote from './Quote';

const Footer = () => {
  return (
    <div className='flex flex-row mt-auto w-full p-3'>
        <div className='mr-auto hover:cursor-pointer'><FaCog className='text-gray-200 hover:text-white hover:rotate-12 hover:scale-110 transition-transform' size='25px'/></div>
        <div className='m-auto'><Quote/></div>
        <div className='ml-auto hover:cursor-pointer'><FaInfoCircle className='text-gray-200 hover:text-white hover:scale-110 transition-transform' size='25px'/></div>
    </div>
  )
}

export default Footer