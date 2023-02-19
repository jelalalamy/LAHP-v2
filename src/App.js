import './styles/App.css';
import Header from './components/Header';
import CenterDisplay from './components/CenterDisplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col h-screen items-center">
      <Header/>
      <CenterDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
