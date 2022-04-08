import React from 'react';
import CoursesCard from '../../Generic/CoursesCard/index.js';
import { data } from '../../../mock/courses.js';
import { Wrapper, Header, Container } from './style.js';

const Course = () => {
  return (
    <Wrapper>
      <Header>
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
