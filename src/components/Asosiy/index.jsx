import React from 'react';
import Main from './Main';
import About from './About';
import Statistiks from './Statistiks';
import CourseCard from './CourseCard';
import FreeCourse from './FreeCourse';
import OurTeam from './OurTeam';
import Sertificate from './Sertificate';
import { Container } from './style';

export const Asosiy = () => {
  return (
    <Container>
      <Main />
      <Statistiks />
      <About />
      <CourseCard />
      <FreeCourse />
      <OurTeam />
      <Sertificate />
    </Container>
  );
};
