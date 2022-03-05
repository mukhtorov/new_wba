import React from 'react';
import Instagram from '../../../assets/icons/instagram.svg';
import Github from '../../../assets/icons/github.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Youtube from '../../../assets/icons/youtube.svg';

import { Wrapper } from './style';

const index = ({ image, name, type, description, mt }) => {
  return (
    <Wrapper mt={mt}>
      <Wrapper.Image
        src={image || 'https://avatars.githubusercontent.com/u/44763931?v=4'}
      />
      <Wrapper.Name>{name}</Wrapper.Name>
      <Wrapper.Type>{type}</Wrapper.Type>
      <Wrapper.Description>{description}</Wrapper.Description>
      <Wrapper.IconWrapper>
        <Wrapper.Icon src={Facebook} />
        <Wrapper.Icon src={Instagram} />
        <Wrapper.Icon src={Youtube} />
        <Wrapper.Icon src={Github} />
      </Wrapper.IconWrapper>
    </Wrapper>
  );
};

export default index;
