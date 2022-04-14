import React, { useState, useContext } from 'react';
import { Container, Icon, Drawer, Close, Header, AntSwitch } from './style';
import ModeContext from '../../context/StateMode';

export const Settings = () => {
  const [mode, setMode] = useContext(ModeContext);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(localStorage.getItem('dark') || false);
  const [fun, setFun] = useState(localStorage.getItem('fun') || true);

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

    setMode({ ...mode, darkMode: JSON.parse(localStorage.getItem('dark')) });
  };
  const changeFun = () => {
    localStorage.setItem('fun', !fun);
    setFun(!fun);
    setMode({ ...mode, fun: JSON.parse(localStorage.getItem('fun')) });
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
