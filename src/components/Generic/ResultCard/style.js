import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  top: ${({ mt }) => mt && '150px'};
  font-family: Fira Code;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  height: 476px;
  margin-top: 30px;
`;
Wrapper.Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 16px;
`;
Wrapper.Name = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
`;
Wrapper.Type = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: #0076f5;
  margin-bottom: 16px;
`;
Wrapper.Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #514d48;
  margin-bottom: 26px;
  text-align: center;
  width: 90%;
  font-family: Inter;
`;
Wrapper.IconWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-bottom: 42px;
`;
Wrapper.Icon = styled.img`
  cursor: pointer;
`;
