import React from "react";
import {useState} from "react";
import {FaRegHeart} from "react-icons/fa";
import {FcLike} from "react-icons/fc";

const TuitLikesCounter = ({tuit}) => {
   const [count, setCount] = useState(tuit.likes);
   const [liked, setLiked] = useState(false);

   const likeUnlike = () => {
      if (liked) {
         setCount(count - 1);
      } else {
         setCount(count + 1);
      }
      setLiked(!liked);
   };

   return (
      <div>
         <button className="border-0 bg-white"
                 onClick={likeUnlike}>
            {liked ? (<FcLike className="me-2"/>) : (
               <FaRegHeart className="me-2"/>)}
            {count}
         </button>
      </div>
   );
};

export default TuitLikesCounter;