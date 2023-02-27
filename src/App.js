import './styles/App.css';
import Header from './components/Header';
import CenterDisplay from './components/CenterDisplay';
import Footer from './components/Footer';

function App() {

  return (
    <div id="App" className="flex flex-col h-screen items-center overflow-hidden"
      style={localStorage.getItem('bgUrl') ? {
        background: `rgba(0, 0, 0, 0.35) url(${localStorage.getItem('bgUrl')})`,
        backgroundBlendMode: 'darken',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      } : {backgroundColor: 'rgb(29, 29, 29)'}}>
      <Header />
      <CenterDisplay />
      <Footer />
    </div>
  );
}

export default App;
