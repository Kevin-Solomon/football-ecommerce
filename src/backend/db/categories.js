import { v4 as uuid } from 'uuid';
import { footballBoots, football, realMadrid, sneakers } from '../../assets';
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'boots',
    imgSrc: footballBoots,
  },
  {
    _id: uuid(),
    categoryName: 'football',
    imgSrc: football,
  },
  {
    _id: uuid(),
    categoryName: 'jersey',
    imgSrc: realMadrid,
  },
  {
    _id: uuid(),
    categoryName: 'sneakers',
    imgSrc: sneakers,
  },
];
