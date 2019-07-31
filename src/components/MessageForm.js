import React, { Component } from "react";

export class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }
  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };
  handleSendClick = e => {
    e.preventDefault();
    this.props.sendNewMessage(this.state.message);
  };
  render() {
    return (
      <div>
        <form>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="type here"
            value={this.state.message}
          />
          <button onClick={this.handleSendClick} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
