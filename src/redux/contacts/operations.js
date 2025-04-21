import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId} `);
      console.log("deleting...");
      return response.data;
    } catch (error) {
      if (error.response?.status === "401") {
        console.warn("🛑 Unauthorized! Status 401");
        useDispatch();
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
