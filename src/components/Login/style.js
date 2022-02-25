import styled from 'styled-components';
import { Input } from 'antd';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as pw } from '../../assets/icons/pw.svg';

export const Container = styled.div`
  display: flex;
  padding: 0 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: ${({ flex }) => flex};
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 4.2vw;
  width: 90%;
  line-height: 88px;

  letter-spacing: -0.08em;
`;

export const Form = styled.div`
  width: 75%;
  height: 586px;
  padding: 40px 24px;

  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

Form.Title = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;

  letter-spacing: -0.06em;
  color: var(--colorBlue);
`;

export const AntInput = styled(Input)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: var(--background);
  .ant-input {
    background: var(--background) !important;
  }
`;

export const Label = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 28px;
  margin-top: 24px;
  color: #1b1a18;
`;
export const ErrorLabel = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: red;
`;

export const Icons = styled.div``;

Icons.Email = styled(email)``;
Icons.Pw = styled(pw)``;
