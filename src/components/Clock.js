import { useState, useEffect } from 'react'

const Clock = () => {
    const [date, setDate] = useState(new Date());

    const refreshClock = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(refreshClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex w-1/3 justify-center">
            <span className="text-9xl m-auto">
                {date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' })}
            </span>
        </div>
    )
}

export default Clock