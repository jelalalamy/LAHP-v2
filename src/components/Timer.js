import { useEffect, useState } from 'react'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [paused, setPaused] = useState(true);
  const [timer, setTimer] = useState();

  useEffect(() => {
    setMinutesLeft(Math.floor(timeLeft / 60));
    setSecondsLeft(timeLeft % 60);
    if (timeLeft === 0) {
      setPaused(true);
      clearInterval(timer);
    }
  }, [timeLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const start = () => {
    if (timeLeft > 0 && paused) {
      setPaused(false);
      const timer = setInterval(() => {
        setTimeLeft((timeLeft) => (timeLeft) - 1);
        if (timeLeft === 0) {
          setPaused(true);
          clearInterval(timer);
        }
      }, 1000);
      setTimer(timer);
    }
  };

  const stop = () => {
    clearInterval(timer);
    setPaused(true);
  };

  const updateMinutes = (val) => {
    setMinutesLeft(val + parseInt(minutesLeft));
    setTimeLeft((parseInt(val) + parseInt(minutesLeft)) * 60 + parseInt(secondsLeft));
  };

  const updateSeconds = (val) => {
    setSecondsLeft(val + parseInt(secondsLeft));
    setTimeLeft(parseInt(minutesLeft) * 60 + parseInt(val) + parseInt(secondsLeft));
  };

  return (
    <div className="flex justify-center">
      <div className='w-96 h-60 flex flex-col border-none py-4 justify-center select-none'>
        <div className='mx-auto flex flex-row text-6xl'>
          <span className="mx-auto">
            {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
          </span>
        </div>
        {paused ?
          <div className='mx-auto mt-2 flex flex-row text-gray-300 hover:text-white'>
            <button onClick={start}>Start</button>
          </div>
          :
          <div className='mx-auto mt-2 flex flex-row text-gray-300 hover:text-white'>
            <button onClick={stop}>Stop</button>
          </div>}
        <div className='mx-auto mt-2 flex flex-row text-gray-300'>
          <button onClick={() => setTimeLeft(0)}>Clear</button>
        </div>
        <div className='mx-auto mt-2 flex flex-row text-gray-300 text-xl'>
          <div className='flex flex-row mr-3 select-none tracking-wider'>
            <div className='mx-2 hover:cursor-pointer hover:text-white' onClick={() => updateMinutes(10)}>+10</div>
            <div className='mx-2 hover:cursor-pointer hover:text-white' onClick={() => updateMinutes(5)}>+5</div>
            <div className='mx-2 hover:cursor-pointer hover:text-white' onClick={() => updateMinutes(1)}>+1</div>
          </div>
          <div className='flex flex-row ml-3'>
          <div className='mx-2 hover:cursor-pointer hover:text-white' onClick={() => updateSeconds(1)}>+1</div>
            <div className='mx-2 hover:cursor-pointer hover:text-white' onClick={() => updateSeconds(5)}>+5</div>
            <div className='mx-2 hover:cursor-pointer hover:text-white' onClick={() => updateSeconds(10)}>+10</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer