 
import React from 'react';
import getDebate from '../functions/GetDebate';

const { connect,createLocalTracks } = require('twilio-video');

function getSecondPart(str, delimeter) {
   return str.split(delimeter)[1];
}

function getTokenFromDebate(debateObj){
   return debateObj.debateToken
}

function DebateRoom(props) {
   const [debateTitle, setDebateTitle] = React.useState("placeholder"); 
   const [token, setToken] = React.useState("");  

   React.useEffect(() => {




      function connectToDebate(token,title){
         console.log(`title: ${title} `)
         createLocalTracks({
            audio: true,
            video: { width: 640 }
          }).then(localTracks => {
            return connect(token, {
              name: title,
              tracks: localTracks
            });
          }).then(room => {
            console.log(`Successfully JOINED a Room: ${room}`);
            console.log("a Room: ", room);

            // Log your Client's LocalParticipant in the Room
            const localParticipant = room.localParticipant;
            console.log(`Connected to the Room as LocalParticipant "${localParticipant.identity}"`);

            // Log any Participants already connected to the Room
            room.participants.forEach(participant => {
            console.log(`Participant "${participant.identity}" is connected to the Room`);
            });

            // Log new Participants as they connect to the Room
            room.once('participantConnected', participant => {
            console.log(`Participant "${participant.identity}" has connected to the Room`);
            });

            // Log Participants as they disconnect from the Room
            room.once('participantDisconnected', participant => {
            console.log(`Participant "${participant.identity}" has disconnected from the Room`);
            });

            room.on('participantConnected', participant => {
               console.log(`Participant connected: ${participant.identity}`);
             });
             
             room.on('participantDisconnected', participant => {
               console.log(`Participant disconnected: ${participant.identity}`);
             });


         }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
         });
      }




      async function retrieve(){  
         const id = await getSecondPart( props.location.search, "=") 
         const debateObj = await getDebate(id)
         const token =  getTokenFromDebate(debateObj) 
         setToken(id) 
         connectToDebate(token, debateObj.debateTitle)
      }
  
      retrieve()

  
    }); 

   return (
      <div>
         <header>
            {debateTitle}
         </header>
         <div id="remote-media-div"></div>
   debate me bro.
         <div id="remote-media-div"></div>
      </div>
   ) 
}

export default DebateRoom

 

