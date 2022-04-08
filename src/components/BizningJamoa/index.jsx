import React from 'react';
import OpenerText from './OpenerText';
import Footer from '../Generic/Footer';
import Cards from './Cards';
import { Container, Wrapper } from './style';

const BizningJamoa = () => {
  return (
    <Wrapper>
      <Container>
        <OpenerText />
        <Cards />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default BizningJamoa;
