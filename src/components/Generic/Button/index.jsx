import React from 'react';
import { Container } from './style';

export const Button = ({
  display,
  onClick,
  width,
  height,
  children,
  border,
  mr,
  ml,
  mt,
  mb,
  bg,
}) => {
  return (
    <Container
      onClick={onClick}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      border={border}
      width={width}
      height={height}
      bg={bg}
    >
      {children}
    </Container>
  );
};

export default Button;
