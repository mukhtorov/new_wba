import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 83px 0 24px 0;
  position: relative;
  @media (max-width: 800px) {
    margin-top: 200px;
  }
`;
Header.Title = styled.div`
  font-family: 'Fira Code';
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
  color: #1b1a18;
  @media (max-width: 800px) {
    font-size: 33px;
    line-height: 40px;
  }
`;
Header.Provider = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 28px;
  color: #0076f5;
  cursor: pointer;
  @media (max-width: 800px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 35px 0 100px 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 750px) {
    grid-gap: 21px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-gap: 21px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FuntextWrapper = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  left: 25%;
  @media (max-width: 1850px) {
    left: 30%;
  }
  @media (max-width: 1550px) {
    left: 40%;
  }
  @media (max-width: 1150px) {
    left: 50%;
    top: -80px;
  }
  @media (max-width: 750px) {
    left: 30%;
  }
`;
FuntextWrapper.FunImg = styled.img`
  width: 250px;
  @media (max-width: 1550px) {
    width: 151px;
  }
  @media (max-width: 1050px) {
    width: 110px;
  }
  @media (max-width: 630px) {
    width: 50px;
    height: 60px;
    transform: rotateZ(-5deg);
  }
`;
FuntextWrapper.Text = styled.div`
  width: 227px;
  font-family: 'Chilanka';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #514d48;
  margin-left: 20px;
  @media (max-width: 1050px) {
    font-size: 17px;
    line-height: 23px;
    width: 200px;
    margin-left: 20px;
  }
  @media (max-width: 630px) {
    width: 150px;
    font-size: 14px;
    line-height: 20px;
  }
`;
