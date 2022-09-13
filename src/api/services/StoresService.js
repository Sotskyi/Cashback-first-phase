import axios from 'axios';

export default class StoresService {
  static async getStores(params) {
    return axios.get('/stores', {
      params: { ...params },
    });
  }

  static async getStore(params) {
    const { id, ...rest } = params;
    console.log(rest);
    return axios.get(`/stores/${params.id}`, { params: { ...params } });
  }

  static async redirectToStore(id) {
    return axios.post(`/stores/${id}/trackingRedirect`);
  }

  static async redirectToSpecialOffer(offerId) {
    return axios.post(`/specialOffers/${offerId}/trackingRedirect`);
  }
}
