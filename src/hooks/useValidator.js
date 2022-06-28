import { useState } from 'react';

export const validationRuless = {
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
};

export const useValidator = () => {
  const [isShowError, setIsShowError] = useState(false);

  const checkIsValid = ({ nameOfData, data, showErrorSync }) => {
    if (isShowError || showErrorSync) {
      if (nameOfData === 'phone' && !validationRuless.isPhoneNumber(data)) {
        return false;
      }
      if (nameOfData === 'firstName' && !validationRuless.isFirstName(data)) {
        return false;
      }
      if (nameOfData === 'lastName' && !validationRuless.isLastName(data)) {
        return false;
      }
      if (nameOfData === 'email' && !validationRuless.isEmail(data)) {
        return false;
      }
      if (nameOfData === 'password' && !validationRuless.isPassword(data)) {
        return false;
      }
    }
    return true;
  };

  return [checkIsValid, setIsShowError];
};
