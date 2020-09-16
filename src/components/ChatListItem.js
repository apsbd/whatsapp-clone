import React from "react";
import PropTypes from "prop-types";
import "./ChatListItem.css";
import defaultUser from "./DefaultUser.svg";

function ChatList({ active }) {
  const className = active ? "chatListItem active" : "chatListItem";

  return (
    <div className={className}>
      <div className="chatListItem__avatar">
        <div className="chatListItem__avaterWrapper">
          <img src={defaultUser} alt="default user" />
        </div>
      </div>

      <div className="chatListItem__text">
        <div className="chatListItem__textHeader">
          <span className="chatListItem__textHeaderName">Jadob Sarker</span>
          <span className="chatListItem__textHeaderDate">9/7/2020</span>
        </div>
        <span className="chatListItem__textLatestChat">last chat item</span>
      </div>
    </div>
  );
}

ChatList.propTypes = {
  active: PropTypes.bool,
};

export default ChatList;
