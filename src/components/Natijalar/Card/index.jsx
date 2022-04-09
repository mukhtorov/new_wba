import React from 'react';
import TeamCard from '../../Generic/Team';
import { data } from '../../../mock/natijalarCard';
import { Container } from './style';

const Card = () => {
  return (
    <Container>
      {data.map((value) => (
        <TeamCard
          name={value.name}
          type={value.type}
          description={value.description}
          key={value.id}
          mt={value.id % 2 === 0}
          bsh={true}
        />
      ))}
    </Container>
  );
};

export default Card;
