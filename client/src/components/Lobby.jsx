import React from 'react';

const Lobby = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <h2>Enter a Room</h2>
            <p>For the fair enter "SEI"</p>
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