import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';

const App = () => {
  // console.log("App component is rendering");
  return (
    <>
     <Navbar/> 
     <Home/>
    {/* <Footer/> */}
    <Main/> 
    </>

  )
};
export default App;
