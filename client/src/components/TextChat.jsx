import React from "react";
import io from "socket.io-client";
import Draggable from 'react-draggable';

class TextChat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // username: '',
            roomName: this.props.roomName ? this.props.roomName : 'Global',
            message: '',
            messages: []
        };

        // this.socket = io('localhost:3001')
        this.socket = io()

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.props.user.name,
                message: this.state.message,
                roomName: this.state.roomName
            });
            this.setState({message: ''});
        }

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]})
            console.log(this.state.messages);
        }
    }
    render(){
        return (
            <Draggable>
            <div className={this.props.textBox}>
                {/* <div className="row"> */}
                    {/* <div className="col-4"> */}
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">{this.props.roomName}</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return(
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                                <div className="footer">
                                    {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/> */}
                                    {/* <br/> */}
                                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                    <br/>
                                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            </div>
            </Draggable>
        );
    }
}

export default TextChat;