import axios from 'axios';

// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://tuiter-a6.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE_A6;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
   const response = await axios.post(TUITS_API, tuit);
   return response.data;
}

export const findTuits = async () => {
   const response = await axios.get(TUITS_API);
   return response.data;
}

export const deleteTuit = async (tid) => {
   // append tuit's ID to URL
   const response = await axios.delete(`${TUITS_API}/${tid}`);
   return response.data;
}

export const updateTuit = async (tuit) => {
   // send HTTP PUT request appending tuit's ID to URL, and embed tuit object in BODY
   const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
   return tuit;
}

