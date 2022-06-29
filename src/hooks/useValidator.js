import { useState } from 'react';

export const validationRules = {
  isEmpty: (data) => data.length > 0,
  isEmail: (data) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      data,
    ),
  isPhoneNumber: (data) =>
    /^(\+?1 ?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data),
  isFirstName: (data) => /^[a-zA-Z]{2,}/.test(data),
  isLastName: (data) => /^[a-zA-Z]{2,}/.test(data),
  isPassword: (data) => /(?=.{7,})/.test(data),
  isPasswordEqual: (data) => {
    const { password, confirmPassword } = data;
    return password === confirmPassword;
  },
};

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
    }
    return true;
  };

  return [checkIsValid, setIsShowError];
};
