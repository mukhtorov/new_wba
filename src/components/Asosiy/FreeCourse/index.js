import React from 'react';
import FreeCourseCard from '../../Generic/FreeCourse';
import { data } from '../../../mock/freecourse';
import { Wrapper, Header, Container } from './style';

const FreeCourse = () => {
  return (
    <Wrapper>
      <Header>
        <Header.Title>Bepul darsliklar</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
      </Header>
      <Container>
        {data.map((value) => (
          <FreeCourseCard
            type={value.type}
            key={value.id}
            description={value.description}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default FreeCourse;
