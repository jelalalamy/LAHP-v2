import { useState, useEffect } from 'react'

const Greeting = () => {
  const [userExists , setUserExists] = useState(false);
  const [user, setUser] = useState('');

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'morning';
    } else if (hour < 18) {
      return 'afternoon';
    } else {
      return 'evening';
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', e.target.user.value);
    setUserExists(true);
    e.target.reset();
  }

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(user);
      setUserExists(true);
    }
  }, []);

  return (
    <div className='flex justify-center py-2'>
      {!userExists ? (
        <form onSubmit={onSubmit}>
          <div className="flex items-center border-b border-current py-2 text-xl">
            <input className="appearance-none bg-transparent w-72 border-none m-auto py-1 px-2 leading-tight focus:outline-none focus:placeholder-transparent text-center"
              type="text"
              name="user"
              placeholder="Greetings! What's your name?"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        </form>) : (
        <span className="text-xl select-none">Good {getTimeOfDay()}, {user}.</span>
      )}
    </div>
  )
}

export default Greeting