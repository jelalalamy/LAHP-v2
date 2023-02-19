import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const MenuItem = ({ item }) => {
    return (
        <div className='w-full border border-transparent rounded-md flex justify-center align-center m-2 p-2 bg-white bg-opacity-10 hover:cursor-pointer hover:bg-opacity-60'>
            <div className='mr-auto invisible'><FaChevronRight /></div>
            <div className=''>{item.label}</div>
            <div className='ml-auto my-auto'><FaChevronRight /></div>
        </div>
    )
}

export default MenuItem