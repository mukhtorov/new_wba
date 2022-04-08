import React from 'react';
import Main from './Main';
import About from './About';
import Statistiks from './Statistiks';
import Course from './Course';
import { Container, Wrapper } from './style';
import FreeCourse from './FreeCourse';
import Team from './Team';
import Certificate from './Certificate';
import Footer from '../Generic/Footer';

export const Asosiy = () => {
  return (
    <Wrapper>
      <Container>
        <Main />
        <Statistiks />
        <About />
        <Course />
        <FreeCourse />
        <Team />
        <Certificate />
      </Container>
      <Footer />
    </Wrapper>
  );
};
