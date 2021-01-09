import axios from "axios";

const API_URL = "http://localhost:3001/api/users";

const authService = {
  register: async (userData) => {
    try {
      const res = await axios.post(API_URL, userData);
      if (res.data.success && res.data.result.token) {
        localStorage.setItem("user", JSON.stringify(res.data.result));
      }
      return res.data;
    } catch (err) {
      //TODO: Handle no connection and server error
      return err.response.data;
    }
  },
};

export default authService;
