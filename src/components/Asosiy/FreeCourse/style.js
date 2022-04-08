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
