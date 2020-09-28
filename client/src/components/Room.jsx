import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Video from 'twilio-video';
import Participant from './Participant';



const Room = (props) => {
    const [room, setRoom] = useState(null);
    const [participants, setParticipants] = useState([]);

    const remoteParticipants = participants.map(participant => (
        <Participant key={participant.sid} participant={participant} />
    ))

    useEffect(() => {
        const participantConnected = participant => {
          setParticipants(prevParticipants => [...prevParticipants, participant]);
        };
        const participantDisconnected = participant => {
          setParticipants(prevParticipants =>
            prevParticipants.filter(p => p !== participant)
          );
        };
        Video.connect(props.token, {
          name: props.roomName
        }).then(room => {
          setRoom(room);
          room.on('participantConnected', participantConnected);
          room.on('participantDisconnected', participantDisconnected);
          room.participants.forEach(participantConnected);
        });
        return () => {
            setRoom(currentRoom => {
              if (currentRoom && currentRoom.localParticipant.state === 'connected') {
                currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
                  trackPublication.track.stop();
                });
                currentRoom.disconnect();
                return null;
              } else {
                return currentRoom;
              }
            });
          };
      }, [props.roomName, props.token]);

    return (
        <div className="room">
          <div className="titleOptions">
            <h2>Room: {props.roomName}</h2>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Options
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" onClick={props.handleLogout} to="/">Leave Meeting</Link>
                  <a className="dropdown-item" onClick={props.toggleTextBox}>{props.textBox === 'container textBox hidden' ? 'Show Chat' : "Hide Chat"}</a>
                </div>
            </div>
            </div>
            <div className="participants">
                {room? (
                  <>
                  <Participant
                      key={room.localParticipant.sid}
                      participant={room.localParticipant}
                  />
                  </>
                  ) : (
                    ''
                  )}
                {remoteParticipants}
              </div>
        </div>
    )
}

export default Room;