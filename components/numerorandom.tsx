import React from "react";
import NumeroInput from './campodenumero.jsx';
import NumeroInputTwo from './campodenumerotwo.jsx';

function getRandomIntInclusive(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export default getRandomIntInclusive;