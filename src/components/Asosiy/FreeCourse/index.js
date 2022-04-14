import React, { useContext } from 'react';
import FreeCourseCard from '../../Generic/FreeCourse';
import { data } from '../../../mock/freecourse';
import { Wrapper, Header, Container, FuntextWrapper } from './style';
import line from '../../../assets/imgs/kurslarLine.png';
import ModeContext from '../../../context/StateMode';

const FreeCourse = () => {
  const [mode] = useContext(ModeContext);
  return (
    <Wrapper>
      <Header>
        <Header.Title>Bepul darsliklar</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
        {mode.fun && (
          <FuntextWrapper>
            <FuntextWrapper.FunImg src={line} />
            <FuntextWrapper.Text>
              to’g’ri o’qidiz, tep-tekin kursalarimizam bor yesli cho’ &#128518;
            </FuntextWrapper.Text>
          </FuntextWrapper>
        )}
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
