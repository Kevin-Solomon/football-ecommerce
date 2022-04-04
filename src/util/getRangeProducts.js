export const getRangeProducts = ({ price }, list) => {
  return list.filter(item => {
    return Number(item.price) < price;
  });
};
