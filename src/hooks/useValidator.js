import { useState } from 'react';

export const validationRules = {
  isEmpty: (data) => {
    if (data) {
      return data.toString().length > 0;
    }
    return false;
  },
  isId: (data) => /^-?\d+$/.test(data),
  isEmail: (data) =>
    // eslint-disable-next-line
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(data),
  isAgree: (data) => data,
  isPhoneNumber: (data) => /^\d{10}$/.test(data),
  isFirstName: (data) => /^[A-Za-z]+$/.test(data) && data.length > 1,
  isLastName: (data) => /^[A-Za-z]+$/.test(data) && data.length > 1,
  isPassword: (data) => /^\S{7,20}$/.test(data),
  isPasswordEqual: (data) => {
    const { password, confirmPassword } = data;
    return (
      password === confirmPassword &&
      validationRules.isPassword(password) &&
      validationRules.isPassword(confirmPassword)
    );
  },
  isCarrier: (data) => /[0-9]/.test(data),
  isPaymentProof: (data) => data && data.length > 0,
};
// /^[a-z0-9]{7,}$/i.test(data)

export const useValidator = () => {
  const [isShowError, setIsShowError] = useState(false);

  const checkIsValid = ({ nameOfData, data, showErrorSync }) => {
    if (isShowError || showErrorSync) {
      if (nameOfData === 'phone' && !validationRules.isPhoneNumber(data)) {
        return false;
      }
      if (nameOfData === 'firstName' && !validationRules.isFirstName(data)) {
        return false;
      }
      if (nameOfData === 'lastName' && !validationRules.isLastName(data)) {
        return false;
      }
      if (nameOfData === 'email' && !validationRules.isEmail(data)) {
        return false;
      }
      if (nameOfData === 'password' && !validationRules.isPassword(data)) {
        return false;
      }
      if (
        nameOfData === 'passwordEqual' &&
        !validationRules.isPasswordEqual(data)
      ) {
        return false;
      }
      if (nameOfData === 'carrier' && !validationRules.isCarrier(data)) {
        return false;
      }
      if (nameOfData === 'isEmpty' && !validationRules.isEmpty(data)) {
        return false;
      }
      if (
        nameOfData === 'isPaymentProof' &&
        !validationRules.isPaymentProof(data)
      ) {
        return false;
      }
      if (nameOfData === 'isId' && !validationRules.isId(data)) {
        return false;
      }
      if (nameOfData === 'isAgree' && !validationRules.isAgree(data)) {
        return false;
      }
    }
    return true;
  };

  return [checkIsValid, setIsShowError];
};
