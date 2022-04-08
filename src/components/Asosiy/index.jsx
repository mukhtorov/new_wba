import React from 'react';
import Main from './Main';
import About from './About';
import Statistiks from './Statistiks';
import Course from './Course';
import { Container } from './style';
import FreeCourse from './FreeCourse';
import Team from './Team';
import Certificate from './Certificate';

export const Asosiy = () => {
  return (
    <Container>
      <Main />
      <Statistiks />
      <About />
      <Course />
      <FreeCourse />
      <Team />
      <Certificate />
    </Container>
  );
};
