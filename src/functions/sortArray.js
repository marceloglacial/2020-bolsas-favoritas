export const sortLower = (array, item) =>
  array.sort((a, b) => a[item] - b[item]);
export const sortHigher = (array, item) =>
  array.sort((a, b) => b[item] - a[item]);
export const sortAlpha = (array) =>
  array.sort((a, b) => {
    const nameA = a.university.name;
    const nameB = b.university.name;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
