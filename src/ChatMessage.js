import React from "react";

import "./ChatMessage.css";
import { isPropertySignature } from "typescript";

const ChatMessage = (props) => {
  console.log("ChatMsg props", props);
  return (
    <div className="chat-message">
      <p className="userName">{props.user.username}</p>
      <p className="messageBody">{props.body}</p>
      <div>
        <img className="characterPics" src={props.user.avatar}></img>
      </div>
    </div>
  );
};
export default ChatMessage;
