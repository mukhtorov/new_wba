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
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FuntextWrapper = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  left: 15%;
  @media (max-width: 1050px) {
    left: 25%;
  }
  @media (max-width: 630px) {
    left: 40%;
  }
`;
FuntextWrapper.FunImg = styled.img`
  @media (max-width: 1050px) {
    width: 110px;
  }
  @media (max-width: 630px) {
    width: 50px;
    height: 60px;
  }
`;
FuntextWrapper.Text = styled.div`
  width: 300px;
  font-family: 'Chilanka';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #514d48;
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
