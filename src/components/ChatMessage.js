import React from "react";

import "./ChatMessage.css";
import styled from "styled-components";

const ChatMessage = (props) => {
  if (props.messageType === "sent") {
    return <SentMessage>{props.body}</SentMessage>;
  } else if (props.messageType === "received") {
    return <ReceivedMessage>{props.body}</ReceivedMessage>;
  } else return null;
};

const SentMessage = styled.p`
  border-radius: 5px;
  background-color: lightgrey;
  color: white;
  padding: 5px;
`;
const ReceivedMessage = styled.p`
  border-radius: 5px;
  background-color: lightskyblue;
  color: white;
  padding: 5px;
  text-align: right;
`;
export default ChatMessage;
