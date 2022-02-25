import React from 'react';
import { useLocation } from 'react-router-dom';

export const Generic = () => {
  const location = useLocation();
  return <h1>{location?.pathname} Coming soon...</h1>;
};
