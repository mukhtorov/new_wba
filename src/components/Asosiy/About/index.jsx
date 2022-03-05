import React from 'react';
// import { useLocation } from 'react-router-dom';
import {
  Container,
  Image,
  ImgWrapper,
  Left,
  Right,
  Title,
  FunTextWrapper,
} from './style';
import img from '../../../assets/imgs/mainPhoto.png';

export const Main = () => {
  return (
    <>
      <Title>Biz haqimizda</Title>
      <Container>
        <Right>
          <ImgWrapper>
            <Image.Set2 src={img} />
          </ImgWrapper>
          <ImgWrapper>
            <Image.Set1 src={img} />
          </ImgWrapper>
        </Right>
        <Left>
          <FunTextWrapper>
            <FunTextWrapper.Line />
            <FunTextWrapper.Text>
              bizi yomonlashsa ishanmanglar, kelib ko’ringlar balki undanam
              yomondirmiz &#128540;
            </FunTextWrapper.Text>
          </FunTextWrapper>
          <Left.Title>Biz haqimizda faqat bizdan eshiting </Left.Title>
          <Left.Text>
            Eget nam quisque lobortis ipsum sollicitudin. Ultricies morbi platea
            ac vel duis sed pretium. Vel ac magnis et lobortis adipiscing
            tempor, tincidunt urna. Morbi aenean natoque bibendum ut volutpat.
          </Left.Text>
          <Left.Text>
            Varius cras facilisi eleifend consequat libero sit nisl. Purus arcu
            viverra facilisi in. Sit consequat dolor lectus velit, neque, enim,
            fames laoreet.
          </Left.Text>
        </Left>
      </Container>
    </>
  );
};

export default Main;
