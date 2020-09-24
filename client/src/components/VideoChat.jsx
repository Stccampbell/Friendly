import React, { Component, useCallback } from 'react';

import Lobby from './Lobby';
import Room from './Room';


class VideoChat extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            roomName: '',
            token: null,
        }
    }

    // handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    // };
    
    // handleRoomNameChange = (event) => {
    //     setRoomName(event.target.value)
    // };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('/communication/video/token', {
            method: 'POST',
            body: JSON.stringify({
                identity: this.state.username,
                room: this.state.roomName
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data.token)
            this.setState({
                token: data.token, 
            });
        })
        .then((data) => {
            console.log(this.state.token)
        });
    };

    handleLogout = (event) => {
        this.setState({
            token: null,
        })
    };

    whichRender = () => {
        if(this.state.token) {
            return <Room roomName={this.state.roomName} token={this.state.token} handleLogout={this.handleLogout} />
        }
        else {
            return <Lobby
            username={this.state.username}
            roomName={this.state.roomName}
            // handleUsernameChange={this.handleUsernameChange}
            // handleRoomNameChange={this.handleRoomNameChange}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            />
        }
    }

    render(){
        return(this.whichRender())
    }
};

export default VideoChat;