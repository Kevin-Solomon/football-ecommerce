export const getRatingList = ({ rating }, list) => {
  let getRatingList = [];
  if (rating === null) {
    return (getRatingList = list);
  }
  return getRatingList.concat(list.filter(item => item.rating > rating));
};
