import '../../Home.css';
import React from 'react';
import Card from '../../../../components/Card/Card';
import { manchesterUnited, realMadrid } from '../../../../assets';
function Trending() {
  return (
    <>
      <h2 class="text-center">Trending</h2>
      <div class="underline"></div>
      <div class="grid grid-column-2">
        <Card price={5000} imgSrc={realMadrid} name="Real Madrid Jersey" />
        <Card
          price={3000}
          imgSrc={manchesterUnited}
          name="Manchester United Jersey"
        />
      </div>
    </>
  );
}

export default Trending;
