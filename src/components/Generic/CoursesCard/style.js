import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f5faff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  :hover {
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  }
  cursor: pointer;
  text-align: center;
`;
Wrapper.Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 40px 0 16px 0;
`;
Wrapper.CourseName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
  margin-bottom: 8px;
`;
Wrapper.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #514d48;
  margin-bottom: ${({ smallb }) => (smallb ? '8px' : '24px')};
`;
Wrapper.Blue = styled.div`
  display: inline;
  color: #0076f5;
`;
