import React from 'react'
import MenuItem from './MenuItem'
import Weather from './Weather'
import Todo from './Todo'
import Calendar from './Calendar'
import News from './News'
import Fact from './Fact'

const Menu = () => {
    const items = [
        { component: <Weather />, label: 'Check the weather', icon: 'sun', height: 'max-h-60' },
        { component: <Todo />, label: 'See your todo list', icon: 'todo', height: 'max-h-80'},
        { component: <Calendar />, label: 'Open your calendar', icon: 'calendar', height: 'max-h-80'},
        { component: <News />, label: 'Get daily news', icon: 'news', height: 'max-h-80'},
        { component: <Fact />, label: 'Learn something new', icon: 'music', height: 'max-h-80' }
    ]

    return (
        <div className='flex flex-col md:mt-2 justify-center items-center'>
            <span className='m-2 select-none text-center w-full text-xl'>What would you like to do?</span>
            {items.map(item => (<MenuItem key={item.label} item={item}/>))}
        </div>
    )
}

export default Menu