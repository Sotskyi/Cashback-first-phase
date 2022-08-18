import { useState } from 'react';

export const validationRules = {
  isEmpty: (data) => data.length > 0,
  isEmail: (data) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      data,
    ),
  isPhoneNumber: (data) => /^\d{10}$/.test(data),
  isFirstName: (data) => /^[a-zA-Z]{2,}/.test(data),
  isLastName: (data) => /^[a-zA-Z]{2,}/.test(data),
  isPassword: (data) => /^\S{7,}$/.test(data),
  isPasswordEqual: (data) => {
    const { password, confirmPassword } = data;
    return password === confirmPassword;
  },
  isCarrier: (data) => /[0-9]/.test(data),
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
    }
    return true;
  };

  return [checkIsValid, setIsShowError];
};
