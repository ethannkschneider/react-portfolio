import { HashRouter } from 'react-router-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
