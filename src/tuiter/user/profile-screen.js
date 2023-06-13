import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {
   logoutThunk,
   profileThunk,
   updateUserThunk
} from "../services/auth-thunks";

function ProfileScreen() {
   const {currentUser} = useSelector((state) => state.user);
   const [profile, setProfile] = useState(currentUser);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const save = async () => {
      await dispatch(updateUserThunk(profile));
   };

   useEffect(() => {
      // dispatch(profileThunk());
      const fetchData = async () => {
         const {payload} = await dispatch(profileThunk());
         setProfile(payload);
      };
      fetchData();
   }, []);

   return (
      <div>
         <h1>Profile Screen</h1>
         {profile && (<div>
               <div>
                  <label>Username</label>
                  <input className="form-control w-75" type="text"
                         value={profile.username}
                         onChange={(event) => {
                            const newProfile = {
                               ...profile, username: event.target.value,
                            };
                            setProfile(newProfile);
                         }}/>
               </div>
               {/*<div>*/}
               {/*   <label>First Name</label>*/}
               {/*   <input type="text" value={profile.firstName}*/}
               {/*          onChange={(event) => {*/}
               {/*             const newProfile = {*/}
               {/*                ...profile, firstName: event.target.value,*/}
               {/*             };*/}
               {/*             setProfile(newProfile);*/}
               {/*          }}/>*/}
               {/*</div>*/}
               {/*<div>*/}
               {/*   <label>Last Name</label>*/}
               {/*   <input type="text" value={profile.lastName}*/}
               {/*          onChange={(event) => {*/}
               {/*             const newProfile = {*/}
               {/*                ...profile, lastName: event.target.value,*/}
               {/*             };*/}
               {/*             setProfile(newProfile);*/}
               {/*          }}/>*/}
               {/*</div>*/}
            </div>
         )}
         <button
            onClick={() => {
               dispatch(logoutThunk());
               navigate("/tuiter/login");
            }}> Logout
         </button>
         <button onClick={save}>Save</button>
      </div>);
}

export default ProfileScreen;