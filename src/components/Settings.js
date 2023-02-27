import { useState } from 'react'

const Settings = () => {
  const [bgUrl, setBgUrl] = useState(localStorage.getItem('bgUrl') || '');

  const onChange = (e) => {
    setBgUrl(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('bgUrl', bgUrl)
      window.location.reload();
    }
  }

  return (
    <div className='fixed left-0 bottom-0 w-80 h-80 flex flex-col border-none py-4 justify-top select-none mb-12 ml-2 p-3 bg-black bg-opacity-70 rounded-md'>
      <span className='text-xl mb-1'>Settings</span>
      <p className='text-sm leading-relaxed mb-1'>
        Enter an image URL to change the background image (requires a refresh):
      </p>
      <input className='mt-2 mr-8 appearance-none bg-transparent focus:outline-none focus:placeholder-transparent border-b focus:border-current'
        type="text"
        value={bgUrl}
        placeholder='Image URL...'
        onChange={onChange}
        onKeyDown={onKeyDown} />
      <p className='text-sm leading-relaxed mt-6'>
        Leave empty and press enter to return to the default (dark grey) background.
      </p>
      <p className='text-sm leading-relaxed mt-2'>
        If the background appears as a very light grey, the URL may be incorrect.
      </p>
      <p className='text-sm leading-relaxed mt-auto'>
        More settings coming soon!
      </p>
    </div>
  )
}

export default Settings