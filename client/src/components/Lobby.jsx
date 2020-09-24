import React from 'react';

const Lobby = (
    // username,
    // handleUsernameChange,
    // roomName,
    // handleRoomNameChange,
    // handleSubmit
    props
) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <h2>Enter a Room</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="field"
                    name="username"
                    value={props.username}
                    onChange={props.handleChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="room">Room name:</label>
                <input
                    type="text"
                    id="room"
                    name="roomName"
                    value={props.roomName}
                    onChange={props.handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Lobby