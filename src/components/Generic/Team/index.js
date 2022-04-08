import React from 'react';
import person from '../../../assets/imgs/team.png';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import github from '../../../assets/icons/github.svg';
import youtube from '../../../assets/icons/youtube.svg';
import { Wrapper } from './style';

const Team = ({ name, type, description }) => {
  return (
    <Wrapper>
      <Wrapper.Img src={person} />
      <Wrapper.Name>{name}</Wrapper.Name>
      <Wrapper.Type>{type}</Wrapper.Type>
      <Wrapper.Description>{description}</Wrapper.Description>
      <Wrapper.SocialNetwork>
        <Wrapper.Icon src={facebook} />
        <Wrapper.Icon src={instagram} />
        <Wrapper.Icon src={youtube} />
        <Wrapper.Icon src={github} />
      </Wrapper.SocialNetwork>
    </Wrapper>
  );
};

export default Team;
