import React, { useContext } from 'react';
import TeamCard from '../../Generic/Team';
import { data } from '../../../mock/team';
import { Wrapper, Header, Container, FuntextWrapper } from './style';
import line from '../../../assets/imgs/ourTeamLine.png';
import ModeContext from '../../../context/StateMode';

const Team = () => {
  const [mode] = useContext(ModeContext);
  return (
    <Wrapper>
      <Header>
        <Header.Title>Bizning jamoa</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
        {mode.fun && (
          <FuntextWrapper>
            <FuntextWrapper.FunImg src={line} />
            <FuntextWrapper.Text>
              bizning markaz gigantlari, agar ishanmaselar tizza bo’yi suvda
              turaslar aytippoye &#129320;
            </FuntextWrapper.Text>
          </FuntextWrapper>
        )}
      </Header>
      <Container>
        {data.map((value) => (
          <TeamCard
            name={value.name}
            type={value.type}
            description={value.description}
            key={value.id}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Team;
