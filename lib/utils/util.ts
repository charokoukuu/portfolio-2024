export const addEllipsis = (str: string, limit = 64): string => {
  return str.length > limit ? str.substring(0, limit) + '...' : str;
};
