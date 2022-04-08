import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 83px 0 24px 0;
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
export const Body = styled.div`
  display: flex;
  height: 524px;
  @media (max-width: 1300px) {
    height: 424px;
  }
  @media (max-width: 1000px) {
    height: 324px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: 600px;
  }
  @media (max-width: 800px) {
    height: 500px;
  }
  @media (max-width: 600px) {
    height: 400px;
  }
`;
Body.Left = styled.div`
  flex: 1;
`;
Body.Left.Img = styled.img`
  width: 100%;
  height: 100%;
`;
Body.Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Body.Right.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
  width: 60%;
  margin-bottom: 16px;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 24px;
  }
`;
Body.Right.Paragraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #514d48;
  width: 60%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
