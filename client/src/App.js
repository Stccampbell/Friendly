import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoChat from './components/VideoChat';
import TextChat from './components/TextChat';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
            {/* <VideoChat/> */}
            <TextChat />
        </header>
      </div>
    );
  }
}

export default App;
