import axios from 'axios';

export default class StoresService {
  static async getStores(params) {
    return axios.get('/stores', {
      params: { ...params },
    });
  }

  static async getStore(id) {
    return axios.get(`/stores${id}`);
  }
}
