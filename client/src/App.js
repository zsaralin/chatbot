import React from "react";
import "./style.css";
import Chat from "./Chat"
import mascot from './mascot2.png'

export default function App() {
  return (
      <div className="mainSection" >
          <img style ={{height:'85px',marginBottom:'-20px', marginLeft: '47%'}} src={mascot} alt='mascot'/>
          <div className="heading" style = {{fontFamily: 'Courier, serif', fontWeight: 'bold'}}>
          Conversation with Bot
        </div>
        <Chat />
      </div>
  );
}
