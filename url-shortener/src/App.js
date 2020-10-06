import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ActionCall from './components/ActionCall/ActionCall';
import LinkForm from './components/LinkForm/LinkForm';
import BoostLinks from './components/BoostLinks/BoostLinks';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ActionCall />
      <LinkForm />
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
