import React from "react";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import "./App.css";
import { EALREADY } from "constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUser: "Diego"
    };
  }

  deleteMesssage = messageId => {
    const deleteInfo = {
      method: "DELETE"
    };

    fetch(`http://localhost:3004/messages/${messageId}`, deleteInfo).then(
      res => {
        if (res.status >= 200 && res.status < 300) {
          this.getMessages();
        }
      }
    );
  };
  getMessages = () => {
    fetch("http://localhost:3004/messages")
      .then(res => res.json())
      .then(data => {
        console.log("/messages respone");
        console.log(data);
        this.setState({
          messages: data
        });
      });
  };
  sendNewMessage = newMessageContent => {
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        from: this.state.currentUser,
        text: newMessageContent
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch("http://localhost:3004/messages", requestInfo).then(res => {
      if (res.status >= 200 && res.status < 300) {
        this.getMessages();
      } else if (res.status === 419) {
        alert("Please inter your message");
      } else {
        alert("Something went wrong, please try again");
      }
    });
  };
  componentDidMount() {
    this.getMessages();
  }
  render() {
    console.log("render");
    console.log(this.state.messages);
    return (
      <div className="App">
        <h1>hello from app</h1>
        <Messages
          data={this.state.messages}
          deleteMesssage={this.deleteMesssage}
        />
        <MessageForm sendNewMessage={this.sendNewMessage} />
      </div>
    );
  }
}

export default App;
