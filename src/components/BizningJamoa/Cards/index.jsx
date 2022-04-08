import React from 'react';
import BizningJamoa from '../../Generic/BizningJamoa';
import { data } from '../../../mock/bizningjamoa';
import {} from './style';

const Crads = () => {
  return (
    <div>
      {data.map((value) => (
        <BizningJamoa
          name={value.name}
          type={value.type}
          description={value.description}
          smalldescription={value.smallDescription}
        />
      ))}
    </div>
  );
};

export default Crads;
