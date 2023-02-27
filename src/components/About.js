import React from 'react'

const About = () => {
    return (
        <div className='fixed right-0 bottom-0 w-80 h-64 flex flex-col border-none py-4 justify-top select-none mb-12 mr-2 p-3 bg-black bg-opacity-60 rounded-md'>
            <span className='text-xl mb-1'>About</span>
            <p className='text-sm leading-relaxed mb-1'>
                LAHP (La HomePage) is a project I began for fun in Fall 2021 when I began learning web dev. It is heavily inspired
                by <a className='text-gray-300' href='https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en'>Momentum</a>,
                which is another fantastic (and free) extension.
            </p>
            <p className='text-sm leading-relaxed mb-1'>
                Here's where I'd ask you for a coffee ... but there's no need. 
            </p>
            <p className='text-sm leading-relaxed mb-1'>
                Oh, and feel free to check out the repo <a className='text-gray-300' href="https://github.com/jelalalamy/LAHP-v2">here</a>.
            </p>
            <p className='text-sm leading-relaxed'>
                Thanks for giving LAHP a try!
            </p>
        </div>
    )
}

export default About