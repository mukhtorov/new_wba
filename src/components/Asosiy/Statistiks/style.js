import styled from 'styled-components';
import { ReactComponent as StatisticsLine } from '../../../assets/icons/statistics_line.svg';

export const Container = styled.div`
  width: 100%;
  margin: 135px 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1450px) {
    grid-template-columns: repeat(4, 1fr);
  }
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 246px;
  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const Count = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  margin-top: 20px;
  letter-spacing: -0.06em;
  color: #1b1a18;
`;

export const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 34px;
  color: #514d48;
`;
export const Line = styled(StatisticsLine)``;
export const FunTextWrapper = styled.div`
  position: absolute;
  bottom: -30%;
  right: -5%;
  display: flex;
  @media (max-width: 1600px) {
    bottom: -25%;
    right: -7%;
  }
  @media (max-width: 1450px) {
    bottom: -15%;
    right: -7%;
  }
  @media (max-width: 900px) {
    bottom: -15%;
  }
`;
export const FunText = styled.div`
  font-family: Chilanka;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #1b1a18;
  width: 50%;
  padding-right: 20px;
`;
