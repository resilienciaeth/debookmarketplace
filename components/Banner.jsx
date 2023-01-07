import React from 'react';

function Banner({ name, childStyles, parentStyles }) {
  return (
    <div className={`relative w-full flex items-center justify-center z-0 overflow-hidden bg-debook-1 ${parentStyles}`}>
      <p className={`font-bold text-5xl text-center leading-70 ${childStyles}`}>{name}</p>
    </div>
  );
}

export default Banner;
