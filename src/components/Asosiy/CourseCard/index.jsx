import React, { useContext } from 'react';
import { Container, Header, Wrapper, FunTextWrapper } from './style';
import CourseCard from '../../Generic/CourseCard';
import { data } from '../../../mock/courseCard';
import StateController from '../../../context';

const CourseCardWrapper = () => {
  const [state, setState] = useContext(StateController);
  console.log(state);
  return (
    <Wrapper>
      <Header>
        <Header.Title>Kurslar</Header.Title>
        <FunTextWrapper>
          <FunTextWrapper.Line />
          <FunTextWrapper.Text>
            bu dollarni kursimas, o’quv kursi. (10820 &#129297;)
          </FunTextWrapper.Text>
        </FunTextWrapper>
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
