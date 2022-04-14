import React, { useContext } from 'react';
import {
  Container,
  FunText,
  FunTextWrapper,
  Image,
  ImgWrapper,
  Left,
  Line,
  Right,
} from './style';
import BlueText from '../../Generic/BlueText';
import Button from '../../Generic/Button';
import img from '../../../assets/imgs/mainPhoto.png';
import ModeContext from '../../../context/StateMode';

export const Main = () => {
  const [mode] = useContext(ModeContext);
  return (
    <Container>
      <Left>
        <Left.Text>
          <BlueText>Eng kuchli</BlueText> va zamonaviy o’qitish uslubida ta’lim
          beruvchi <BlueText>markaz</BlueText>
        </Left.Text>
        <Left.ButtonWrapper>
          <div className='main-left'>
            <Button class='nav' mr={24} width={'30%'} border>
              Kurslarimiz
            </Button>
            <Button class='nav' display={'true'} width={'30%'} border>
              Aloqa
            </Button>
          </div>
        </Left.ButtonWrapper>
        {mode.fun && (
          <FunTextWrapper>
            <FunText>
              {'siz'} vapshe hech narsa bilmasangizam o’qito’ramiz (sizam
              vruchat qvorarsiz&#128521;)
            </FunText>
            <Line />
          </FunTextWrapper>
        )}
      </Left>
      <Right>
        <ImgWrapper>
          {' '}
          <Image.Set1 src={img} />
        </ImgWrapper>
        <ImgWrapper>
          {' '}
          <Image.Set2 src={img} />
        </ImgWrapper>
        <ImgWrapper>
          {' '}
          <Image.Set3 src={img} />
        </ImgWrapper>
      </Right>
    </Container>
  );
};

export default Main;
