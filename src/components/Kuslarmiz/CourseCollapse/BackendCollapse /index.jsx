import React from 'react';
import { Wrapper } from './style';

const BackendCollapse = () => {
  return (
    <Wrapper>
      <Wrapper.Collapsed>
        <Wrapper.Paneled header='Backend 1'></Wrapper.Paneled>
        <Wrapper.Paneled header='Backend 2'></Wrapper.Paneled>
        <Wrapper.Paneled header='Backend 3'></Wrapper.Paneled>
        <Wrapper.Paneled header='Backend 4'></Wrapper.Paneled>
      </Wrapper.Collapsed>
    </Wrapper>
  );
};

export default BackendCollapse;
