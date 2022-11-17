import { createSlice } from "@reduxjs/toolkit";
import { USer_DETAILS } from "../../constants";

const userString = localStorage.getItem(USer_DETAILS) || "";
const userObj = userString ? JSON.parse(userString) : null;

const initialState = {
  auth: userObj ? true : false,
  id: userObj?.id,
  firstName: userObj?.firstName,
  lastName: userObj?.lastName,
  email: userObj?.email,
  userName: userObj?.userName,
  isModerator: userObj?.Role === "MODERATOR",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggingRequest: (state, action) => {
      state.auth = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.isModerator = action.payload.Role === "MODERATOR";
    },
    logOutRequest: (state) => {
      state.auth = false;
      state.id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.userName = "";
      state.isModerator = "";
    },
  },
});

export const { loggingRequest, logOutRequest } = userSlice.actions;

export default userSlice.reducer;
