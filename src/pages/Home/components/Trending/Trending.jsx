import '../../Home.css';
import React from 'react';
import Card from '../../../../components/Card/Card';

function Trending() {
  return (
    <>
      <h2 class="text-center">Trending</h2>
      <div class="underline"></div>
      <div class="grid grid-column-2">
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Trending;
