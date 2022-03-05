import styled from 'styled-components';
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
`;
Header.Title = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
  color: #1b1a18;
`;
Header.Provider = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: #0076f5;
  cursor: pointer;
`;
export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (min-width: 600px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      .cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
`;
