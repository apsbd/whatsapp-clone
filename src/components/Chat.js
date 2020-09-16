import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Chat.css";
import defaultUser from "./DefaultUser.svg";
import { MoreVert } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import MessageWindow from "./MessageWindow";

// eslint-disable-next-line

function Chat(props) {
  const [messageValue, setMessageValue] = useState("");
  const [messages, setMessages] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setMessages([
      ...messages,
      {
        value: messageValue,
      },
    ]);

    setMessageValue("");
  }

  return (
    <div className="chat">
      <header className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__headerLeft__avatar">
            <div className="chat__headerLeft__avaterWrapper">
              <img src={defaultUser} alt="default user" />
            </div>
          </div>

          <div className="chat__headerLeft__text">
            <div className="chat__headerLeft__textHeader">
              <span className="chat__headerLeft__textHeaderName">
                Jadob Sarker
              </span>
            </div>
            <span className="chat__headerLeft__textLatestChat">
              last seen today at 4:45 pm
            </span>
          </div>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </header>

      <MessageWindow messages={messages} />

      <footer className="chat__search">
        <label className="chat__searchLabel">
          <form onSubmit={handleSubmit}>
            <input
              className="chat__searchInput"
              placeholder="Type a message"
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
          </form>
        </label>
      </footer>
    </div>
  );
}

Chat.propTypes = {};

export default Chat;
