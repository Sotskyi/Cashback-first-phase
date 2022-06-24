import { useState } from 'react';

export const validationRuless = {
  isEmpty: (data) => data.length > 0,
  isEmail: (data) =>
    data.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ),
  isPhoneNumber: (data) =>
    /^(\+?1 ?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data),
};

export const useValidator = () => {
  const [IsShowError, setIsShowError] = useState(false);

  const checkIsValid = ({ nameOfData, data, showErrorSync }) => {
    if (IsShowError || showErrorSync) {
      if (nameOfData === 'phone' && !validationRuless.isPhoneNumber(data)) {
        return false;
      }
    } else return true;
    return true;
  };

  return [checkIsValid, setIsShowError, IsShowError];
};
