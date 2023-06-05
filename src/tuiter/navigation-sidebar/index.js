import React from "react";
import {Link, useLocation} from "react-router-dom";
import {MdNotifications} from "react-icons/md";
import {AiFillHome, AiFillMessage} from "react-icons/ai";
import {
   FaHashtag, FaEnvelope, FaBookmark, FaList, FaUser
} from "react-icons/fa";

const NavigationSidebar = () => {
   const {pathname} = useLocation();
   const [ignore, tuiter, active] = pathname.split("/");
   const links = [
      {icon: <AiFillHome/>, name: "home"},
      {icon: <FaHashtag/>, name: "explore"},
      {icon: <MdNotifications/>, name: "notifications"},
      {icon: <FaEnvelope/>, name: "messages"},
      {icon: <FaBookmark/>, name: "bookmarks"},
      {icon: <FaList/>, name: "lists"},
      {icon: <FaUser/>, name: "profile"},
      {icon: <AiFillMessage/>, name: "more"}
   ];

   return (
      <div className="list-group">
         {links.map((link) =>
            <Link
               key={link.name}
               to={`/tuiter/${link.name}`}
               className={`list-group-item text-capitalize 
                  ${active === link.name ? "active" : ""}`}>
               <div className="d-flex align-items-center">
                  <span className="me-2">{link.icon}</span>
                  <span className="d-none d-xl-block">{link.name}</span>
               </div>
            </Link>
         )}
      </div>
   );
};
export default NavigationSidebar;