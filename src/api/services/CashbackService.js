import axios from 'axios';

export default class CashbackService {
  static async getCashback(params) {
    return axios.get('/users/me/cashback', {
      params: { ...params },
    });
  }

  static async getWithdrawals(params) {
    return axios.get('/users/me/withdrawals', {
      params: { ...params },
    });
  }
}
