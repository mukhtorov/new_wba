import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ display }) => (display ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? `${width}px` : '120px')};
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  color: ${({ border }) => (border ? 'var(--colorBlue)' : 'white')};
  border: ${({ border }) => border && '1px solid var(--colorBlue)'};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
  margin-right: ${({ mr }) => mr && `${mr}px`};
  margin-left: ${({ ml }) => ml && `${ml}px`};
  filter: drop-shadow(4px 8px 16px rgba(0, 118, 245, 0.4));
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s, transform 0;
  :active {
    transform: scale(0.95);
  }
  :hover {
    background: var(--colorBlue);
    color: white;
  }
`;
