import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const MenuItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="border border-transparent rounded-md flex-col justify-center align-center bg-white bg-opacity-10 mt-2">
            <div onClick={toggleOpen} className="px-3 w-96 border border-transparent rounded-md items-center h-12 select-none flex justify-center align-center bg-white bg-opacity-10 hover:cursor-pointer hover:bg-opacity-60 transition">
                <div className='mr-auto invisible'><FaChevronDown /></div>
                <div className=''>{item.label}</div>
                <div className='ml-auto my-auto'><FaChevronDown /></div>
            </div>
            <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-700 ease-in-out ${open ? item.height : "max-h-0"}`}>
                <p className="pb-4 py-2 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus ornare leo nec ultricies. Pellentesque purus velit, iaculis sit amet volutpat at, imperdiet sit amet metus. Etiam accumsan efficitur nibh, eget ornare urna pulvinar id. Cras tempus, elit in sodales vehicula, neque ipsum lobortis eros, nec pulvinar eros magna quis magna. In eleifend pretium sapien, id ornare nisi sollicitudin nec. Etiam diam ante, tempor semper egestas sed, mattis quis sem. Morbi sollicitudin, orci non cursus ornare, tellus nulla ultricies metus, eu tincidunt ligula dui quis dui. Pellentesque sed mollis nisi, quis eleifend odio. Nulla id elit cursus turpis ornare ultricies vel in nibh. Aliquam dignissim aliquet congue. Donec tristique lectus mauris, eu ullamcorper ipsum pharetra et. Duis ultricies arcu ut ex pellentesque, non luctus dolor malesuada. Ut congue sollicitudin tortor, efficitur feugiat dui porta in. Etiam a eros vulputate purus tempus venenatis. Integer in nunc quis lorem tempor consectetur.
                </p>
            </div>
        </div>
    )
}

export default MenuItem