import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
const SidebarChat = () => {
  return (
    <div className="sidebarchat">
      <Avatar src="https://tv-fanatic-res.cloudinary.com/iu/s--i1jwm5Lt--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1522946316/ian-somerhalder-attends-elle-event.jpg" />

      <div className="sidebarchat__details">
        <h3>Group</h3>
        <p>the new message is here</p>
      </div>
    </div>
  );
};

export default SidebarChat;
