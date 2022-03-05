import React from 'react';
import {
  Card,
  Container,
  Count,
  Title,
  Line,
  FunTextWrapper,
  FunText,
} from './style';
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
      <FunTextWrapper>
        <Line />
        <FunText>
          85 % bitiruvchilar hozir ishlashyapti, sizda nima gaplar &#129299;
        </FunText>
      </FunTextWrapper>
    </Container>
  );
};

export default Statistiks;
