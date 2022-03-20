export const getTotalPrice = cartList => {
  if (cartList.length === 0) return 0;
  return cartList.reduce((acc, initialValue) => {
    return acc + initialValue.price * initialValue.qty;
  }, 0);
};
