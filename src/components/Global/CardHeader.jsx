import React from 'react';
import {InformationCircleIcon} from '@heroicons/react/24/outline'


const CardHeader = ({ children, cardTitle }) => {
  return (
    <div class="flex justify-between items-center px-2">
    <h3 class="text-xl text-dark-primary">
        {  cardTitle  }
    </h3>
    {children}
    <InformationCircleIcon class="size-6 text-light-secondary"/>
</div>

  );
};

export default CardHeader;
