import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
import { realMadrid, football, manchesterUnited } from './../../assets/index';
export const products = [
  {
    _id: uuid(),
    title: 'Real Madrid Jersey',
    price: '5000',
    categoryName: 'jersey',
    inWishlist: true,
    imgSrc: realMadrid,
    isBestSeller: true,
  },
  {
    _id: uuid(),
    title: 'Nike Strike Football',
    price: '3000',
    inWishlist: false,
    categoryName: 'football',
    inWishlist: false,
    imgSrc: football,
  },
  {
    _id: uuid(),
    title: 'Manchecter United Jersey',
    price: '5000',
    inWishlist: true,
    categoryName: 'jersey',
    inWishlist: false,
    imgSrc: manchesterUnited,
  },
];
