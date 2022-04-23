import React from 'react';
import { Wrapper } from './style';

const MobileCollapse = () => {
  return (
    <Wrapper>
      <Wrapper.Collapsed>
        <Wrapper.Paneled header='Mobile 1'></Wrapper.Paneled>
        <Wrapper.Paneled header='Mobile 2'></Wrapper.Paneled>
        <Wrapper.Paneled header='Mobile 3'></Wrapper.Paneled>
        <Wrapper.Paneled header='Mobile 4'></Wrapper.Paneled>
      </Wrapper.Collapsed>
    </Wrapper>
  );
};

export default MobileCollapse;
