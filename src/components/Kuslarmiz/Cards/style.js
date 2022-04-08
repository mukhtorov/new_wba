import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 96px;
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
