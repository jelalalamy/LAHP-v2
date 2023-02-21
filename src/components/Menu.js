import React from 'react'
import MenuItem from './MenuItem'
import Clock from './Clock'
import Weather from './Weather'

const Menu = () => {
    const items = [
        { component: <Weather />, label: 'Check the weather', icon: 'sun', height: 'max-h-32' },
        { component: <Clock />, label: 'See your todo list', icon: 'todo', height: 'max-h-52'},
        { component: <Clock />, label: 'Open your calendar', icon: 'calendar', height: 'max-h-40'},
        { component: <Clock />, label: 'Get a new quote', icon: 'quote', height: 'max-h-32'},
        { component: <Clock />, label: 'Listen to some music', icon: 'music', height: 'max-h-20' }
    ]

    return (
        <div className='flex flex-col mt-2 justify-center items-center w-1/5'>
            <span className='m-2 select-none text-center w-full text-xl'>What would you like to do?</span>
            {items.map(item => (<MenuItem key={item.component} item={item}/>))}
        </div>
    )
}

export default Menu