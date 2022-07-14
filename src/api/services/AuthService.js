import axios from 'axios';

import { saveTokens } from '../requestsInterceptor';

export default class AuthService {
  static async login(creds) {
    return axios
      .post('/auth/signin', {
        ...creds,
      })
      .then(saveTokens);
  }

  static async register(creds) {
    return axios
      .post('/auth/signup', {
        ...creds,
      })
      .then(saveTokens);
  }

  static async checkAuth(refreshToken) {
    return axios
      .patch('/auth/refresh', {
        refreshToken,
      })
      .then(saveTokens);
  }

  static async logout() {
    return localStorage.setItem('auth', JSON.stringify({}));
  }
}
