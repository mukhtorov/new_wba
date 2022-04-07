import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  position: sticky;
  top: 0;
  background: var(--background);
  flex-wrap: wrap;
  padding: 0 8%;
  z-index: 9999;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex && 2};
  margin: ${({ flex }) => flex && '0 15%'};
  justify-content: space-around;
  padding: 15px 0;
  @media (min-width: 1300px) {
    display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
  }
  @media (max-width: 1300px) {
    display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
  }
`;

export const Link = styled(NavLink)`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${({ active }) =>
    ` var(${active === 'true' ? '--colorBlue' : '--colorBlack'})`};
  text-decoration: none;
  margin: 0 2px;
  white-space: nowrap;
`;
