import React from 'react';
import OurTeam from '../../Generic/OurTeam';
import { Header, Container } from './style';
import { data } from '../../../mock/ourTeam';

const index = () => {
  return (
    <div>
      <Header>
        <Header.Title>Bizning Jamoa</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
      </Header>
      <Container>
        {data.map(({ name, id, type, description }) => (
          <OurTeam name={name} key={id} type={type} description={description} />
        ))}
      </Container>
    </div>
  );
};

export default index;
