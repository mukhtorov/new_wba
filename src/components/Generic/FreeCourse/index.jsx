import React from 'react';
import Button from '../Button';
import { Wrapper } from './style';

const index = ({ logo, courseName, description }) => {
  return (
    <Wrapper>
      <Wrapper.Image
        src={
          logo ||
          'https://s3.almamat.com/content/blog/posts/low-code-i-zero-code/piqsels.com-id-zvygw.jpg'
        }
      />
      <Wrapper.Title>{courseName}</Wrapper.Title>
      <Wrapper.Description>{description}</Wrapper.Description>
      <Button border='#0076F5' width='45%'>
        Ko'rish
      </Button>
    </Wrapper>
  );
};

export default index;
