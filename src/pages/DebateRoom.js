 
import React, { useState, useEffect, useRef } from 'react';
import getDebate from '../functions/GetDebate';
import Room from '../components/Room';

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
   const [room, setRoom] = React.useState(null);

   const videoRef = useRef();
   const audioRef = useRef();
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

            setRoom(room)


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
  
    }, room); 
   
    if (room){
   return ( 
      <Room room={room} debateTitle={debateTitle} />  
   ) 
    } else{
       return ( <div> loading </div>)
    }
}

export default DebateRoom

 

