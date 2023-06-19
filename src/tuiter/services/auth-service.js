import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_API_BASE_A6; // get the URL to the remote API
const USERS_URL = `${SERVER_API_URL}/users`; // URL to auth controller

const api = axios.create({withCredentials: true});

export const login = async ({ username, password }) => {
   const response = await api.post(`${USERS_URL}/login`, { username, password });
   return response.data;
};

export const logout = async () => {
   const response = await api.post(`${USERS_URL}/logout`);
   return response.data;
};

export const profile = async () => {
   const response = await api.post(`${USERS_URL}/profile`);
   return response.data;
};

export const updateUser = async (user) => {
   const response = await api.put(`${USERS_URL}/${user._id}`, user);
   return response.data;
};

export const register = async ({username, password}) => {
   const response = await api.post(`${USERS_URL}/register`, {username, password});
   return response.data;
};

