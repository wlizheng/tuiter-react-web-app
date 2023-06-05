import React from "react";
import {
   FaRegComment,
   FaRegShareSquare,
   FaRetweet
} from "react-icons/fa";
import TuitLikesCounter from "./tuit-likes-counter";

const TuitStats = (props) => {
   const {tuit} = props;
   return (
      <li className="list-group-item border-0">
         <div className="row">
            <div className="col">
               <FaRegComment className="me-2"/>{tuit.replies}
            </div>
            <div className="col">
               <FaRetweet className="me-2"/>{tuit.retuits}
            </div>
            <div className="col">
               <TuitLikesCounter tuit={tuit}/>
            </div>
            <div className="col">
               <FaRegShareSquare/>
            </div>
         </div>
      </li>
   );
};

export default TuitStats;