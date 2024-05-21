export const addEllipsis = (str: string): string => {
  return str.length > 50 ? str.substring(0, 56) + '...' : str;
};

export const ISOStringToLocaleString = (date: string): string => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);

  return `${year}年${month}月`;
};
