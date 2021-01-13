import axios from "axios";

const API_URL = "http://localhost:3001/api/users";

class AuthService {
  constructor() {
    const userStr = localStorage.getItem("user");
    const user = JSON.parse(userStr);
    user && (this.token = user.token);
  }

  setUserAndToken(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.token = user.token;
  }

  removeUserAndToken() {
    localStorage.removeItem("user");
    this.token = null;
  }

  async register(userData) {
    try {
      const res = await axios.post(API_URL, userData);
      if (res.data.success && res.data.result.token) {
        this.setUserAndToken(res.data.result);
      }
      return res.data;
    } catch (err) {
      //TODO: Handle no connection and server error
      return err.response.data;
    }
  }

  async login(userData) {
    try {
      const res = await axios.post(API_URL + "/login", userData);
      if (res.data.success && res.data.result.token) {
        this.setUserAndToken(res.data.result);
      }
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }

  logout() {
    this.removeUserAndToken();
  }

  isLoggedIn() {
    return !!this.token;
  }
}

export const authService = new AuthService();
