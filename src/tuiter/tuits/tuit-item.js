import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {BsXLg} from "react-icons/bs";
import {deleteTuitThunk} from "../services/tuits-thunks";

const TuitItem = ({tuit}) => {
   const dispatch = useDispatch();
   const deleteTuitHandler = (id) => {
      dispatch(deleteTuitThunk(id));
   }

   return (
      <li className="list-group-item">
         <div className="row">
            <div className="col-1">
               <div>
                  <img className="rounded-circle" height={48}
                  src={`/image/${tuit.image}`}/>
               </div>
            </div>
            <div className="col">
               <div>
                  <button className="float-end border-0 bg-white"
                          onClick={() => deleteTuitHandler(tuit._id)}>
                     <BsXLg/>
                  </button>

                  <span className="fw-bold me-2">
                     {tuit.userName}
                  </span>
                  {tuit.handle} · {tuit.time}
                  <div>
                     {tuit.tuit}
                  </div>
                  <div>
                     <TuitStats tuit={tuit}/>
                  </div>
               </div>
            </div>
         </div>
      </li>
   )
};

export default TuitItem;