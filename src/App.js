import logo from './logo.svg';
import './App.css';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeroSection from './components/hero/hero';
import Home from './components/home/home';




function App() {
  return (
    <div className="App">
      
      <Header/>
      <HeroSection/>
      <Home />

      <header className="App-header">
        
        <h2>
          Edit <code>src/App.js</code> and save to reload.
        </h2>

      </header>

      <Footer />
    </div>
  );
}

export default App;
