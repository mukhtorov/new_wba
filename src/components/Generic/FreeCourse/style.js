import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 2.5% 40px 2.5%;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  cursor: pointer;
`;
Wrapper.Image = styled.img`
  height: 198px;
  width: 100%;
  border-radius: 10px;
  margin: auto;
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
  color: #514d48;
  margin: 0 0 8px 0;
`;
