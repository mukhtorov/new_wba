import React, { useState, useContext } from 'react';
import { Container, Icon, Drawer, Close, Header, AntSwitch } from './style';
import StateController from '../../context';

export const Settings = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem('dark') || false);
  const [fun, setFun] = useState(localStorage.getItem('fun') || false);
  const [state, setState] = useContext(StateController);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const changeMode = () => {
    localStorage.setItem('dark', !dark);
    setDark(!dark);
    setState({ ...state, isDark: !dark });
  };
  const changeFun = () => {
    localStorage.setItem('fun', !fun);
    setFun(!fun);
    setState({ ...state, isShowFunText: !fun });
  };

  return (
    <Container onClick={showDrawer}>
      <Drawer open={open}>
        <Header border>
          Funksiyalar
          <Close onClick={onClose} />
        </Header>
        <Header>
          Qiziqarli Sayohat <AntSwitch onClick={changeFun} checked={fun} />
        </Header>
        <Header>
          Tugni Rejim <AntSwitch onClick={changeMode} checked={dark} />
        </Header>
      </Drawer>
      <Icon />
    </Container>
  );
};

export default Settings;
