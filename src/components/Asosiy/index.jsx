import React from 'react';
import Main from './Main';
import About from './About';
import Statistiks from './Statistiks';
import { Container } from './style';

export const Asosiy = () => {
  return (
    <Container>
      <Main />
      <Statistiks />
      <About />
    </Container>
  );
};
