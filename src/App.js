import './App.scss';

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
      
      <Footer />
    </div>
  );
}

export default App;
