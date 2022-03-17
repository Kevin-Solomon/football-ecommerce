export const getSorted = ({ sortBy }, products) => {
  let sortedList;
  if (sortBy === 'LOW_TO_HIGH') {
    sortedList = [
      ...products.sort((a, b) => Number(a.price) - Number(b.price)),
    ];
  } else if (sortBy === 'HIGH_TO_LOW') {
    sortedList = [
      ...products.sort((a, b) => Number(b.price) - Number(a.price)),
    ];
  } else {
    sortedList = [...products];
  }
  return sortedList;
};
