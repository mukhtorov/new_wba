import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 79px;
  line-height: 88px;
  text-align: center;
  color: #000;
  letter-spacing: -0.08em;
  @media (max-width: 1500px) {
    font-size: 69px;
    line-height: 78px;
  }
  @media (max-width: 1300px) {
    font-size: 59px;
    line-height: 58px;
  }
  @media (max-width: 800px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const BlueText = styled.div`
  color: #0076f5;
  display: inline-block;
`;
