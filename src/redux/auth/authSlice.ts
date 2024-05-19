// Redux Toolkit Imports
import { createSlice } from "@reduxjs/toolkit";
// Custom Imports
import { RootState } from "../store";

const getInitialUser = () => {
  const localStorageItem = localStorage.getItem("user");
  if (localStorageItem) {
    return JSON.parse(localStorageItem);
  } else {
    return null;
  }
};

const getInitialUserProfile = () => {
  const localStorageItem = localStorage.getItem("userProfile");
  if (localStorageItem) {
    return JSON.parse(localStorageItem);
  } else {
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getInitialUser(),
    userProfile: getInitialUserProfile(),
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },

    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },

    logout(state) {
      state.user = null;
      state.userProfile = null;
      localStorage.clear();
    },
  },
});

export const { setUser, setUserProfile, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectedUserExpired = (state: RootState) =>
  state.auth?.user?.expiration;
// todo: USER PROFILE
export const selectedUserId = (state: RootState) => state.auth?.userProfile?.id;
