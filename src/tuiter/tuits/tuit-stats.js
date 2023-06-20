import React from "react";
import {
   FaHeart,
   FaRegComment,
   FaRegShareSquare,
   FaRetweet, FaThumbsDown
} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStats = ({tuit}) => {
   const dispatch = useDispatch();

   const handleDislikeClick = () => {
      if (tuit.dislikes > 0) {
         dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1 }));
      }
   };

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
               <FaHeart
                  className="text-danger"
                  onClick={() =>
                     dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                  }
               />
               <span className="ms-2">{tuit.likes}</span>
            </div>
            <div className="col">
               <FaThumbsDown
                  onClick={handleDislikeClick}
               />
               <span className="ms-2">{tuit.dislikes}</span>
            </div>
            <div className="col">
               <FaRegShareSquare/>
            </div>
         </div>
      </li>
   );
};

export default TuitStats;