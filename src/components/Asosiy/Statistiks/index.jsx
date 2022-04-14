import React from 'react';
import { Card, Container, Count, FunTextWrapper, Title } from './style';
import { statistiks } from '../../../mock/statistiks';
import Line from '../../../assets/imgs/statistikLine.png';

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
        <FunTextWrapper.FunLine src={Line} />
        <FunTextWrapper.Text>
          85 % bitiruvchilar hozir ishlashyapti, sizda nima gaplar &#129299;
        </FunTextWrapper.Text>
      </FunTextWrapper>
    </Container>
  );
};

export default Statistiks;
