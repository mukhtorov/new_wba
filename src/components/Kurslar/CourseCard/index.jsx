import React from 'react';
import { Container, Header, Wrapper } from './style';
import CourseCard from '../../Generic/CourseCard';
import { data } from '../../../mock/courseCard';

const CourseCardWrapper = () => {
  return (
    <Wrapper>
      <Header>
        <Header.Title>Kurslar</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
      </Header>
      <Container>
        {data?.map(({ id, courseName, description, startDate, emptyPlace }) => (
          <CourseCard
            key={id}
            courseName={courseName}
            description={description}
            startDate={startDate}
            emptyPlace={emptyPlace}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default CourseCardWrapper;
