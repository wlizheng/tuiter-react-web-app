import React, {useState} from "react";
import {FaRegSmile} from "react-icons/fa";
import {AiOutlinePicture, AiOutlineFileGif, AiFillSignal} from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import {createTuit} from "./reducers/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
   let [whatsHappening, setWhatsHappening] = useState('');
   const dispatch = useDispatch();

   const tuitClickHandler = () => {
      const newTuit = {
         tuit: whatsHappening,
      };
      dispatch(createTuit(newTuit));
      setWhatsHappening("");
      console.log(whatsHappening);
   }
   return (
      <div className="row">
         <div className="col-auto">
            <img src="/image/user1.png" width={60}/>
         </div>
         <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
            <div>
               <button
                  className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                  onClick={tuitClickHandler}>
                  Tuit
               </button>
               <div className="text-primary fs-2">
                  <AiOutlinePicture className="me-3"/>
                  <AiOutlineFileGif className="me-3"/>
                  <AiFillSignal className="me-3"/>
                  <FaRegSmile className="me-3"/>
                  <CiLocationOn className="me-3"/>
               </div>
            </div>
         </div>
         <div className="col-12">
            <hr/>
         </div>
      </div>
   );
}
export default WhatsHappening;