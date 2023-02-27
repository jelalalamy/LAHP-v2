import { useState, useEffect } from 'react'

const Reminder = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    if (localStorage.getItem('reminders')) {
      let foundReminders = JSON.parse(localStorage.getItem('reminders'))
      setReminders(foundReminders)
      foundReminders.forEach(reminder => {
        const date = new Date(reminder.date);
        const now = new Date();
        if (date < now) {
          window.alert(`Reminder on ${reminder.date}: ${reminder.text}`);
          const newReminders = foundReminders.filter(r => r !== reminder);
          setReminders(newReminders);
          localStorage.setItem('reminders', JSON.stringify(newReminders));
        }
      })
    } else { 
      localStorage.setItem('reminders', JSON.stringify([])) 
    }
  }, []);

  const addNewReminder = () => {
    const newReminders = [...reminders, { date: newDate, text: newReminder }];
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
  }

  const onChangeReminder = (e) => {
    setNewReminder(e.target.value);
  }


  const onChangeDate = (e) => {
    setNewDate(e.target.value);
  }

  const onSetReminder = () => {
    addNewReminder();
    setNewReminder('');
    setNewDate('');
  }

  return (
    <div className="flex justify-center">
      <div className='w-96 h-60 flex flex-col border-none py-4 justify-center select-none'>
        <label>Set a reminder for...</label>
        <input className='appearance-none bg-transparent focus:outline-none focus:placeholder-transparent border-b focus:border-current py-1 mb-3'
          type="text"
          value={newReminder}
          placeholder='Enter a reminder...'
          onChange={onChangeReminder} />
        <label>On date...</label>
        <input className='appearance-none bg-transparent focus:outline-none focus:placeholder-transparent border-b focus:border-current py-1 mb-3'
          type="date"
          value={newDate}
          placeholder='Select a date...'
          onChange={onChangeDate} />
        <div className='mx-auto mt-2 flex flex-row text-gray-300 hover:text-white'>
          <button onClick={onSetReminder}>Set Reminder!</button>
        </div>
      </div>
    </div>
  )
}

export default Reminder