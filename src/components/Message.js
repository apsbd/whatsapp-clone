import React from "react";
import PropTypes from "prop-types";
import "./Message.css";

function Message({ value, messageIn }) {
  const className = messageIn ? "message message-in" : "message message-out";
  const messageClassName = messageIn ? "message__box-in" : "message__box-out";

  return (
    <div className={className}>
      <div className="message__wrapper">
        {messageIn && (
          <span className="message__tail in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
              width="8"
              height="13"
            >
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              ></path>
              <path
                fill="currentColor"
                d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              ></path>
            </svg>
          </span>
        )}
        <div className={messageClassName}>{value}</div>
        {!messageIn && (
          <span className="message__tail out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
              width="8"
              height="13"
            >
              <path
                opacity=".13"
                d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
              ></path>
              <path
                fill="currentColor"
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              ></path>
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}

Message.propTypes = {
  value: PropTypes.string.isRequired,
  messageIn: PropTypes.bool,
};

export default Message;
