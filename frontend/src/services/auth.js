// src/services/auth.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; 

export const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/login`, { username, password });
  return res.data; 
};

export const saveToken = (token) => localStorage.setItem("adminToken", token);
export const getToken = () => localStorage.getItem("adminToken");
export const logout = () => localStorage.removeItem("adminToken");