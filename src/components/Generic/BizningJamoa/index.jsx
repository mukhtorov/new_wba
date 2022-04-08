import React from 'react';
import person from '../../../assets/imgs/team.png';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import github from '../../../assets/icons/github.svg';
import youtube from '../../../assets/icons/youtube.svg';
import { Wrapper } from './style';

const Card = ({ name, type, description, smalldescription }) => {
  return (
    <Wrapper>
      <Wrapper.Left>
        <Wrapper.Left.Image src={person} />
        <Wrapper.Left.Name>{name}</Wrapper.Left.Name>
        <Wrapper.Left.Type>{type}</Wrapper.Left.Type>
        <Wrapper.Left.Description>{smalldescription}</Wrapper.Left.Description>
        <Wrapper.SocialNetwork>
          <Wrapper.Icon src={facebook} />
          <Wrapper.Icon src={instagram} />
          <Wrapper.Icon src={youtube} />
          <Wrapper.Icon src={github} />
        </Wrapper.SocialNetwork>
      </Wrapper.Left>
      <Wrapper.Right>
        <Wrapper.Right.Title>{type}</Wrapper.Right.Title>
        <Wrapper.Right.Description>{description}</Wrapper.Right.Description>
        <Wrapper.Right.TagsWrapper>
          <Wrapper.Right.Tag>#html</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#css</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#bootstrap</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#sass</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#javascript</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#reactjs</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#angular</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#nodejs</Wrapper.Right.Tag>
          <Wrapper.Right.Tag>#guthub</Wrapper.Right.Tag>
        </Wrapper.Right.TagsWrapper>
      </Wrapper.Right>
    </Wrapper>
  );
};

export default Card;
