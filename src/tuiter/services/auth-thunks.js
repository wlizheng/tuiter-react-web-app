import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
   "user/login", async (credentials) => {
      const user = await authService.login(credentials);
      return user;
   }
);

export const profileThunk = createAsyncThunk(
   "auth/profile", async () => {
      console.log("Fetching user profile...");
      const currentUser = await authService.profile();
      return currentUser;
   }
);

export const logoutThunk = createAsyncThunk(
   "auth/logout", async () => {
      await authService.logout();
   }
);

export const updateUserThunk = createAsyncThunk(
   "user/updateUser", async (user) => {
      await authService.updateUser(user);
      return user;
   }
);

export const registerThunk = createAsyncThunk(
   "user/register", async (credentials) => {
      return await authService.register(credentials);
   }
);