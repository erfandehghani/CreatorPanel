import React from 'react';

const YourComponent = ({ children }) => {
  return (
    <div className="p-4 rounded-2xl bg-white h-full shadow-xl divide-y-2 divide-primary space-y-4 flex flex-col items-stretch justify-between">
      {children}
    </div>
  );
};

export default YourComponent;
