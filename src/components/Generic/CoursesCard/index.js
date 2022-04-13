import React from 'react';
import { Wrapper } from './style';
import android from '../../../assets/imgs/android.png';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Courses = ({ type, description, date, place, isShow, pathname }) => {
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
      <Link
        to={pathname + '/1' || '/'}
        style={{ width: '60%', margin: 'auto' }}
      >
        <Button border mt='24' mb='40' width='100%'>
          Batafsil
        </Button>
      </Link>
    </Wrapper>
  );
};

export default Courses;
