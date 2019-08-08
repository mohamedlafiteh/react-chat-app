import React from "react";
import Messages from "./components/Messages";
import MessageForm from "./components/MessageForm";
import Header from "./components/Header";
import "./custom.css";
import "./App.css";
import { EALREADY } from "constants";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUser: "Mohamed"
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
  editMessage = (id, text) => {
    const updateInfo = {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        from: this.state.currentUser,
        text: text
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch("http://localhost:3004/messages", updateInfo).then(res => {
      if (res.status >= 200 && res.status < 300) {
        this.getMessages();
      } else if (res.status === 419) {
        alert("Please inter your message");
      } else {
        alert("Something went wrong, please try again");
      }
    });
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
      <div className="container">
        <Header />
        <Messages
          data={this.state.messages}
          deleteMesssage={this.deleteMesssage}
          editMessage={this.editMessage}
        />
        <MessageForm sendNewMessage={this.sendNewMessage} />
      </div>
    );
  }
}

export default App;
