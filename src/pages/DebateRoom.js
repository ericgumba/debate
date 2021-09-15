 
import React, { useState, useEffect, useRef } from 'react';
import getDebate from '../functions/GetDebate';
import Room from '../components/Room';
import createToken from '../functions/createToken';
import generateIdentity from '../functions/GenerateIdentity';

const { connect,createLocalTracks } = require('twilio-video');

function getSecondPart(str, delimeter) {
   return str.split(delimeter)[1];
}

function getTokenFromDebate(debateObj){
   return debateObj.debateToken
}




function DebateRoom(props) {
   const [debateTitle, setDebateTitle] = React.useState("placeholder");  
   const [room, setRoom] = React.useState(null);

   const videoRef = useRef();
   const audioRef = useRef();
   React.useEffect(() => { 

      function connectToDebate(token,title){
         console.log(`title: ${title} `)
         console.log(`token: ${token} `)
         connect(`${token}`, {
            audio: true,
            name: title,
            video: { width: 640 }
          }).then(room => {

            setRoom(room)


         }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
         });
      }
 
      async function retrieve(){  
         const id = await getSecondPart( props.location.search, "=") 
         const debateObj = await getDebate(id)
         const debateTitle = debateObj.debateTitle
         const identity = generateIdentity()
         const token =  await createToken({debateTitle, identity})

         console.log("herer teh token: ", token) 
         connectToDebate(token, debateObj.debateTitle)
      }
  
      retrieve() 
  
    }); 
   
    if (room){
   return ( 
      <Room room={room} debateTitle={debateTitle} />  
   ) 
    } else{
       return ( <div> loading </div>)
    }
}

export default DebateRoom

 

