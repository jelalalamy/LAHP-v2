import { useState } from 'react'

const Settings = () => {
  const [bgUrl, setBgUrl] = useState(localStorage.getItem('bgUrl') || '');
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  const onBgUrlChange = (e) => {
    setBgUrl(e.target.value)
  }

  const onBgUrlKeyDown = (e) => {
    if (e.key === 'Enter') {
      localStorage.setItem('bgUrl', bgUrl)
      window.location.reload();
    }
  }

  const onUserChange = (e) => {
    setUser(e.target.value)
  }

  const onUserKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (user.length > 0) {
        localStorage.setItem('user', user)
        window.location.reload();
      }
    }
  }

  return (
    <div className='fixed left-0 bottom-0 w-80 h-96 flex flex-col border-none py-4 justify-top select-none mb-12 ml-2 p-3 bg-black bg-opacity-70 rounded-md'>
      <span className='text-xl mb-1'>Settings</span>
      <p className='text-sm leading-relaxed mb-1'>
        Enter an image URL to change the background image (requires a refresh):
      </p>
      <input className='mt-2 mr-8 appearance-none bg-transparent focus:outline-none focus:placeholder-transparent border-b focus:border-current'
        type="text"
        value={bgUrl}
        placeholder='Image URL...'
        onChange={onBgUrlChange}
        onKeyDown={onBgUrlKeyDown} />
      <p className='text-sm leading-relaxed mt-6'>
        If the background did not change then the URL may be incorrect or broken.
      </p>
      <p className='text-sm leading-relaxed mt-3 mb-1'>
        Change username (requires refresh):
      </p>
      <input className='mt-2 mr-8 appearance-none bg-transparent focus:outline-none focus:placeholder-transparent border-b focus:border-current'
        type="text"
        value={user}
        placeholder='Username...'
        onChange={onUserChange}
        onKeyDown={onUserKeyDown} />
      <p className='text-sm leading-relaxed mt-auto'>
        More settings coming soon!
      </p>
    </div>
  )
}

export default Settings