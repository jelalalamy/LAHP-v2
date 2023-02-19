import { useState, useEffect } from 'react'

const Quote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const needNewQuote = localStorage.getItem('needNewQuote');
        if (needNewQuote === 'true' || needNewQuote === null) {
            fetch("https://api.goprogram.ai/inspiration").then((res) => res.json()).then((data) => {
                setQuote(data);
                localStorage.setItem('storedQuote', data.quote);
                localStorage.setItem('needNewQuote', false);
            });
        }
    }, []);

    return (
        <div className='m-auto'>
            <span className='text-lg'>"{quote? quote.quote : localStorage.getItem('storedQuote')}"</span>
        </div>
    )
}

export default Quote