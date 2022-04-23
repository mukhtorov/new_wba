import { Collapse } from 'antd';
import styled from 'styled-components';
const { Panel } = Collapse;

export const Wrapper = styled.div`
  /* box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15); */
`;
Wrapper.Collapsed = styled(Collapse)`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;
Wrapper.Paneled = styled(Panel)`
  margin: 20px;
  border: none;
  .ant-collapse-header {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 34px;
    color: #1b1a18;
  }
`;
Wrapper.PlanWrapper = styled.div``;
Wrapper.Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 34px;
  color: #1b1a18;
`;
Wrapper.Title.Paragraph = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  color: #514d48;
  padding-left: 10px;
`;
