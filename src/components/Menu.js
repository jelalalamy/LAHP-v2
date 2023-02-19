import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
    const items = [
        { component: 'Weather', label: 'Check the weather', icon: 'sun' },
        { component: 'Todo', label: 'See your todo list', icon: 'todo' },
        { component: 'Calendar', label: 'Open your calendar', icon: 'calendar' },
        { component: 'Quote', label: 'Get a new quote', icon: 'quote' },
        { component: 'Music', label: 'Listen to some music', icon: 'music' }
    ]

    return (
        <div className='flex flex-col mt-2 justify-center items-center w-1/5'>
            <span className='m-2'>What would you like to do?</span>
            {items.map(item => (<MenuItem key={item.component} item={item}/>))}
        </div>
    )
}

export default Menu