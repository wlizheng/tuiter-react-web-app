import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
   createTuitThunk,
   deleteTuitThunk,
   findTuitsThunk, updateTuitThunk
} from "../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
};

// const currentUser = {
//    "userName": "Alice",
//    "handle": "@alice",
//    "image": "user1.png",
// };
//
// const templateTuit = {
//    ...currentUser,
//    "topic": "Space",
//    "time": "2h",
//    "liked": false,
//    "replies": 0,
//    "retuits": 0,
//    "likes": 0,
// };

const tuitsSlice = createSlice({
   name: 'tuits',
   // initialState: {tuits: tuits},
   initialState,
   extraReducers: {
      [updateTuitThunk.fulfilled]:
         (state, {payload}) => {
            state.loading = false;
            const tuitIdx = state.tuits.findIndex((t) => t._id === payload._id);
            state.tuits[tuitIdx] = {...state.tuits[tuitIdx], ...payload}
         },
      [createTuitThunk.fulfilled]:
         (state, {payload}) => {
            state.loading = false;
            state.tuits.push(payload);
         },
      [deleteTuitThunk.fulfilled]:
         (state, {payload}) => { // arrow func represents reducer func
            state.loading = false
            state.tuits = state.tuits.filter(t => t._id !== payload)
         },
      [findTuitsThunk.pending]:
         (state) => {
            state.loading = true
            state.tuits = []
         },
      [findTuitsThunk.fulfilled]:
         (state, {payload}) => {
            state.loading = false
            state.tuits = payload
         },
      [findTuitsThunk.rejected]:
         (state, action) => {
            state.loading = false
            state.error = action.error
         }
   },
   reducers: {}
   // reducers: {
   //    deleteTuit(state, action) {
   //       const index = state.tuits
   //       .findIndex(tuit =>
   //          tuit._id === action.payload);
   //       state.tuits.splice(index, 1);
   //    },
   //    createTuit(state, action) {
   //       state.tuits.unshift({
   //          ...action.payload,
   //          ...templateTuit,
   //          _id: (new Date()).getTime(),
   //          likes: 0,
   //       })
   //    }
   // }
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
