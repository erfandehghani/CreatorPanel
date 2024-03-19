import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`${className} flex flex-col items-stretch justify-between p-4 space-y-4 bg-white divide-y-2 shadow-xl rounded-2xl divide-light-primary`}>
      {children}
    </div>
  );
};

export default Card;
