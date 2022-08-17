import axios from 'axios';

export default class CashbackService {
  static async getCashback() {
    return axios.get('/users/me/cashback ');
  }
}
