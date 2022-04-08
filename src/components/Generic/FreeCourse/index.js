import React from 'react';
import freeCourse from '../../../assets/imgs/freeCourse.png';
import Button from '../Button';
import { Wrapper } from './style';

const FreeCourse = ({ type, description }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={freeCourse} />
      <Wrapper.Title>{type}</Wrapper.Title>
      <Wrapper.Description>{description}</Wrapper.Description>
      <Button mt='8' mb='40' border width='60%'>
        Ko'rish
      </Button>
    </Wrapper>
  );
};

export default FreeCourse;
