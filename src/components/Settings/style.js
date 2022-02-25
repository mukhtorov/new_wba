import styled from 'styled-components';
import { ReactComponent as gear } from '../../assets/icons/settings.svg';
import { ReactComponent as close } from '../../assets/icons/close.svg';
import { Switch } from 'antd';

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 30%;
  align-items: center;
  /* justify-content: flex-end */
  width: 70px;
  height: 56px;
  background: var(--colorBlue);
  box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
  border-radius: 0px 100px 100px 0px;
  cursor: pointer;
  z-index: 999;
`;

export const Icon = styled(gear)`
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  margin-left: auto;
  margin-right: 20px;
`;
export const Close = styled(close)`
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  margin-left: auto;
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 30%;
  width: 220px;
  height: 150px;
  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 0px 10px 10px 0px;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
  transition: all 0.3s linear;
  overflow: hidden;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  border-bottom: ${({ border }) => border && '1px solid #8fc5ff'};
  height: 56px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  padding: 0 20px;
  color: var(--colorBlue);
  flex-wrap: nowrap;
`;

export const AntSwitch = styled(Switch)`
  margin-left: auto;
`;
