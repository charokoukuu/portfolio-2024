export const addEllipsis = (str: string): string => {
  return str.length > 50 ? str.substring(0, 56) + '...' : str;
};
