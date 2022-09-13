import axios from 'axios';

export default class StoresService {
  static async getStores(params) {
    return axios.get('/stores', {
      params: { ...params },
    });
  }

  static async getStore(parameters) {
    const { id, ...rest } = parameters;
    return axios.get(`/stores/${parameters.id}`, { params: { ...rest } });
  }

  static async redirectToStore(id) {
    return axios.post(`/stores/${id}/trackingRedirect`);
  }

  static async redirectToSpecialOffer(offerId) {
    return axios.post(`/specialOffers/${offerId}/trackingRedirect`);
  }
}
