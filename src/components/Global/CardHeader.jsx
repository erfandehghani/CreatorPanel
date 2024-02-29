import React from 'react';

const CardHeader = ({ children, cardTitle }) => {
  return (
    <div class="flex justify-between items-center px-2">
    <h3 class="text-xl text-t-primary">
        {  cardTitle  }
    </h3>
    {children}
    <div class="w-6">
        {/* @include("icons.info") */}
    </div>
</div>

  );
};

export default CardHeader;
