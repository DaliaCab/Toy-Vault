import React from "react";
import MainSections from './Components/MainSections';
import About from './Components/About';
import Header from './Components/Header';
import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <MainSections />
      <About />
    </div>
  );
}

export default App;

