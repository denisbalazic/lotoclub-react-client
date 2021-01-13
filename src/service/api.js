import axios from "axios";

const API_URL = "http://localhost:3001/api/combinations";

class ApiService {
  constructor() {
    const userStr = localStorage.getItem("user");
    const user = JSON.parse(userStr);
    user && (this.token = user.token);
  }

  async getUserCombinations() {
    try {
      const res = await axios.get(API_URL, { headers: { Authorization: `Bearer ${this.token}` } });
      return res.data.result;
    } catch (err) {
      //TODO: Handle no connection and server error
      return err.response.data;
    }
  }
}

export const apiService = new ApiService();
