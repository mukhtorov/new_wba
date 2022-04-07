import React, { useState, useEffect } from 'react';
import { Container, Image, ImgWrapper, Left, Line, Right } from './style';
import BlueText from '../../Generic/BlueText';
import Button from '../../Generic/Button';
import img from '../../../assets/imgs/mainPhoto.png';
import { FunText } from '../style';

export const Main = () => {
  const [fun, setFun] = useState(localStorage.getItem('fun') || false);
  useEffect(() => {
    console.log('render');
    setFun(localStorage.getItem('fun'));
  }, [localStorage.getItem('fun')]);

  window.addEventListener('storage', () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem('fun')), 'test');
  });

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
            {/* <Line /> */}
          </div>
          {/* <FunText display={fun}>
            siz vapshe hech narsa bilmasangizam o’qito’ramiz (sizam vruchat
            qvorarsiz )
          </FunText> */}
        </Left.ButtonWrapper>
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
