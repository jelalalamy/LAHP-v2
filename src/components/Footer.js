import React from 'react'
import { FaCog } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Quote from './Quote';

const Footer = () => {
  return (
    <div className='flex flex-row mt-auto w-full p-3'>
        <div className='mr-auto hover:cursor-pointer'><FaCog size='25px'/></div>
        <div className='m-auto'><Quote/></div>
        <div className='ml-auto hover:cursor-pointer'><FaInfoCircle size='25px'/></div>
    </div>
  )
}

export default Footer