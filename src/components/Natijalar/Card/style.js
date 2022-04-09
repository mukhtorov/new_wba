import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media (max-width: 1485px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 750px) {
    grid-gap: 21px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
  position: relative;
`;
