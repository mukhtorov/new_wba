import React from 'react';
import { Container } from './style';
import { useLocation } from 'react-router-dom';

export const Generic = () => {
  const location = useLocation();
  return <Container>{location?.pathname} Coming soon...</Container>;
};
