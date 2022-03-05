import React from 'react';
import { Wrapper, CourseLogo } from './style';
import Button from '../Button';

const index = ({ logo, courseName, description, startDate, emptyPlace }) => {
  return (
    <Wrapper>
      <CourseLogo
        src={
          logo ||
          'https://media.proglib.io/posts/2019/11/03/c236c35c960c7016e0d785b0558026c4.png'
        }
      />
      <Wrapper.Title>{courseName || 'Loading...'}</Wrapper.Title>
      <Wrapper.Description>
        {description || "Tez orada Qo'shiladi! Kuting Iltimos."}
      </Wrapper.Description>
      <Wrapper.Date>
        Boshlanish kuni:
        <Wrapper.BlueText>{startDate || '22.02.2022'}</Wrapper.BlueText>
      </Wrapper.Date>
      <Wrapper.Date bottom>
        Bo'sh joylar:
        <Wrapper.BlueText>
          {emptyPlace || '7'}
          ta
        </Wrapper.BlueText>
      </Wrapper.Date>
      <Button border={'#0076F5'} width='50%'>
        Ko'rish
      </Button>
    </Wrapper>
  );
};

export default index;
