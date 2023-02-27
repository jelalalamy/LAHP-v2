import { useState } from 'react'
import { FaCog } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import About from './About';
import Settings from './Settings';
import Quote from './Quote';

const Footer = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  }

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  }

  return (
    <div className='flex flex-row mt-auto w-full p-3'>
      <div onClick={toggleSettings} className='mr-auto hover:cursor-pointer'>
        <FaCog className='text-gray-200 hover:text-white hover:rotate-12 hover:scale-110 transition-transform' size='25px' />
      </div>
      {settingsOpen && <Settings/>}
      <div className='m-auto'><Quote /></div>
      <div onClick={toggleAbout} className='ml-auto hover:cursor-pointer'>
        <FaInfoCircle className='text-gray-200 hover:text-white hover:scale-110 transition-transform' size='25px' />
      </div>
      {aboutOpen && <About/>}
    </div>
  )
}

export default Footer