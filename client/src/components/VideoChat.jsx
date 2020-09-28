import React, { Component, useCallback } from 'react';
import io from "socket.io-client";

import Lobby from './Lobby';
import Room from './Room';
import TextChat from './TextChat';


class VideoChat extends Component {
    constructor(props){
        super(props);
        this.state = {
            // username: '',
            roomName: '',
            token: null,
            textBox: 'container textBox hidden',
        }
        // this.socket = io('localhost:3001')
        this.socket = io()
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

    toggleTextBox = () => {
        if(this.state.textBox === 'container textBox hidden'){
            this.setState({
                textBox: 'container textBox'
            })
        }
        else{
            this.setState({
                textBox: 'container textBox hidden'
            })
        }
    }
    // joinMessageRoom = () => {
    //         this.socket.emit('JOIN_ROOM', {
    //             roomName: this.state.roomName
    //         });
    //     }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('/communication/video/token', {
            method: 'POST',
            body: JSON.stringify({
                identity: this.props.user.name,
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
            // this.joinMessageRoom()
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
            return (
                <>
                <TextChat user={this.props.user} roomName={this.state.roomName} textBox={this.state.textBox}/>
                <Room roomName={this.state.roomName} token={this.state.token} handleLogout={this.handleLogout} toggleTextBox={this.toggleTextBox} textBox={this.state.textBox}/>
                {/* <TextChat user={this.props.user} roomName={this.state.roomName} textBox={this.state.textBox}/> */}
                </>
            )
        }
        else {
            return <Lobby
            // username={this.props.user.name}
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