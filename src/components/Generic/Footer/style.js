import styled from 'styled-components';
import { ReactComponent as Facebook } from '../../../assets/icons/facebook.svg';
import { ReactComponent as Google } from '../../../assets/icons/google.svg';
import { ReactComponent as Github } from '../../../assets/icons/github.svg';

export const Wrapper = styled.div`
  padding: 0 8%;
  border-top: 1px solid #cfccc9;
  border-bottom: 1px solid #cfccc9;
  display: flex;
  margin-top: 112px;
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
`;
export const FirstColumn = styled.div`
  height: 320px;
  padding: 48px 48px 0 0;
  flex: 2;
`;
export const Description = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  color: #31344b;
  font-family: Nunito Sans;
`;
FirstColumn.IconsWrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  padding-left: 15px;
  padding-top: 15px;
`;
FirstColumn.Facebook = styled(Facebook)`
  width: 25px;
  height: 25px;
  & path {
    stroke: #0076f5;
    fill: #0076f5;
  }
`;
FirstColumn.Google = styled(Google)`
  width: 25px;
  height: 25px;
  & path {
    stroke: #0076f5;
    fill: #0076f5;
  }
`;
FirstColumn.Github = styled(Github)`
  width: 25px;
  height: 25px;
  & path {
    stroke: #0076f5;
    fill: #0076f5;
  }
`;
export const SecondColumn = styled.div`
  height: 320px;
  flex: 1;
  padding: 48px 48px 0 0;
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  color: #31344b;
  font-family: 'Nunito Sans', sans-serif;
`;
export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-evenly;
`;
export const Option = styled.div`
  font-style: normal;
  font-size: 16px;
  line-height: 26px;
  color: #31344b;
  font-family: Inter;
  font-weight: 500;
`;
export const ThirdColumn = styled.div`
  height: 320px;
  flex: 1;
  padding: 48px 48px 0 0;
`;
export const FourthColumn = styled.div`
  height: 320px;
  flex: 2;
  padding: 48px 48px 0 0;
`;
FourthColumn.Input = styled.input`
  outline: none;
  border: 1px solid #8fc5ff;
  height: 50px;
  width: 100%;
  padding-left: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #2990ff;
  border-radius: 5px;
  background: transparent;
  margin-bottom: 16px;
  margin-top: 7px;
  ::placeholder {
    color: #2990ff;
  }
`;
export const BrandNameWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
BrandNameWrapper.Desc = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #31344b;
  margin-top: 16px;
  font-family: Inter;
`;
