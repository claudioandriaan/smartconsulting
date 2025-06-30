import React, { useState , useEffect} from 'react';
import './App.css'
import Home from './pages/Home.jsx'
import Header from './components/Header';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  AOS.init({
      duration: 1000, // Durée des animations
      once: true,     // Ne s'anime qu'une fois
    });
  }, []);

  return (
    <>
      <div>
        <Home />        
      </div>    
    </>
  )
}

export default App
