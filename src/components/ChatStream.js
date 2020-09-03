import React from "react";

import "./ChatStream.css";
import ChatMessage from "./ChatMessage";

function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messages.map((message) => {
        let messageType;
        if (message.user === props.currentUser) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        return (
          <ChatMessage
            user={message.user}
            body={message.body}
            messageType={messageType}
          />
        );
      })}
    </section>
  );
}
// characterLines is an individual object in array of messages.
//so I can name it message or wtv I want
//you go from an array of data to an array of divs(because its now html on the page)

export default ChatStream;
