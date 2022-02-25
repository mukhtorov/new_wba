import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container, Layout, Link, Wrapper } from './style';
import { navbar } from '../../utils/navbar';
import { BrandName } from '../Generic/BrandName';
import { Button } from '../Generic/Button';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout>
      <Container>
        <BrandName />
        <Wrapper flex>
          {navbar.map(
            ({ id, pathname, title, hidden }) =>
              !hidden && (
                <Link
                  active={location?.pathname === pathname ? 'true' : 'false'}
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
      </Container>
      <Outlet />
    </Layout>
  );
};