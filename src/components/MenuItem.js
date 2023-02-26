import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const MenuItem = ({ item }) => {
    const [open, setOpen] = useState(item.open);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="border border-transparent rounded-md flex-col justify-center align-center bg-white bg-opacity-10 mt-2">
            <div onClick={toggleOpen} className="px-3 min-w w-full border border-transparent rounded-md items-center h-12 select-none flex justify-center align-center bg-white bg-opacity-10 hover:cursor-pointer hover:bg-opacity-60 transition">
                <div className='mr-auto invisible'><FaChevronDown /></div>
                <div className=''>{item.label}</div>
                <div className='ml-auto my-auto'><FaChevronDown /></div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-all duration-700 ease-in-out ${open ? item.height : "max-h-0"}`}>
                {item.component}
            </div>
        </div>
    )
}
/* <div className={`px-6 pt-0 overflow-hidden transition-all duration-700 ease-in-out ${open ? "max-w-96" : "max-w-xs"} ${open ? item.height : "max-h-0"}`}>
    {item.component}
</div> */
/*
<div className="border-none border-transparent rounded-md flex-col justify-center align-center bg-black bg-opacity-60 mt-2">
<div onClick={toggleOpen} className="px-3 min-w w-full border border-transparent rounded-md items-center h-12 select-none flex justify-center align-center bg-white bg-opacity-5 hover:cursor-pointer hover:bg-opacity-60 transition">
*/
export default MenuItem