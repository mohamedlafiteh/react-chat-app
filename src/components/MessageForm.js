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
          <div className="form-group">
            <input
              className="form-control-file form-control-sm"
              onChange={this.handleChange}
              type="text"
              placeholder="type here"
              value={this.state.message}
            />
            <button
              className="btn btn-info btn-rounded btn-sm waves-effect waves-light float-right"
              onClick={this.handleSendClick}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;
