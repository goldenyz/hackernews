export const convertTime = (dateValue) => {
  const datetime = new Date(dateValue);

  return `${datetime.getFullYear()}/${datetime.getMonth()}/${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
};
