import React from 'react';
import CoursesCard from '../../Generic/CoursesCard/index.js';
import { data } from '../../../mock/courses.js';
import line from '../../../assets/imgs/kurslarLine.png';
import { Wrapper, Header, Container, FuntextWrapper } from './style.js';

const Course = () => {
  return (
    <Wrapper>
      <Header>
        <FuntextWrapper>
          <FuntextWrapper.FunImg src={line} />
          <FuntextWrapper.Text>
            bu dollarni kursimas, o’quv kursi. (10820 &#129297;)
          </FuntextWrapper.Text>
        </FuntextWrapper>
        <Header.Title>Kurslar</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
      </Header>
      <Container>
        {data.map((value) => (
          <CoursesCard
            key={value.id}
            date={value.date}
            type={value.type}
            description={value.description}
            place={value.place}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Course;
