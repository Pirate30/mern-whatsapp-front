import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./Chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import axios from "../../axios";

const Chat = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    console.log("send clicked");
    await axios.post("messages/new", {
      message: input,
      name: "You",
      timestamp: "just now",
      received: true,
    });
    setInput("");
  };

  return (
    <div className="chat">
      {/* chat header */}
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerDetails">
          <h3>Friend</h3>
          <p>last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* chat body */}

      <div className="chat__body">
        {messages.map((msg) =>
          msg.received ? (
            <p className="chat__message__receiver">
              <span className="chat__name">{msg.name}</span>
              {msg.message} <br />
              <span className="chat__timeStamp">{msg.timestamp}</span>
            </p>
          ) : (
            <p className="chat__message">
              <span className="chat__name">{msg.name}</span>
              {msg.message} <br />
              <span className="chat__timeStamp">{msg.timestamp}</span>
            </p>
          )
        )}

        {/* <p className="chat__message">
          <span className="chat__name">Pritesh</span>
          Hi There <br />
          <span className="chat__timeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Pritesh</span>
          This is the message from the pritesh ... <br />
          <span className="chat__timeStamp">{new Date().toUTCString()}</span>
        </p> */}
      </div>

      {/* chat input */}
      <div className="chat__footer">
        <IconButton>
          <SentimentVerySatisfiedIcon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a Message"
          />
          {/* <button>Send </button> */}
          <div className="sendIcon">
            <IconButton onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </div>
          <IconButton>
            <MicIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;
