import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import VideoChat from './components/VideoChat';
import TextChat from './components/TextChat';
import Login from './components/Login'
import Register from './components/Register'


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        </header>
            {/* <VideoChat/> */}
            <TextChat />

       


      </div>
    );
  }
}

export default App;
