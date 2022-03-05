import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Fira Code;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  height: 476px;
  margin-bottom: 32px;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: Center;
`;
export const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 40px;
`;
Left.Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 40px;
  margin-bottom: 16px;
`;
Left.Name = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
  color: #1b1a18;
`;
Left.Type = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  margin-bottom: 16px;
`;
Right.Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #514d48;
  margin-bottom: 36px;
  font-family: Inter;
  text-align: left;
`;
Left.IconWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-bottom: 42px;
`;
Left.Icon = styled.img`
  cursor: pointer;
`;
Right.WrapperHash = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10%;
`;
Right.Hash = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #0076f5;
  cursor: pointer;
`;
