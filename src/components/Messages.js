import React from "react";
import MessageItem from "./MessageItem";
const Messages = props => {
  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h3>MESSAGES</h3>
      </div>
      {props.data.map(msg => {
        return (
          <MessageItem
            message={msg}
            deleteMesssage={props.deleteMesssage}
            editMessage={props.editMessage}
          />
        );
      })}
    </div>
  );
};

export default Messages;
