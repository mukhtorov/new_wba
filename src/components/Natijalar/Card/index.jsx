import React from 'react';
import ResultCard from '../../Generic/ResultCard';
import { Header, Container } from './style';
import { data } from '../../../mock/result';

const index = () => {
  return (
    <div>
      <Container>
        {data.map(({ name, id, type, description }) => (
          <ResultCard
            mt={id % 2 === 0}
            name={name}
            key={id}
            type={type}
            description={description}
          />
        ))}
      </Container>
    </div>
  );
};

export default index;
