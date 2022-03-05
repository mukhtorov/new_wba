import React from 'react';
import { Container } from './style';
import Title from './Title';
import Card from './Card';

const index = () => {
  return (
    <Container>
      <Title />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default index;
