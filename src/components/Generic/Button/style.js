import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ display }) => (display ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? `${width}` : '120px')};
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
  overflow: hidden;
  transition: all 0.3s, transform 0;
  font-family: Inter;
  :active {
    transform: scale(0.95);
  }
  :hover {
    color: white;
  }
  ::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--colorBlue);
    z-index: -1;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
  :hover::before {
    transform: scaleX(1);
  }
`;
