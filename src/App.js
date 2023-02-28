import './styles/App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import CenterDisplay from './components/CenterDisplay';
import Footer from './components/Footer';

function App() {
  const [hasBg, setHasBg] = useState(false);

  useEffect(() => {
    const bgUrl = localStorage.getItem('bgUrl');
    if (bgUrl) {
      setHasBg(true);
    }
  }, []);

  return (
    <div id="App" className="flex flex-col h-screen items-center overflow-hidden text-base"
      style={localStorage.getItem('bgUrl') ? {
        background: `rgba(0, 0, 0, 0.35) url(${localStorage.getItem('bgUrl')})`,
        backgroundBlendMode: 'darken',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      } : {backgroundColor: 'rgb(20, 20, 20)'}}>
      <Header />
      <CenterDisplay />
      <Footer />
    </div>
  );
}

export default App;
