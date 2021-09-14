 
import React, { useState, useEffect, useRef } from 'react'; 
import Participant from './Participant';
function Room ( {room, debateTitle} ){ 

    const videoRef = useRef();
    const audioRef = useRef();

    const [participants, setParticipants] = React.useState([]);
    // Log your Client's LocalParticipant in the Room
    const localParticipant = room.localParticipant;
 

    const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
        .map((publication) => publication.track)
        .filter((track) => track !== null);

    const videoTracksArr = trackpubsToTracks( localParticipant.videoTracks) 

    videoTracksArr[0].attach(videoRef.current);
    // Log any Participants already connected to the Room
    room.participants.forEach(participant => {
    console.log(`Participant "${participant.identity}" is connected to the Room`);
    });
 
    
  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

    return (
        <div>
           <header>
              {debateTitle}
           </header>  
            <Participant participant={localParticipant} />

            <h3>Remote Participants</h3>
            <div className="remote-participants">{remoteParticipants}</div>
        </div>
     ) 
}

export default Room

 