import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`;
export const CourseLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: cover;
`;
Wrapper.Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
  margin: 16px 0 8px 0;
`;
Wrapper.Description = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #514d48;
  margin-bottom: 24px;
`;
Wrapper.Date = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #514d48;
  margin-bottom: ${({ bottom }) => (bottom ? '24px' : '8px')};
`;
Wrapper.BlueText = styled.div`
  font-family: Inter;
  color: #0076f5;
  display: inline-block;
`;
