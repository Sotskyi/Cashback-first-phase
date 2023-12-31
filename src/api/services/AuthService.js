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

  static async registerConfirm(creds) {
    return axios.post('/auth/confirm/sms/check', {
      ...creds,
    });
  }

  static async checkAuth(refreshToken) {
    return axios
      .patch('/auth/refresh', {
        refreshToken,
      })
      .then(saveTokens);
  }

  static async confirmSms(phoneNumber) {
    return axios.post('/auth/confirm/sms', {
      phoneNumber,
    });
  }

  static async resendSms(phoneNumber) {
    return axios.post('auth/signin/resend', {
      phoneNumber,
    });
  }

  static async resetPasswordBySms(phoneNumber) {
    return axios.post('/auth/reset/sms', {
      phoneNumber,
    });
  }

  static async resetPasswordByEmail(email) {
    return axios.post('/auth/reset/email', {
      email,
    });
  }

  static async setNewPasswordByPhone(creds) {
    return axios.patch('/auth/reset/sms', {
      ...creds,
    });
  }

  static async setNewPasswordByEmail(params) {
    return axios.patch(`/auth/reset/email/${params.token}`, {
      password: params.password,
    });
  }

  static async resetPasswordConfirm(creds) {
    return axios.post('/auth/reset/confirm/sms', {
      ...creds,
    });
  }

  static async logout() {
    return localStorage.setItem('auth', JSON.stringify({}));
  }
}
