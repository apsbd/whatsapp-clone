import React from "react";
import PropTypes from "prop-types";
import "./MessageWindow.css";
import Message from "./Message";

function MessageWindow({ messages }) {
  return (
    <>
      <div className="messageWindow_background"></div>

      <div className="messageWindow">
        <div className="messageWindow__messages">
          {messages.map((message) => {
            return <Message value={message.value} messageIn />;
          })}
        </div>
      </div>
    </>
  );
}

MessageWindow.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessageWindow;
