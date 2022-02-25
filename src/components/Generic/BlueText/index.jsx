import React, { memo } from 'react';
import { Container } from './style';

export const BlueText = ({ children }) => {
  return <Container>{children}</Container>;
};

export default memo(BlueText);
