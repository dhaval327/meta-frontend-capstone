import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
