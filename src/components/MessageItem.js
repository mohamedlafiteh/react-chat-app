import React, { Component } from "react";

export class MessageItem extends Component {
  constructor(props) {
    super(props);
  }
  handleDelete = () => {
    this.props.deleteMesssage(this.props.message.id);
  };
  render() {
    return (
      <div>
        <h1>
          from:{this.props.message.from} {this.props.message.created_at}: Text{" "}
          {this.props.message.text}
          <button onClick={this.handleDelete}>Delete</button>
        </h1>
      </div>
    );
  }
}

export default MessageItem;
