import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
import defaultUser from "./DefaultUser.svg";
import { DonutLarge, Chat, MoreVert, SearchRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import ChatListItem from "./ChatListItem";

// eslint-disable-next-line

function SideBar(props) {
  return (
    <div className="side">
      <header className="side__header">
        <div className="side__avatar">
          <div className="side_avatarWrapper">
            <img src={defaultUser} draggable="false" />
          </div>
        </div>

        <div className="side__headerActions">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </header>

      <div className="side__search">
        <label className="side__searchLabel">
          <SearchRounded />

          <input
            className="side__searchInput"
            placeholder="Search or start new chat"
          />
        </label>
      </div>

      <div className="side__chatList">
        <ChatListItem active />
        <ChatListItem />
        <ChatListItem />
      </div>
    </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
