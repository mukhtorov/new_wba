import React from 'react';
import BizningJamoa from '../../Generic/BizningJamoa';
import { data } from '../../../mock/bizningjamoa';
import {} from './style';

const Cards = () => {
  return (
    <div>
      {data.map((value) => (
        <BizningJamoa
          key={value.id}
          name={value.name}
          type={value.type}
          description={value.description}
          smalldescription={value.smallDescription}
        />
      ))}
    </div>
  );
};

export default Cards;
