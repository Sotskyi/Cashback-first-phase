export const getError = (error) => {
  if (Array.isArray(error.response.data.message)) {
    return error.response.data.message[0];
  }
  return error.response.data.message;
};

export const insertString = (insertValue, existStr) =>
  [insertValue, ...existStr.split('')].join('');

export const getDateForCashback = (date, language = 'en') => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(language, options);
};

export const getDateForWithdrawModal = (date) => {
  return new Date(date).toLocaleDateString('en-CA');
};

export const differenceDatesInDays = (today, date) => {
  const difference = today.getTime() - date.getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return 30 - TotalDays;
};

export const makeUpperCase = (str) => {
  if (str) {
    return str
      .split(' ')
      .map((el) => el[0].toUpperCase() + el.substring(1))
      .join(' ');
  }
  return str;
};

export function debounce(func, timeout = 500) {
  let timeoutId;
  return wrapper;
  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, timeout);
  }
}
