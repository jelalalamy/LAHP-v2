import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const MenuItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="border border-transparent rounded-md flex-col justify-center align-center bg-white bg-opacity-10 mt-2 w-96">
            <div onClick={toggleOpen} className="px-3 min-w w-full border border-transparent rounded-md items-center h-12 select-none flex justify-center align-center bg-white bg-opacity-10 hover:cursor-pointer hover:bg-opacity-60 transition">
                <div className='mr-auto invisible'><FaChevronDown /></div>
                <div className=''>{item.label}</div>
                <div className='ml-auto my-auto'><FaChevronDown /></div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-700 ease-in-out ${open ? item.height : "max-h-0"}`}>
                {item.component}
            </div>
        </div>
    )
}

export default MenuItem