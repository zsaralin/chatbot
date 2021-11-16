import React from "react";
import "./style.css";
import Chat from "./Chat"
import mascot from './mascot3.png'

export default function App() {
  return (
      <div className="mainSection" >
          <img style ={{height:'85px',display: 'block',marginLeft: 'auto',marginRight: 'auto',marginBottom:'-20px',  }} src={mascot} alt='mascot'/>
          <div className="heading" style = {{fontFamily: 'Arial, serif', fontWeight: 'bold'}}>
          Conversation with Bot
        </div>
        <Chat />
      </div>
  );
}
