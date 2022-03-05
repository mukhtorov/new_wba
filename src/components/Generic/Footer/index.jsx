import React from 'react';
import {
  Wrapper,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
  OptionWrapper,
  Option,
  Title,
  Description,
  BrandNameWrapper,
} from './style';
import Button from '../../Generic/Button';
import { BrandName } from '../../Generic/BrandName';

const index = () => {
  return (
    <>
      <Wrapper>
        <FirstColumn>
          <Description>
            Neumorphism UI PRO is a premium Bootstrap UI Kit built based on the
            newest design trend called Neumorphism.
          </Description>
          <FirstColumn.IconsWrapper>
            <FirstColumn.Github />
            <FirstColumn.Google />
            <FirstColumn.Facebook />
          </FirstColumn.IconsWrapper>
        </FirstColumn>
        <SecondColumn>
          <Title>WebBrain</Title>
          <OptionWrapper>
            <Option>Docs</Option>
            <Option>Changelog</Option>
            <Option>Licence</Option>
            <Option>Support</Option>
          </OptionWrapper>
        </SecondColumn>
        <ThirdColumn>
          <Title>Others</Title>
          <OptionWrapper>
            <Option>Docs</Option>
            <Option>Changelog</Option>
            <Option>Licence</Option>
            <Option>Support</Option>
          </OptionWrapper>
        </ThirdColumn>
        <FourthColumn>
          <Title>Others</Title>
          <OptionWrapper>
            <Description>
              Neumorphism UI PRO is a premium Bootstrap UI Kit built based on
              the newest design trend called Neumorphism.
            </Description>
            <FourthColumn.Input placeholder='Email manzilinggiz' />
            <Button border='#2990FF' width='100%'>
              Yuborish
            </Button>
          </OptionWrapper>
        </FourthColumn>
      </Wrapper>
      <BrandNameWrapper>
        <BrandName />
        <BrandNameWrapper.Desc>
          Copyright &copy; Webbrain 2022. All rights reserved
        </BrandNameWrapper.Desc>
      </BrandNameWrapper>
    </>
  );
};

export default index;
