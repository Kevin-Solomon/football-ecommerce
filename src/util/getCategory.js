export function getCategory({ jersey, sneakers, boots, football }, products) {
  let sortedList = [];
  console.log((jersey && sneakers && football && boots) === false);
  if (
    jersey === false &&
    sneakers === false &&
    football === false &&
    boots === false
  ) {
    sortedList = [...products];
  }
  if (jersey) {
    sortedList = sortedList.concat(
      products.filter(item => item.categoryName === 'jersey')
    );
  }
  if (football) {
    sortedList = sortedList.concat(
      products.filter(item => item.categoryName === 'football')
    );
  }
  if (sneakers) {
    sortedList = sortedList.concat(
      products.filter(item => item.categoryName === 'sneakers')
    );
  }
  if (boots) {
    sortedList = sortedList.concat(
      products.filter(item => item.categoryName === 'boots')
    );
  }

  return sortedList;
}
