import React from 'react';
import { Wrapper, Header, Body } from './style';
import certificate from '../../../assets/imgs/certificate.png';

const Certificate = () => {
  return (
    <Wrapper>
      <Header>
        <Header.Title>Bepul darsliklar</Header.Title>
      </Header>
      <Body>
        <Body.Left>
          <Body.Left.Img src={certificate} />
        </Body.Left>
        <Body.Right>
          <Body.Right.Title>
            +200 o’quvchilar bizga ishonishgan
          </Body.Right.Title>
          <Body.Right.Paragraph>
            Kursni tamomlagan talabalarning o’zlashtirish ko’rsatkichi e’tiborga
            olingan holda sertifikatlar beriladi.
          </Body.Right.Paragraph>
        </Body.Right>
      </Body>
    </Wrapper>
  );
};

export default Certificate;
