import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token_value) => {
  axios.defaults.headers.common.Authorization = token_value;
};

axios.defaults.baseURL = "https://connections-api.goit.global";
export const register = createAsyncThunk(
  "auth/registration",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth,logOut",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout", credentials);
      setAuthHeader("");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "atuh,refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
