import React from 'react';
import { Container } from './style';
import Title from './Title';
import CourseCard from './CourseCard';

const index = () => {
  return (
    <Container>
      <Title />
      <CourseCard />
    </Container>
  );
};

export default index;
