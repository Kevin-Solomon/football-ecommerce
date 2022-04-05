import Loading from '../components/Loading/Loading';
import LoadingCategory from '../components/Loading/LoadingCategory';
function getTypeLoader(type) {
  switch (type) {
    case 'product':
      return [...new Array(10)].map(item => <Loading />);
    case 'category':
      return [...new Array(4)].map(item => <LoadingCategory />);
  }
}
export { getTypeLoader };
