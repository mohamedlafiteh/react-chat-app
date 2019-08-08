import React, { Component } from "react";

export class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.message.text,
      editing: false
    };
  }

  startEdit = () => {
    this.setState({ editing: true });
  };
  updateEditText = event => {
    this.setState({ text: event.target.value });
  };
  finishEdit = () => {
    this.props.editMessage(this.props.message.id, this.state.text);
    this.setState({ editing: false });
  };
  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.finishEdit();
    }
  };
  onSave = e => {
    e.preventDefault();
    this.finishEdit();
  };
  handleDelete = () => {
    this.props.deleteMesssage(this.props.message.id);
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h4>
            FROM:{""}
            {this.props.message.from}{" "}
          </h4>
          <h4>
            {this.state.editing ? (
              <input
                type="text"
                placeholder="write your message"
                value={this.state.text}
                onChange={this.updateEditText}
                onKeyDown={this.onKeyDown}
              />
            ) : (
              "TEXT: " + this.props.message.text
            )}
          </h4>
          <h6> {this.props.message.created_at} </h6>
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleDelete}
          >
            Delete
          </button>
          {this.state.editing ? (
            <button onClick={this.onSave}>Save</button>
          ) : (
            <button onClick={this.startEdit} type="button">
              Edit
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default MessageItem;
