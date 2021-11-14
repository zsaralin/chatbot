import React from "react";
import "./style.css";
import Chat from "./Chat"

export default function App() {
  return (
      <div className="mainSection">
        <div className="heading">
          Conversation with Bot
        </div>
        <Chat />
      </div>
  );
}
