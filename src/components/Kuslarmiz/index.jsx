import React from 'react';
import OpenerText from './OpenerText';
import Footer from '../Generic/Footer';
import { Container, Wrapper } from './style';
import Cards from './Cards';
import CourseCollapse from './CourseCollapse';

const Kurslarimiz = () => {
  return (
    <Wrapper>
      <Container>
        <OpenerText />
        <Cards />
        <CourseCollapse />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Kurslarimiz;
