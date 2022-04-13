import styled from 'styled-components';
import { ReactComponent as play } from '../../../../../assets/icons/play.svg';

export const Wrapper = styled.div`
  width: 84%;
  margin: auto;
  margin-top: 69px;
`;
Wrapper.BlueText = styled.div`
  color: #0076f5;
  display: inline;
`;
Wrapper.Header = styled.div`
  display: flex;
  align-items: end;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: start;
  }
`;
Wrapper.Header.Title = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
  color: #000;
  @media (max-width: 780px) {
    font-size: 28px;
    line-height: 34px;
  }
`;
Wrapper.Header.Owner = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  color: #514d48;
  margin-left: 60px;
  @media (max-width: 780px) {
    margin-left: 0px;
    margin-top: 8px;
  }
`;
Wrapper.Container = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  margin-top: 24px;
  grid-gap: 33px;
  @media (max-width: 1300px) {
    flex-direction: column;
    height: 1000px;
  }
`;
Wrapper.Container.Left = styled.div`
  flex: 2;
  position: relative;
  @media (max-width: 1300px) {
    height: 40%;
  }
  @media (max-width: 600px) {
    height: 10%;
  }
`;
Wrapper.Container.Left.Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;
Wrapper.Container.Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 18px;
  @media (max-width: 1300px) {
    grid-gap: 12px;
    height: 60%;
  }
  @media (max-width: 600px) {
    height: 90%;
  }
`;
Wrapper.Container.Right.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

Wrapper.Container.Right.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ active }) => (active ? '#0076F5' : '#000')};
  cursor: pointer;
  @media (max-width: 1500px) {
    font-size: 14px;
    line-height: 26px;
  }
  @media (max-width: 430px) {
    display: none;
  }
`;
Wrapper.Container.Right.Title.Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: start;
`;

Wrapper.Container.Right.Short = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${({ active }) => (active ? '#0076F5' : '#000')};
  cursor: pointer;
  display: none;
  @media (max-width: 430px) {
    display: block;
  }
`;
Wrapper.Container.Right.Time = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: right;
  color: #0076f5;
  @media (max-width: 1500px) {
    font-size: 12px;
    line-height: 26px;
  }
`;
Wrapper.Play = styled(play)`
  ${({ active }) =>
    active &&
    `
      & path {
        fill: #0076f5;
      }
    `}
  @media (max-width: 1500px) {
    width: 15px;
    height: 15px;
  }
`;
