import React from 'react';
import { data } from '../../../mock/kurslarimiz';
import CoursesCard from '../../Generic/CoursesCard';
import { Container } from './style';

const Cards = () => {
  return (
    <Container>
      {data.map((value) => (
        <CoursesCard
          isShow={true}
          key={value.id}
          date={value.date}
          type={value.type}
          description={value.description}
          place={value.place}
        />
      ))}
    </Container>
  );
};

export default Cards;
