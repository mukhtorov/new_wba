import React from 'react';
import OpenerText from './OpenerText';
import Footer from '../Generic/Footer';
import { Container, Wrapper } from './style';
import Card from './Card';

const natijalar = () => {
  return (
    <Wrapper>
      <Container>
        <OpenerText />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default natijalar;
