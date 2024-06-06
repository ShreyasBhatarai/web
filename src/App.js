import React from 'react';
import './App.css';
import Landingpage from './components/Landingpage';
import Service from './components/Service';
import Team from './components/Team';
import Price from './components/Price';
import Navbar from './components/Navbar';
import { HashRouter,Routes,Route } from 'react-router-dom';
import ContactUs from './components/ContactUs'
 
function App() {
  return (
    <>

<HashRouter>
  <Navbar/>
    <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Price" element={<Price/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
    </Routes>
</HashRouter>

  
    </>
  );
}

export default App;
