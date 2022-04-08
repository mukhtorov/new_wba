import React from 'react';
import TeamCard from '../../Generic/Team';
import { data } from '../../../mock/team';
import { Wrapper, Header, Container } from './style';

const Team = () => {
  return (
    <Wrapper>
      <Header>
        <Header.Title>Bizning jamoa</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
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
