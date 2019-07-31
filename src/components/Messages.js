import React from "react";
import MessageItem from "./MessageItem";
const Messages = props => {
  return (
    <div>
      <h1>Messages</h1>
      {props.data.map(msg => {
        return (
          <MessageItem message={msg} deleteMesssage={props.deleteMesssage} />
        );
      })}
    </div>
  );
};

export default Messages;
