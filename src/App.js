import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Page from './Components/Page/Pages';
import Contact from './Components/Contact/Contact';
// import Popup from './Components/Popup/Popup';
// import Popup from './Popup';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main />
      <About />
      <Page />
      <Contact/>
      <Footer />
      {/* <Popup /> */}
    </div>
  );
}

export default App;


