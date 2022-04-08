import React from 'react';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import github from '../../../assets/icons/github.svg';
import youtube from '../../../assets/icons/youtube.svg';
import Button from '../Button';
import { BrandName } from '../BrandName';
import { Container, Wrapper } from './style';

const Footer = () => {
  return (
    <Wrapper>
      <Wrapper.Hr />
      <Container>
        <Wrapper.Container>
          <Wrapper.Container.First>
            <Wrapper.Container.First.Text>
              Neumorphism UI PRO is a premium Bootstrap UI Kit built based on
              the newest design trend called Neumorphism.
            </Wrapper.Container.First.Text>
            <Wrapper.SocialNetwork>
              <Wrapper.Icon src={facebook} />
              <Wrapper.Icon src={instagram} />
              <Wrapper.Icon src={youtube} />
              <Wrapper.Icon src={github} />
            </Wrapper.SocialNetwork>
          </Wrapper.Container.First>
          <Wrapper.Container.Main>
            <Wrapper.Container.Second>
              <Wrapper.Title>Webbrain</Wrapper.Title>
              <Wrapper.List>
                <Wrapper.Item>Team</Wrapper.Item>
                <Wrapper.Item>Parners</Wrapper.Item>
                <Wrapper.Item>Lessons</Wrapper.Item>
                <Wrapper.Item>About Us</Wrapper.Item>
              </Wrapper.List>
            </Wrapper.Container.Second>
            <Wrapper.Container.Third>
              <Wrapper.Title>Others</Wrapper.Title>
              <Wrapper.List>
                <Wrapper.Item>Team</Wrapper.Item>
                <Wrapper.Item>Parners</Wrapper.Item>
                <Wrapper.Item>Lessons</Wrapper.Item>
                <Wrapper.Item>About Us</Wrapper.Item>
              </Wrapper.List>
            </Wrapper.Container.Third>
          </Wrapper.Container.Main>
          <Wrapper.Container.Fourth>
            <Wrapper.Title mb>Others</Wrapper.Title>
            <Wrapper.Item>
              Join our mailing list. We write rarely, but only the best content
            </Wrapper.Item>
            <Wrapper.Input placeholder='Email manzilingiz' />
            <Button width='100%' bg>
              Yuborish
            </Button>
          </Wrapper.Container.Fourth>
        </Wrapper.Container>
      </Container>
      <Wrapper.Hr />
      <Wrapper.BrandWrapper>
        <BrandName />
        <Wrapper.BrandParagraph>
          Copyright &copy; Webbrain 2021. All rights reserved
        </Wrapper.BrandParagraph>
      </Wrapper.BrandWrapper>
    </Wrapper>
  );
};

export default Footer;
