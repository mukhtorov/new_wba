import React from 'react';
import { Card, Container, Count, Title } from './style';
import { statistiks } from '../../../mock/statistiks';

export const Statistiks = () => {
  return (
    <Container>
      {statistiks.map(({ id, Icon, title, count }) => (
        <Card key={id}>
          <Icon />
          <Count>{count} ta</Count>
          <Title>{title}</Title>
        </Card>
      ))}
    </Container>
  );
};

export default Statistiks;
