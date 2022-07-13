import axios from "axios";
import { API_URL } from "../config/api";
export default class UserService {
  static async getAllUsers() {
    return axios.get(`${process.env.REACT_APP_API_URL}/users`, {});
  }
}
