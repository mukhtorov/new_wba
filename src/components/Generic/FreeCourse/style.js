import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f5faff;
  border-radius: 10px;
  padding: 16px 16px 0 16px;
  :hover {
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  }
`;
Wrapper.Img = styled.img`
  width: 100%;
  height: 198px;
`;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
  margin: 16px 0 8px 0;
`;
Wrapper.Description = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #514d48;
`;
