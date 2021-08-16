import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./sidebarchat/SidebarChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://celebmafia.com/wp-content/uploads/2020/06/alexandra-daddario-instagram-photos-06-06-2020-3_thumbnail.jpg" />

        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search The Chat" />
        </div>
      </div>

      {/* sidebar contacts & chats */}
      <div className="sidebar__chat">
        <h2>New Chat</h2>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
