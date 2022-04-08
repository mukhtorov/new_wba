import React from 'react';
import OpenerText from './OpenerText';
import Footer from '../Generic/Footer';
import { Container, Wrapper } from './style';

const natijalar = () => {
  return (
    <Wrapper>
      <Container>
        <OpenerText />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default natijalar;
