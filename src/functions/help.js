// list to array
export const ltoa = (list) => {
  return Object.keys(list).map((key, id) => {
    return list[key];
  });
};
