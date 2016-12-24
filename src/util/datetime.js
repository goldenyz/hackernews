const to2Digits = number => `0${number}`.slice(-2);

export const convertTime = (dateValue) => {
  const datetime = new Date(dateValue);

  return `${datetime.getFullYear()}/${datetime.getMonth()}/${datetime.getDate()} ${to2Digits(datetime.getHours())}:${to2Digits(datetime.getMinutes())}:${to2Digits(datetime.getSeconds())}`;
};
