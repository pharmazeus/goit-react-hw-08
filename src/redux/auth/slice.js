import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: "",
      password: "",
    },
    token: null,
    isLoggedIn: false,
  },
});

export default authSlice.reducer;
