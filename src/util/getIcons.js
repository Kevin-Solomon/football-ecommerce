import { FaShoppingCart, FaHeart, FaRegHeart, FaBox } from 'react-icons/fa';
import { BsFilter, BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
export const getIcons = (type, payload) => {
  switch (type) {
    case 'CART_ICON':
      return <FaShoppingCart style={{ fontSize: payload }} />;
    case 'FILLED_WISHLIST':
      return <FaHeart style={{ fontSize: payload }} />;
    case 'OUTLINE_WISHLIST':
      return <FaRegHeart style={{ fontSize: payload }} />;
    case 'CLEAR':
      return <AiOutlineClear style={{ fontSize: payload }} />;
    case 'FILTER':
      return <BsFilter style={{ fontSize: payload }} />;
    case 'ORDER':
      return <FaBox style={{ fontSize: payload }} />;
    case 'STAR':
      return <AiFillStar style={{ fontSize: payload }} />;
    case 'CHECK':
      return (
        <BsFillCheckCircleFill style={{ fontSize: payload, color: 'green' }} />
      );
    default:
      return null;
  }
};
