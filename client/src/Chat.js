import React, { useState } from "react";
import axios from "axios";

import "./style.css";
import Messages from "./Messages";

const Chat = props => {
    const [responses, setResponses] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    const handleMessageSubmit = message => {
        const data = {
            message
        };

        axios
            .post("/chatbot", data)
            .then(response => {
                const responseData = {
                    text: response.data["message"]["fulfillmentText"] !== "" ? response.data["message"]["fulfillmentText"] : "Sorry, I can't get it. Can you please repeat once?",
                    isBot: true
                };

                setResponses(responses => [...responses, responseData]);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };

    const handleMessageChange = event => {
        setCurrentMessage(event.target.value);
    };

    const handleSubmit = event => {
        const message = {
            text: currentMessage,
            isBot: false
        };
        if (event.key === "Enter") {
            setResponses(responses => [...responses, message]);
            handleMessageSubmit(message.text);
            setCurrentMessage("");
        }

    };

    return (
        <div className="chatSection" style = {{fontFamily: 'Arial'}}>
            <div className="botContainer" style = {{fontFamily: 'Arial'}}>
                <div className="messagesContainer" style = {{fontFamily: 'Arial'}}>
                    <Messages messages={responses} style = {{fontFamily: 'Arial'}} />
                </div>
                {/*The input section is 👇*/}
                <div className="inputSection" style = {{fontFamily: 'Arial'}}>
                    <input
                        type="text"
                        value={currentMessage}
                        onChange={handleMessageChange}
                        onKeyDown={handleSubmit}
                        placeholder="Say something..."
                        className="messageInputField"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chat;
