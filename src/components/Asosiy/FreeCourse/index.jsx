import React from 'react';
import FreeCourse from '../../Generic/FreeCourse';
import { Header, Container } from './style';
import { data } from '../../../mock/freeCourse';

const index = () => {
  return (
    <div>
      <Header>
        <Header.Title>Bepul Darsliklar</Header.Title>
        <Header.Provider>Barcha kurslar {'>'}</Header.Provider>
      </Header>
      <Container>
        {data?.map(({ id, courseName, description }) => (
          <FreeCourse
            key={id}
            courseName={courseName}
            description={description}
          />
        ))}
      </Container>
    </div>
  );
};

export default index;
