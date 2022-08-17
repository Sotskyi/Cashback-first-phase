export const getError = (error) => {
  if (Array.isArray(error.response.data.message)) {
    return error.response.data.message[0];
  }
  return error.response.data.message;
};

export const insertString = (insertValue, existStr) =>
  [insertValue, ...existStr.split('')].join('');

export const getDateForCashback = (date) => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en', options);
};
