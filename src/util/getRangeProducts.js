export const getRangeProducts = ({ price }, list) => {
  return list.filter(item => {
    console.log(item.price < price);
    return Number(item.price) < price;
  });
};
