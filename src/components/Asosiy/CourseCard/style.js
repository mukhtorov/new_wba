import styled from 'styled-components';
import { ReactComponent as CourseLine } from '../../../assets/icons/course_line.svg';

export const Wrapper = styled.div`
  margin: 135px 0 144px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
  position: relative;
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
`;
export const FunTextWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 15%;
  top: -50%;
`;
FunTextWrapper.Line = styled(CourseLine)``;
FunTextWrapper.Text = styled.div`
  font-family: Chilanka;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #514d48;
`;
