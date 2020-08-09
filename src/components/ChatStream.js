import React from "react";

import "./ChatStream.css";
import ChatMessage from "../ChatMessage";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  console.log("ChatStream props", props.messages);
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
};
// characterLines is an individual object in array of messages.
//so I can name it message or wtv I want
//you go from an array of data to an array of divs(because its now html on the page)

export default ChatStream;

//part 2
//return <ChatMessage message={message} />;
