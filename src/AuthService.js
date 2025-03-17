<<<<<<< HEAD
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Backend URL

// User Signup
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

// User Login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    // Store user ID in LocalStorage after login
    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("token", response.data.token);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Logout User
export const logout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
};
=======
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Backend URL

// User Signup
export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Signup failed");
  }
};

// User Login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });

    // Store user ID in LocalStorage after login
    localStorage.setItem("userId", response.data.userId);
    localStorage.setItem("token", response.data.token);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// Logout User
export const logout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
};
>>>>>>> 0a10aed (Initial commit)
