import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import VideoChat from './components/VideoChat';
import TextChat from './components/TextChat';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth: false,
      user: null,
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
            <div>
            <Route exact path='/login' render={() => (
                this.state.auth
                ? <Redirect to='/' />
                : <Login />
              )} />

            <Route exact path='/register' render={() => (
              this.state.auth
              ? <Redirect to='/' />
              : <Register/>
            )} />

            <Route exact path='/VideoChat' render={() => (
                this.state.auth
                ? <Redirect to='/' />
                : <VideoChat />
              )} />

            <Route exact path='/TextChat' render={() => (
                this.state.auth
                ? <Redirect to='/' />
                : <TextChat />
              )} />
              
            </div>
      </div>
    );
  }
}

export default App;
