import React from "react";

const Message = ({ message }) => {
    return (
        <div className="messageCard">
            {message.isBot ? (
                <div className="botCard">
                    <p
                        style={{
                            paddingLeft: "14px",
                            paddingRight: "8px",
                            fontFamily: "Helvetica",
                            paddingTop: "8px",
                            paddingBottom: "8px",
                            fontWeight: 600
                        }}
                    >
                        {message.text}
                    </p>
                </div>
            ) : (
                <div className="userCard">
                    <p
                        style={{
                            paddingLeft: "12px",
                            paddingRight: "8px",
                            fontFamily: "Helvetica",
                            fontWeight: 600
                        }}
                    >
                        {message.text}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Message;
