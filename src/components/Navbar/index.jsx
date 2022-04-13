import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container, Layout, Link, Wrapper } from './style';
import { navbar } from '../../utils/navbar';
import { BrandName } from '../Generic/BrandName';
import { Button } from '../Generic/Button';
import MobileIcon from '../../assets/icons/navbarMenu.svg';

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout>
      <Container setZ={visible}>
        <BrandName />
        <Wrapper flex>
          {navbar.map(
            ({ id, pathname, title, hidden }) =>
              !hidden && (
                <Link
                  active={location?.pathname.includes(pathname).toString()}
                  key={id}
                  to={pathname}
                >
                  {title}
                </Link>
              )
          )}
        </Wrapper>
        <Wrapper onClick={() => navigate('/login')}>
          <Button border>Kirish</Button>
        </Wrapper>
        <Wrapper mobile>
          <img onClick={() => setVisible(true)} src={MobileIcon} alt='1' />
          <Container.Drawer
            placement='right'
            onClose={() => setVisible(false)}
            visible={visible}
          >
            <Container.MobileWrapper>
              {navbar.map(
                ({ id, pathname, title, hidden }) =>
                  !hidden && (
                    <Link
                      active={location?.pathname.includes(pathname).toString()}
                      key={id}
                      to={pathname}
                    >
                      {title}
                    </Link>
                  )
              )}
            </Container.MobileWrapper>
          </Container.Drawer>
        </Wrapper>
      </Container>
      <Outlet />
    </Layout>
  );
};
