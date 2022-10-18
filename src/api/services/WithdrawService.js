import axios from 'axios';

export default class WithdrawService {
  static async withdrawMoney(params) {
    return axios.post('/withdrawals/pins', {
      ...params,
    });
  }
}
