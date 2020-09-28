import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// import './App.css';

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';

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
      rooms: null,
      currentRoom: null,
    }
  }

  componentDidMount() {
    fetch('/api/auth/verify', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err));
  }

  getAllRooms = () => {
    fetch('/api/rooms/al;sdjhfajshdfk;jashdf', { 
      credentials: 'include' 
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        rooms: res.data.rooms
      })
    })

  }

  handleLoginSubmit = (e, data) => {
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit = (e, data) => {
    e.preventDefault();
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      this.setState({
        auth: res.auth,
        user: res.data.user
      })
    }).catch(err => console.log(err));
  }

  logout = () => {
    fetch('/api/auth/logout', {
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        auth: res.auth,
        user: res.data.user,
      })
    }).catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
          <Header logout={this.logout} auth={this.state.auth}/>
            <div>
            <Route exact path='/Login' render={() => (
                this.state.auth
                ? <Redirect to='/' />
                : <Login handleLoginSubmit={this.handleLoginSubmit} />
              )} />

            <Route exact path='/Register' render={() => (
              this.state.auth
              ? <Redirect to='/' />
              : <Register handleRegisterSubmit={this.handleRegisterSubmit}/>
            )} />

            <Route exact path='/' render={() => (
                !this.state.auth
                ? <Redirect to='/Login' />
                : <VideoChat user={this.state.user}/>
              )} />
              
            </div>
      </div>
    );
  }
}

export default App;
