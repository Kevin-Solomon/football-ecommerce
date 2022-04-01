import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'boots',
  },
  {
    _id: uuid(),
    categoryName: 'football',
  },
  {
    _id: uuid(),
    categoryName: 'jersey',
  },
  {
    _id: uuid(),
    categoryName: 'sneakers',
  },
];
