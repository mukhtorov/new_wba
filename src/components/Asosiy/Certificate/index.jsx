import React, { useContext } from 'react';
import { Wrapper, Header, Body, FuntextWrapper } from './style';
import certificate from '../../../assets/imgs/certificate.png';
import line from '../../../assets/imgs/certificateLine.png';
import ModeContext from '../../../context/StateMode';

const Certificate = () => {
  const [mode] = useContext(ModeContext);
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
            {mode.fun && (
              <FuntextWrapper>
                <FuntextWrapper.FunImg src={line} />
                <FuntextWrapper.Text>
                  bu joyda ko’proq jumla bo’lishi mumkin edi... meni
                  tushundinggiz deb o’ylayman. Tugadi &#128578;
                </FuntextWrapper.Text>
              </FuntextWrapper>
            )}
          </Body.Right.Paragraph>
        </Body.Right>
      </Body>
    </Wrapper>
  );
};

export default Certificate;
