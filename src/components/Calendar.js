import { useState } from 'react'
import ReactCalendar from 'react-calendar'

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex justify-center">
      <div className='w-96 h-80 flex flex-col border-none py-4'>
        <ReactCalendar calendarType="US" value={date} onChange={setDate} onClickDay={(value, event) => console.log(value)}/>
      </div>
    </div>
  )
}

export default Calendar