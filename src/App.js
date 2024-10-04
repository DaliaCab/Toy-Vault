import React from "react";
import MainSections from './components1/MainSections';
import About from './components1/About';
import Header from './components1/Header';
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

