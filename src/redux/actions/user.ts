import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

if (!backendUrl) {
  console.error("Backend URL is not defined in the environment variables.");
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${backendUrl}/users/register`, userData);
      
      
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.log(error.response.data.message);
        
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData: { email: string; password: string }, { rejectWithValue }) => {
   
    try {
      const response = await axios.post(`${backendUrl}/users/login`, userData);
      const { token } = response.data;
      localStorage.setItem('token', token);
    return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async () => {
    const response = await axios.get(`${backendUrl}/users`);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (userData: { name: string; email: string }) => {
    const response = await axios.put(`${backendUrl}/users`, userData);
    return response.data;
  }
);