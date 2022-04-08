import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 8%;
  margin-top: 76px;
`;

export const FunText = styled.div`
  display: ${({ display }) => !display && 'none'};
  position: relative;
  font-family: Italic;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  width: ${({ width }) => (width ? `${width}px` : '200px')};
  letter-spacing: 0.02em;
  color: #514d48;
  margin-left: auto;
  top: -110px;
  right: 230px;
`;
export const Wrapper = styled.div``;
