import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 35px 0 100px 0;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 329px;
  min-width: 270px;
  height: 246px;

  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

export const Count = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  margin-top: 20px;
  letter-spacing: -0.06em;
  color: #1b1a18;
`;

export const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 34px;
  /* identical to box height, or 136% */

  /* text secondary */

  color: #514d48;
`;
