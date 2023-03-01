import { useState, useEffect } from 'react'

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const lastQuoteUpdate = localStorage.getItem('lastQuoteUpdate');
    const now = new Date();
    if ((now - (new Date(lastQuoteUpdate)) > DAY) || lastQuoteUpdate === null) {
      fetch("https://api.goprogram.ai/inspiration").then((res) => res.json()).then((data) => {
        setQuote(data);
        localStorage.setItem('storedQuote', data.quote);
        localStorage.setItem('lastQuoteUpdate', now);
      });
    }
  }, []);

  return (
    <div className='m-auto'>
      <span className='text-lg'>"{quote ? quote.quote : localStorage.getItem('storedQuote')}"</span>
    </div>
  )
}

export default Quote