import React from 'react';
import { Wrapper } from './style';
import OurTeamCard from '../../Generic/OurTeamCard';
import { data } from '../../../mock/ourTeamCard';

const index = () => {
  return (
    <Wrapper>
      {data.map(({ name, type, id, description }) => (
        <OurTeamCard
          name={name}
          key={id}
          type={type}
          description={description}
        />
      ))}
    </Wrapper>
  );
};

export default index;
