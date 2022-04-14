import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 35px 0 100px 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 1486px) {
    grid-gap: 21px;
    grid-template-columns: repeat(2, 1fr);
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
  @media (max-width: 750px) {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.06em;
    color: #1b1a18;
  }
`;

export const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 34px;
  color: #514d48;
  @media (max-width: 750px) {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #514d48;
  }
`;
export const FunTextWrapper = styled.div`
  position: absolute;
  bottom: -75px;
  right: 17%;
  display: flex;
  @media (max-width: 800px) {
    right: 17%;
  }
  @media (max-width: 550px) {
    right: 10%;
  }
  @media (max-width: 450px) {
    right: -5%;
  }
`;
FunTextWrapper.FunLine = styled.img`
  @media (max-width: 800px) {
    width: 67px;
  }
`;
FunTextWrapper.Text = styled.div`
  font-family: 'Chilanka';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #1b1a18;
  width: 294px;
  @media (max-width: 800px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    width: 227px;
    margin-left: 20px;
  }
`;
