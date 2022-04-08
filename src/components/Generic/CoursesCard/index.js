import React from 'react';
import { Wrapper } from './style';
import android from '../../../assets/imgs/android.png';
import Button from '../Button';

const Courses = ({ type, description, date, place, isShow }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={android} />
      <Wrapper.CourseName>{type}</Wrapper.CourseName>
      <Wrapper.Description>{description}</Wrapper.Description>
      <Wrapper.Description isShow={isShow} smallb>
        Boshlanish kuni: <Wrapper.Blue>{date}</Wrapper.Blue>
      </Wrapper.Description>
      <Wrapper.Description isShow={isShow} smallb>
        Qolgan joylar: <Wrapper.Blue>{place}</Wrapper.Blue>
      </Wrapper.Description>
      <Button border mt='24' mb='40' width='60%'>
        Batafsil
      </Button>
    </Wrapper>
  );
};

export default Courses;
