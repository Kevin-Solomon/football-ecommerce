export function getRatingList({ rating }, list) {
  let getRatingList = [];
  if (rating === null) {
    getRatingList = list;
  }
  if (rating === 4) {
    getRatingList = getRatingList.concat(list.filter(item => item.rating > 4));
  }

  if (rating === 3) {
    getRatingList = getRatingList.concat(list.filter(item => item.rating > 3));
  }

  if (rating === 2) {
    getRatingList = getRatingList.concat(list.filter(item => item.rating > 2));
  }

  if (rating === 1) {
    getRatingList = getRatingList.concat(list.filter(item => item.rating > 1));
  }
  return getRatingList;
}
